import { html, nothing, TemplateResult } from 'lit';
import type {
  Translator,
  AvailableValve,
  ZoneConfig,
  ProgramFormState,
  ProgramValveForm,
} from '../shared/types';
import { renderFormRow, renderFormActions } from '../shared/shared-templates';
import {
  applyScheduleTimes,
  countActiveValvesAtSlot,
  moveValveInZone,
  orderZoneValves,
  setValveDuration,
  toggleValveAtSlot,
  updateValve,
} from './config-program-state';

const WEEKDAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

type FormUpdater = (form: ProgramFormState) => void;

export function renderProgramForm(
  form: ProgramFormState,
  zones: ZoneConfig[],
  valves: AvailableValve[],
  onSave: (form: ProgramFormState) => void,
  onCancel: () => void,
  onFormUpdate: FormUpdater,
  t: Translator,
): TemplateResult {
  const slots = [...form.schedule.times];
  const totalDuration = form.zones.reduce(
    (sum, z) => sum + z.valves.reduce((s, v) => s + (v.duration || 0), 0),
    0,
  );

  return html`
    <div class="inline-form">
      ${renderFormRow(
        t('config.name'),
        html`<input
          class="form-input"
          .value=${form.name}
          @input=${(e: InputEvent) =>
            onFormUpdate({ ...form, name: (e.target as HTMLInputElement).value })}
        />`,
      )}
      ${renderScheduleTimesChips(form, onFormUpdate, t)}
      ${slots.length === 0
        ? html`<div class="form-hint" style="color:var(--warning-color);">
            ${t('config.no_schedule_times')}
          </div>`
        : html`<div class="form-label" style="margin-top:12px;">${t('config.valves_per_slot')}</div>
            ${[...slots]
              .sort((a, b) => a.localeCompare(b))
              .map((slot) => renderSlotSection(slot, form, zones, valves, onFormUpdate, t))}`}
      ${totalDuration > 0
        ? html`<div class="total-duration">
            ${t('config.total_duration', { duration: totalDuration })}
          </div>`
        : nothing}
      <div class="form-row">
        <label class="checkbox-item">
          <input
            type="checkbox"
            .checked=${form.dry_run}
            @change=${() => onFormUpdate({ ...form, dry_run: !form.dry_run })}
          />
          ${t('config.dry_run')}
        </label>
        <div class="form-hint">${t('config.dry_run_hint')}</div>
      </div>
      ${renderFormActions(onCancel, () => onSave(form), t)}
    </div>
  `;
}

function renderScheduleTimesChips(
  form: ProgramFormState,
  onFormUpdate: FormUpdater,
  t: Translator,
): TemplateResult {
  const times = form.schedule.times ?? [];
  return renderFormRow(
    t('config.trigger_times'),
    html`<div class="schedule-chips">
      ${times.map(
        (time, idx) => html`
          <div class="schedule-chip-wrap">
            <input
              class="schedule-chip-input"
              type="time"
              .value=${time}
              @input=${(e: InputEvent) => {
                const newTimes = times.map((tt, i) =>
                  i === idx ? (e.target as HTMLInputElement).value : tt,
                );
                onFormUpdate(applyScheduleTimes(form, newTimes));
              }}
            />
            ${times.length > 1
              ? html`<button
                  class="chip-close"
                  @click=${() =>
                    onFormUpdate(
                      applyScheduleTimes(
                        form,
                        times.filter((_, i) => i !== idx),
                      ),
                    )}
                >
                  <ha-icon icon="mdi:close"></ha-icon>
                </button>`
              : nothing}
          </div>
        `,
      )}
      <button
        class="supply-chip chip-add"
        @click=${() => onFormUpdate(applyScheduleTimes(form, [...times, '12:00']))}
      >
        + ${t('config.add_time')}
      </button>
    </div>`,
  );
}

function renderSlotSection(
  slot: string,
  form: ProgramFormState,
  zones: ZoneConfig[],
  valves: AvailableValve[],
  onFormUpdate: FormUpdater,
  t: Translator,
): TemplateResult {
  const zonesWithValves = zones.filter((z) => valves.some((v) => v.zone_id === z.id));
  const activeCount = countActiveValvesAtSlot(form, slot);

  return html`
    <div class="slot-section">
      <div class="slot-header">
        <ha-icon icon="mdi:clock-outline"></ha-icon>
        <span class="slot-time">${slot}</span>
        <span class="info-sm">(${activeCount})</span>
      </div>
      <div class="slot-body">
        ${zonesWithValves.length === 0
          ? html`<div class="info-sm" style="padding:4px 0;">
              ${t('config.hint_programs_prereq')}
            </div>`
          : zonesWithValves.map(
              (zone) => html`
                <div class="slot-zone-label">${zone.name}</div>
                ${orderZoneValves(zone.id, valves, form).map((v) =>
                  renderSlotValveRow(v, zone.id, slot, form, onFormUpdate, t),
                )}
              `,
            )}
      </div>
    </div>
  `;
}

function renderSlotValveRow(
  valve: AvailableValve,
  zoneId: string,
  slot: string,
  form: ProgramFormState,
  onFormUpdate: FormUpdater,
  t: Translator,
): TemplateResult {
  const formZone = form.zones.find((z) => z.zone_id === zoneId);
  const formValve = formZone?.valves.find((v) => v.valve_id === valve.id);
  const isActiveAtSlot = !!(
    formValve &&
    (formValve.times === undefined || formValve.times.includes(slot))
  );
  const valveIdx = formZone?.valves.findIndex((v) => v.valve_id === valve.id) ?? -1;
  const valveCount = formZone?.valves.length ?? 0;
  const isFirst = valveIdx <= 0;
  const isLast = valveIdx < 0 || valveIdx === valveCount - 1;

  const toggle = () => onFormUpdate(toggleValveAtSlot(form, zoneId, valve.id, slot));
  const updateDuration = (d: number) => onFormUpdate(setValveDuration(form, zoneId, valve.id, d));
  const move = (dir: -1 | 1) => onFormUpdate(moveValveInZone(form, zoneId, valve.id, dir));

  const reorderBtns =
    isActiveAtSlot && formValve && valveCount > 1
      ? html`
          <div class="reorder-btns">
            <button class="reorder-btn" ?disabled=${isFirst} @click=${() => move(-1)}>
              <ha-icon icon="mdi:chevron-up"></ha-icon>
            </button>
            <button class="reorder-btn" ?disabled=${isLast} @click=${() => move(1)}>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
          </div>
        `
      : nothing;

  return html`
    <div class="slot-valve-row ${isActiveAtSlot ? '' : 'inactive'}">
      <label class="slot-valve-main">
        <input type="checkbox" .checked=${isActiveAtSlot} @change=${toggle} />
        ${reorderBtns}
        <span class="slot-valve-name">${valve.name}</span>
        ${isActiveAtSlot && formValve
          ? html`<input
                class="slot-duration-input"
                type="number"
                min="1"
                .value=${String(formValve.duration)}
                @input=${(e: InputEvent) =>
                  updateDuration(Number.parseInt((e.target as HTMLInputElement).value) || 1)}
              /><span class="info-sm">min</span>`
          : html`<span class="info-sm slot-disabled-hint">
              ${t('config.slot_disabled_here')}
            </span>`}
      </label>
      ${isActiveAtSlot && formValve
        ? renderValveFrequencyInline(formValve, zoneId, form, onFormUpdate, t)
        : nothing}
    </div>
  `;
}

function renderValveFrequencyInline(
  fv: ProgramValveForm,
  zoneId: string,
  form: ProgramFormState,
  onFormUpdate: FormUpdater,
  t: Translator,
): TemplateResult {
  const freq = fv.frequency;
  const freqType = freq?.type ?? '';
  const today = new Date().toISOString().slice(0, 10);

  const setFreq = (patch: ProgramValveForm['frequency']) =>
    onFormUpdate(updateValve(form, zoneId, fv.valve_id, { frequency: patch }));

  const freqEveryN =
    freqType === 'every_n_days' && freq
      ? html`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(freq.n ?? 2)}
            @input=${(e: InputEvent) =>
              setFreq({
                ...freq,
                n: Number.parseInt((e.target as HTMLInputElement).value) || 2,
              })}
          />
          <span class="info-sm">j</span>
        `
      : nothing;

  const freqWeekdays =
    freqType === 'weekdays' && freq
      ? html`
          <div class="valve-freq-days">
            ${WEEKDAYS.map((day) => {
              const checked = freq.days?.includes(day) ?? false;
              return html`
                <label class="valve-freq-day">
                  <input
                    type="checkbox"
                    .checked=${checked}
                    @change=${() => {
                      const days = freq.days ?? [];
                      const newDays = checked ? days.filter((d) => d !== day) : [...days, day];
                      setFreq({ ...freq, days: newDays });
                    }}
                  />
                  ${t(`days.${day}`)}
                </label>
              `;
            })}
          </div>
        `
      : nothing;

  return html`
    <div class="slot-valve-freq">
      <select
        class="valve-freq-select"
        @change=${(e: Event) => {
          const val = (e.target as HTMLSelectElement).value;
          if (!val) setFreq(undefined);
          else if (val === 'every_n_days')
            setFreq({ type: 'every_n_days', n: 2, start_date: today });
          else setFreq({ type: 'weekdays', days: [] });
        }}
      >
        <option value="" ?selected=${freqType === ''}>${t('config.follows_program')}</option>
        <option value="every_n_days" ?selected=${freqType === 'every_n_days'}>
          ${t('config.frequency_every_n', { n: freq?.n ?? 2 })}
        </option>
        <option value="weekdays" ?selected=${freqType === 'weekdays'}>
          ${t('config.frequency_weekdays')}
        </option>
      </select>
      ${freqEveryN}${freqWeekdays}
    </div>
  `;
}
