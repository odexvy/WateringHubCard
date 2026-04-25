import { html, nothing, TemplateResult } from 'lit';
import type {
  Hass,
  Translator,
  AvailableValve,
  ZoneConfig,
  ProgramFormState,
  ProgramValveForm,
  ProgramSchedule,
} from '../shared/types';
import { discoverPrograms, getFriendlyName, formatSchedule } from '../shared/helpers';
import { getZones, getAvailableValves } from './config-helpers';
import {
  renderListItem,
  renderFormRow,
  renderFormActions,
  renderAddButton,
} from '../shared/shared-templates';

export function renderProgramsTab(
  hass: Hass,
  editingProgram: ProgramFormState | null,
  onEdit: (entityId: string) => void,
  onDelete: (entityId: string) => void,
  onNew: () => void,
  onSave: (form: ProgramFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ProgramFormState) => void,
  t: Translator,
): TemplateResult {
  const programEntities = discoverPrograms(hass);
  const zones = getZones(hass);
  const valves = getAvailableValves(hass);
  const hasConfiguredValves = valves.some((v) => v.zone_id !== null);

  return html`
    <div class="form-hint">${t('config.hint_programs')}</div>
    ${hasConfiguredValves
      ? nothing
      : html`<div class="empty-state">${t('config.hint_programs_prereq')}</div>`}
    ${programEntities.map((entityId) => {
      const entity = hass.states[entityId];
      if (!entity) return nothing;
      const programId = (entity.attributes.program_id as string) ?? '';
      if (editingProgram?.id === programId) {
        return renderProgramForm(editingProgram, zones, valves, onSave, onCancel, onFormUpdate, t);
      }
      return renderProgramItem(entity, entityId, onEdit, onDelete, t);
    })}
    ${editingProgram?.isNew
      ? renderProgramForm(editingProgram, zones, valves, onSave, onCancel, onFormUpdate, t)
      : nothing}
    ${editingProgram ? nothing : renderAddButton(`+ ${t('config.new_program')}`, onNew)}
    ${programEntities.length === 0 && !editingProgram
      ? html`<div class="empty-state">${t('config.no_programs')}</div>`
      : nothing}
  `;
}

function renderProgramItem(
  entity: { state: string; attributes: Record<string, unknown> },
  entityId: string,
  onEdit: (entityId: string) => void,
  onDelete: (entityId: string) => void,
  t: Translator,
): TemplateResult {
  const name = getFriendlyName(entity, entityId);
  const schedule = entity.attributes.schedule as ProgramSchedule | undefined;
  const totalDuration = entity.attributes.total_duration as number | undefined;
  const dryRun = entity.attributes.dry_run === true;
  const scheduleStr = formatSchedule(schedule, t);
  const sub = totalDuration ? `${scheduleStr} — ${totalDuration} min` : scheduleStr;
  const dryRunBadge = dryRun
    ? html`<span class="badge-dry-run-sm">${t('config.dry_run')}</span>`
    : nothing;

  return renderListItem(
    html`${name} ${dryRunBadge}`,
    sub,
    () => onEdit(entityId),
    () => onDelete(entityId),
    t,
  );
}

function renderProgramForm(
  form: ProgramFormState,
  zones: ZoneConfig[],
  valves: AvailableValve[],
  onSave: (form: ProgramFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ProgramFormState) => void,
  t: Translator,
): TemplateResult {
  const slots = [...form.schedule.times];
  const totalDuration = form.zones.reduce(
    (sum, z) => sum + z.valves.reduce((s, v) => s + (v.duration || 0), 0),
    0,
  );

  return html`
    <div class="inline-form">
      <!-- Name -->
      ${renderFormRow(
        t('config.name'),
        html`<input
          class="form-input"
          .value=${form.name}
          @input=${(e: InputEvent) =>
            onFormUpdate({ ...form, name: (e.target as HTMLInputElement).value })}
        />`,
      )}

      <!-- Schedule times (chips + time picker) -->
      ${renderScheduleTimesChips(form, onFormUpdate, t)}

      <!-- Per-slot valve sections -->
      ${slots.length === 0
        ? html`<div class="form-hint" style="color:var(--warning-color);">
            ${t('config.no_schedule_times')}
          </div>`
        : html`<div class="form-label" style="margin-top:12px;">${t('config.valves_per_slot')}</div>
            ${[...slots]
              .sort()
              .map((slot) => renderSlotSection(slot, form, zones, valves, onFormUpdate, t))}`}
      ${totalDuration > 0
        ? html`<div class="total-duration">
            ${t('config.total_duration', { duration: totalDuration })}
          </div>`
        : nothing}

      <!-- Dry run toggle -->
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
  onFormUpdate: (form: ProgramFormState) => void,
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
                const newTimes = times.map((t, i) =>
                  i === idx ? (e.target as HTMLInputElement).value : t,
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
  onFormUpdate: (form: ProgramFormState) => void,
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

// Order: valves in form.zones (active, in program order) first, then inactive valves.
function orderZoneValves(
  zoneId: string,
  valves: AvailableValve[],
  form: ProgramFormState,
): AvailableValve[] {
  const zoneValves = valves.filter((v) => v.zone_id === zoneId);
  const formZone = form.zones.find((z) => z.zone_id === zoneId);
  if (!formZone) return zoneValves;
  const formOrder = formZone.valves
    .map((fv) => zoneValves.find((v) => v.id === fv.valve_id))
    .filter((v): v is AvailableValve => !!v);
  const activeIds = new Set(formOrder.map((v) => v.id));
  const inactive = zoneValves.filter((v) => !activeIds.has(v.id));
  return [...formOrder, ...inactive];
}

function renderSlotValveRow(
  valve: AvailableValve,
  zoneId: string,
  slot: string,
  form: ProgramFormState,
  onFormUpdate: (form: ProgramFormState) => void,
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
  onFormUpdate: (form: ProgramFormState) => void,
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
            ${['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => {
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

// ── State transitions ─────────────────────────────────────

function countActiveValvesAtSlot(form: ProgramFormState, slot: string): number {
  return form.zones.reduce(
    (acc, z) =>
      acc + z.valves.filter((v) => v.times === undefined || v.times.includes(slot)).length,
    0,
  );
}

function applyScheduleTimes(form: ProgramFormState, newTimes: string[]): ProgramFormState {
  const allowed = new Set(newTimes);
  const zones = form.zones
    .map((z) => ({
      ...z,
      valves: z.valves
        .map((v) => {
          if (v.times === undefined) return v;
          const filtered = v.times.filter((t) => allowed.has(t));
          return { ...v, times: filtered };
        })
        .filter((v) => v.times === undefined || v.times.length > 0),
    }))
    .filter((z) => z.valves.length > 0);
  return { ...form, schedule: { times: newTimes }, zones };
}

function toggleValveAtSlot(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
  slot: string,
  defaultDuration = 10,
): ProgramFormState {
  const scheduleTimes = form.schedule.times;
  const formZone = form.zones.find((z) => z.zone_id === zoneId);
  const formValve = formZone?.valves.find((v) => v.valve_id === valveId);
  const isActiveAtSlot = !!(
    formValve &&
    (formValve.times === undefined || formValve.times.includes(slot))
  );

  if (isActiveAtSlot && formValve) {
    const currentTimes = formValve.times ?? [...scheduleTimes];
    const newTimes = currentTimes.filter((t) => t !== slot);
    if (newTimes.length === 0) {
      return removeValve(form, zoneId, valveId);
    }
    return updateValve(form, zoneId, valveId, { times: newTimes });
  }
  // Activate
  if (!formValve) {
    return addValve(form, zoneId, {
      valve_id: valveId,
      duration: defaultDuration,
      times: [slot],
    });
  }
  const currentTimes = formValve.times ?? [];
  const newTimes = [...currentTimes, slot];
  if (newTimes.length >= scheduleTimes.length) {
    return updateValve(form, zoneId, valveId, { times: undefined });
  }
  return updateValve(form, zoneId, valveId, { times: newTimes });
}

function setValveDuration(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
  duration: number,
): ProgramFormState {
  return updateValve(form, zoneId, valveId, { duration });
}

function updateValve(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
  patch: Partial<ProgramValveForm>,
): ProgramFormState {
  return {
    ...form,
    zones: form.zones.map((z) =>
      z.zone_id === zoneId
        ? { ...z, valves: z.valves.map((v) => (v.valve_id === valveId ? { ...v, ...patch } : v)) }
        : z,
    ),
  };
}

function addValve(
  form: ProgramFormState,
  zoneId: string,
  valve: ProgramValveForm,
): ProgramFormState {
  const hasZone = form.zones.some((z) => z.zone_id === zoneId);
  const zones = hasZone
    ? form.zones.map((z) => (z.zone_id === zoneId ? { ...z, valves: [...z.valves, valve] } : z))
    : [...form.zones, { zone_id: zoneId, valves: [valve] }];
  return { ...form, zones };
}

function removeValve(form: ProgramFormState, zoneId: string, valveId: string): ProgramFormState {
  const zones = form.zones
    .map((z) =>
      z.zone_id === zoneId ? { ...z, valves: z.valves.filter((v) => v.valve_id !== valveId) } : z,
    )
    .filter((z) => z.valves.length > 0);
  return { ...form, zones };
}

function moveValveInZone(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
  dir: -1 | 1,
): ProgramFormState {
  return {
    ...form,
    zones: form.zones.map((z) => {
      if (z.zone_id !== zoneId) return z;
      const idx = z.valves.findIndex((v) => v.valve_id === valveId);
      const newIdx = idx + dir;
      if (idx < 0 || newIdx < 0 || newIdx >= z.valves.length) return z;
      const arr = [...z.valves];
      [arr[idx], arr[newIdx]] = [arr[newIdx], arr[idx]];
      return { ...z, valves: arr };
    }),
  };
}
