import { html, nothing, TemplateResult } from 'lit';
import type {
  Hass,
  Translator,
  AvailableValve,
  ZoneConfig,
  ProgramFormState,
  ProgramValveForm,
  ProgramZoneForm,
  ProgramSchedule,
} from '../types';
import { discoverPrograms, getFriendlyName, formatSchedule } from '../helpers';
import { getZones, getAvailableValves } from './config-helpers';
import {
  renderListItem,
  renderFormRow,
  renderFormActions,
  renderAddButton,
  renderBadge,
} from '../shared-templates';

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

  return html`
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

  return renderListItem(
    html`${name} ${dryRun ? renderBadge('dry-run', t('config.dry_run')) : nothing}`,
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

      <!-- Schedule — time only -->
      ${renderFormRow(
        t('config.trigger_time'),
        html`<input
          class="form-input"
          type="time"
          .value=${form.schedule.time}
          @input=${(e: InputEvent) =>
            onFormUpdate({
              ...form,
              schedule: { time: (e.target as HTMLInputElement).value },
            })}
        />`,
      )}

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${t('config.select_zones')}</label>
        ${[
          ...form.zones.map((fz) => zones.find((z) => z.id === fz.zone_id)),
          ...zones.filter((z) => !form.zones.some((fz) => fz.zone_id === z.id)),
        ]
          .filter((z): z is ZoneConfig => !!z)
          .map((zone) => {
            const formZoneIdx = form.zones.findIndex((fz) => fz.zone_id === zone.id);
            const formZone = formZoneIdx >= 0 ? form.zones[formZoneIdx] : null;
            const isSelected = !!formZone;
            const moveZone = (dir: -1 | 1) => {
              const arr = [...form.zones];
              const newIdx = formZoneIdx + dir;
              [arr[formZoneIdx], arr[newIdx]] = [arr[newIdx], arr[formZoneIdx]];
              onFormUpdate({ ...form, zones: arr });
            };
            const zoneReorderBtns =
              isSelected && form.zones.length > 1
                ? html`
                    <div class="reorder-btns">
                      <button
                        class="reorder-btn"
                        ?disabled=${formZoneIdx === 0}
                        @click=${() => moveZone(-1)}
                      >
                        <ha-icon icon="mdi:chevron-up"></ha-icon>
                      </button>
                      <button
                        class="reorder-btn"
                        ?disabled=${formZoneIdx === form.zones.length - 1}
                        @click=${() => moveZone(1)}
                      >
                        <ha-icon icon="mdi:chevron-down"></ha-icon>
                      </button>
                    </div>
                  `
                : nothing;
            return html`
              <div class="form-zone-section">
                <div class="zone-header-row">
                  <label class="checkbox-item">
                    <input
                      type="checkbox"
                      .checked=${isSelected}
                      @change=${() => {
                        const newZones = isSelected
                          ? form.zones.filter((fz) => fz.zone_id !== zone.id)
                          : [
                              ...form.zones,
                              {
                                zone_id: zone.id,
                                valves: zone.valves.map((vid) => ({ valve_id: vid, duration: 10 })),
                              },
                            ];
                        onFormUpdate({ ...form, zones: newZones });
                      }}
                    />
                    <span class="form-zone-name">${zone.name}</span>
                  </label>
                  ${zoneReorderBtns}
                </div>
                ${isSelected && formZone
                  ? formZone.valves.map((fv, valveIdx) =>
                      renderValveConfig(
                        fv,
                        valveIdx,
                        formZone,
                        zone,
                        form,
                        valves,
                        onFormUpdate,
                        t,
                      ),
                    )
                  : nothing}
              </div>
            `;
          })}
      </div>

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

function renderValveConfig(
  fv: ProgramValveForm,
  valveIdx: number,
  formZone: ProgramZoneForm,
  zone: ZoneConfig,
  form: ProgramFormState,
  valves: AvailableValve[],
  onFormUpdate: (form: ProgramFormState) => void,
  t: Translator,
): TemplateResult {
  const valveName = valves.find((v) => v.id === fv.valve_id)?.name ?? fv.valve_id;
  const freq = fv.frequency;
  const freqType = freq?.type ?? '';
  const today = new Date().toISOString().slice(0, 10);
  const isFirst = valveIdx === 0;
  const isLast = valveIdx === formZone.valves.length - 1;

  const updateValve = (patch: Partial<ProgramValveForm>) => {
    const newValves = formZone.valves.map((v) =>
      v.valve_id === fv.valve_id ? { ...v, ...patch } : v,
    );
    const newZones = form.zones.map((fz) =>
      fz.zone_id === zone.id ? { ...fz, valves: newValves } : fz,
    );
    onFormUpdate({ ...form, zones: newZones });
  };

  const moveValve = (dir: -1 | 1) => {
    const arr = [...formZone.valves];
    const newIdx = valveIdx + dir;
    [arr[valveIdx], arr[newIdx]] = [arr[newIdx], arr[valveIdx]];
    const newZones = form.zones.map((fz) => (fz.zone_id === zone.id ? { ...fz, valves: arr } : fz));
    onFormUpdate({ ...form, zones: newZones });
  };

  const freqEveryNInput =
    freqType === 'every_n_days' && freq
      ? html`
          <input
            class="valve-freq-n-input"
            type="number"
            min="2"
            .value=${String(freq.n ?? 2)}
            @input=${(e: InputEvent) =>
              updateValve({
                frequency: { ...freq, n: parseInt((e.target as HTMLInputElement).value) || 2 },
              })}
          />
          <span>j</span>
        `
      : nothing;

  const freqWeekdaysInput =
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
                      updateValve({ frequency: { ...freq, days: newDays } });
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
    <div class="valve-config-block">
      <div class="valve-duration-row">
        <div class="reorder-btns">
          <button class="reorder-btn" ?disabled=${isFirst} @click=${() => moveValve(-1)}>
            <ha-icon icon="mdi:chevron-up"></ha-icon>
          </button>
          <button class="reorder-btn" ?disabled=${isLast} @click=${() => moveValve(1)}>
            <ha-icon icon="mdi:chevron-down"></ha-icon>
          </button>
        </div>
        <label>${valveName}</label>
        <input
          class="valve-duration-input"
          type="number"
          min="1"
          .value=${String(fv.duration)}
          @input=${(e: InputEvent) =>
            updateValve({ duration: parseInt((e.target as HTMLInputElement).value) || 1 })}
        />
        <span>min</span>
      </div>
      <div class="valve-frequency-row">
        <select
          class="valve-freq-select"
          .value=${freqType}
          @change=${(e: Event) => {
            const val = (e.target as HTMLSelectElement).value;
            if (!val) {
              updateValve({ frequency: undefined });
            } else if (val === 'every_n_days') {
              updateValve({ frequency: { type: 'every_n_days', n: 2, start_date: today } });
            } else {
              updateValve({ frequency: { type: 'weekdays', days: [] } });
            }
          }}
        >
          <option value="">${t('config.follows_program')}</option>
          <option value="every_n_days">
            ${t('config.frequency_every_n', { n: freq?.n ?? 2 })}
          </option>
          <option value="weekdays">${t('config.frequency_weekdays')}</option>
        </select>
        ${freqEveryNInput} ${freqWeekdaysInput}
      </div>
    </div>
  `;
}
