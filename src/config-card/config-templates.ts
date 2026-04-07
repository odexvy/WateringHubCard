import { html, nothing, TemplateResult } from 'lit';
import type {
  Hass,
  Translator,
  AvailableValve,
  ZoneConfig,
  ProgramSchedule,
  ValveFrequency,
} from '../types';
import { getAvailableValves, getZones } from './config-helpers';
import { discoverPrograms, getFriendlyName, formatSchedule } from '../helpers';

// ── Tabs ─────────────────────────────────────────────────

export function renderTabs(
  activeTab: string,
  onTabChange: (tab: string) => void,
  t: Translator,
): TemplateResult {
  const tabs = [
    { id: 'programs', label: t('config.tab_programs') },
    { id: 'zones', label: t('config.tab_zones') },
    { id: 'valves', label: t('config.tab_valves') },
  ];
  return html`
    <div class="tabs">
      ${tabs.map(
        (tab) => html`
          <div
            class="tab ${activeTab === tab.id ? 'active' : ''}"
            @click=${() => onTabChange(tab.id)}
          >
            ${tab.label}
          </div>
        `,
      )}
    </div>
  `;
}

// ── Valves Tab ───────────────────────────────────────────

export function renderValvesTab(hass: Hass, t: Translator): TemplateResult {
  const valves = getAvailableValves(hass);
  if (valves.length === 0) {
    return html`<div class="empty-state">${t('config.no_valves')}</div>`;
  }
  return html`
    ${valves.map(
      (v) => html`
        <div class="list-item">
          <div class="list-item-header">
            <div>
              <div class="list-item-name">${v.name}</div>
              <div class="list-item-sub">${t('config.valve_entity')}: ${v.entity_id}</div>
            </div>
          </div>
        </div>
      `,
    )}
  `;
}

// ── Zones Tab ────────────────────────────────────────────

interface ZoneFormState {
  id: string;
  name: string;
  valves: string[];
  isNew: boolean;
}

export function renderZonesTab(
  hass: Hass,
  editingZone: ZoneFormState | null,
  onEdit: (zone: ZoneConfig) => void,
  onDelete: (zoneId: string) => void,
  onNew: () => void,
  onSave: (form: ZoneFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ZoneFormState) => void,
  t: Translator,
): TemplateResult {
  const zones = getZones(hass);
  const valves = getAvailableValves(hass);

  return html`
    ${zones.map((zone) =>
      editingZone && editingZone.id === zone.id
        ? renderZoneForm(editingZone, valves, onSave, onCancel, onFormUpdate, t)
        : renderZoneItem(zone, valves, onEdit, onDelete, t),
    )}
    ${editingZone?.isNew
      ? renderZoneForm(editingZone, valves, onSave, onCancel, onFormUpdate, t)
      : nothing}
    ${!editingZone
      ? html`<button class="add-btn" @click=${onNew}>+ ${t('config.new_zone')}</button>`
      : nothing}
    ${zones.length === 0 && !editingZone
      ? html`<div class="empty-state">${t('config.no_zones')}</div>`
      : nothing}
  `;
}

function renderZoneItem(
  zone: ZoneConfig,
  valves: AvailableValve[],
  onEdit: (zone: ZoneConfig) => void,
  onDelete: (zoneId: string) => void,
  t: Translator,
): TemplateResult {
  const valveNames = zone.valves
    .map((vid) => valves.find((v) => v.id === vid)?.name ?? vid)
    .join(', ');

  return html`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${zone.name}</div>
          <div class="list-item-sub">${valveNames}</div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${() => onEdit(zone)} title="${t('config.edit')}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${() => onDelete(zone.id)}
            title="${t('config.delete')}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderZoneForm(
  form: ZoneFormState,
  valves: AvailableValve[],
  onSave: (form: ZoneFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ZoneFormState) => void,
  t: Translator,
): TemplateResult {
  return html`
    <div class="inline-form">
      <div class="form-row">
        <label class="form-label">${t('config.name')}</label>
        <input
          class="form-input"
          .value=${form.name}
          @input=${(e: InputEvent) =>
            onFormUpdate({ ...form, name: (e.target as HTMLInputElement).value })}
        />
      </div>
      <div class="form-row">
        <label class="form-label">${t('config.select_valves')}</label>
        <div class="checkbox-list">
          ${valves.map((v) => {
            const checked = form.valves.includes(v.id);
            return html`
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${checked}
                  @change=${() => {
                    const newValves = checked
                      ? form.valves.filter((id) => id !== v.id)
                      : [...form.valves, v.id];
                    onFormUpdate({ ...form, valves: newValves });
                  }}
                />
                ${v.name}
              </label>
            `;
          })}
        </div>
      </div>
      <div class="form-actions">
        <button class="btn btn-cancel" @click=${onCancel}>${t('config.cancel')}</button>
        <button class="btn btn-primary" @click=${() => onSave(form)}>${t('config.save')}</button>
      </div>
    </div>
  `;
}

// ── Programs Tab ─────────────────────────────────────────

interface ProgramValveForm {
  valve_id: string;
  duration: number;
  frequency?: ValveFrequency;
}

interface ProgramZoneForm {
  zone_id: string;
  valves: ProgramValveForm[];
}

export interface ProgramFormState {
  id: string;
  name: string;
  schedule: ProgramSchedule;
  zones: ProgramZoneForm[];
  dry_run: boolean;
  isNew: boolean;
}

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
      if (editingProgram && editingProgram.id === programId) {
        return renderProgramForm(editingProgram, zones, valves, onSave, onCancel, onFormUpdate, t);
      }
      return renderProgramItem(entity, entityId, onEdit, onDelete, t);
    })}
    ${editingProgram?.isNew
      ? renderProgramForm(editingProgram, zones, valves, onSave, onCancel, onFormUpdate, t)
      : nothing}
    ${!editingProgram
      ? html`<button class="add-btn" @click=${onNew}>+ ${t('config.new_program')}</button>`
      : nothing}
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

  return html`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">
            ${name}
            ${dryRun ? html`<span class="dry-run-tag">${t('config.dry_run')}</span>` : nothing}
          </div>
          <div class="list-item-sub">
            ${scheduleStr}${totalDuration ? ` — ${totalDuration} min` : ''}
          </div>
        </div>
        <div class="list-item-actions">
          <button class="action-btn" @click=${() => onEdit(entityId)} title="${t('config.edit')}">
            <ha-icon icon="mdi:pencil"></ha-icon>
          </button>
          <button
            class="action-btn delete"
            @click=${() => onDelete(entityId)}
            title="${t('config.delete')}"
          >
            <ha-icon icon="mdi:delete"></ha-icon>
          </button>
        </div>
      </div>
    </div>
  `;
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
      <div class="form-row">
        <label class="form-label">${t('config.name')}</label>
        <input
          class="form-input"
          .value=${form.name}
          @input=${(e: InputEvent) =>
            onFormUpdate({ ...form, name: (e.target as HTMLInputElement).value })}
        />
      </div>

      <!-- Schedule -->
      <div class="form-row-inline">
        <div>
          <label class="form-label">${t('config.schedule_type')}</label>
          <select
            class="form-select"
            .value=${form.schedule.type}
            @change=${(e: Event) =>
              onFormUpdate({
                ...form,
                schedule: {
                  ...form.schedule,
                  type: (e.target as HTMLSelectElement).value as ProgramSchedule['type'],
                },
              })}
          >
            <option value="daily">${t('config.schedule_daily')}</option>
            <option value="every_n_days">${t('config.schedule_every_n_days')}</option>
            <option value="weekdays">${t('config.schedule_weekdays')}</option>
          </select>
        </div>
        <div>
          <label class="form-label">${t('config.schedule_time')}</label>
          <input
            class="form-input"
            type="time"
            .value=${form.schedule.time}
            @input=${(e: InputEvent) =>
              onFormUpdate({
                ...form,
                schedule: { ...form.schedule, time: (e.target as HTMLInputElement).value },
              })}
          />
        </div>
      </div>

      ${form.schedule.type === 'every_n_days'
        ? html`
            <div class="form-row">
              <label class="form-label">${t('config.schedule_every_n')}</label>
              <input
                class="form-input"
                type="number"
                min="2"
                .value=${String(form.schedule.n ?? 2)}
                @input=${(e: InputEvent) =>
                  onFormUpdate({
                    ...form,
                    schedule: {
                      ...form.schedule,
                      n: parseInt((e.target as HTMLInputElement).value) || 2,
                    },
                  })}
              />
            </div>
          `
        : nothing}
      ${form.schedule.type === 'weekdays'
        ? html`
            <div class="form-row">
              <label class="form-label">${t('config.schedule_days')}</label>
              <div class="checkbox-list" style="flex-direction:row; flex-wrap:wrap;">
                ${['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => {
                  const checked = form.schedule.days?.includes(day) ?? false;
                  return html`
                    <label class="checkbox-item">
                      <input
                        type="checkbox"
                        .checked=${checked}
                        @change=${() => {
                          const days = form.schedule.days ?? [];
                          const newDays = checked ? days.filter((d) => d !== day) : [...days, day];
                          onFormUpdate({
                            ...form,
                            schedule: { ...form.schedule, days: newDays },
                          });
                        }}
                      />
                      ${t(`days.${day}`)}
                    </label>
                  `;
                })}
              </div>
            </div>
          `
        : nothing}

      <!-- Zones + valves with durations -->
      <div class="form-row">
        <label class="form-label">${t('config.select_zones')}</label>
        ${zones.map((zone) => {
          const formZone = form.zones.find((fz) => fz.zone_id === zone.id);
          const isSelected = !!formZone;
          return html`
            <div class="form-zone-section">
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
              ${isSelected && formZone
                ? html`
                    ${formZone.valves.map((fv) => {
                      const valveName =
                        valves.find((v) => v.id === fv.valve_id)?.name ?? fv.valve_id;
                      const updateValve = (patch: Partial<ProgramValveForm>) => {
                        const newValves = formZone.valves.map((v) =>
                          v.valve_id === fv.valve_id ? { ...v, ...patch } : v,
                        );
                        const newZones = form.zones.map((fz) =>
                          fz.zone_id === zone.id ? { ...fz, valves: newValves } : fz,
                        );
                        onFormUpdate({ ...form, zones: newZones });
                      };
                      const freqType = fv.frequency?.type ?? '';
                      const today = new Date().toISOString().slice(0, 10);
                      return html`
                        <div class="valve-config-block">
                          <div class="valve-duration-row">
                            <label>${valveName}</label>
                            <input
                              class="valve-duration-input"
                              type="number"
                              min="1"
                              .value=${String(fv.duration)}
                              @input=${(e: InputEvent) =>
                                updateValve({
                                  duration: parseInt((e.target as HTMLInputElement).value) || 1,
                                })}
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
                                  updateValve({
                                    frequency: { type: 'every_n_days', n: 2, start_date: today },
                                  });
                                } else {
                                  updateValve({ frequency: { type: 'weekdays', days: [] } });
                                }
                              }}
                            >
                              <option value="">${t('config.follows_program')}</option>
                              <option value="every_n_days">
                                ${t('config.frequency_every_n', { n: fv.frequency?.n ?? 2 })}
                              </option>
                              <option value="weekdays">${t('config.frequency_weekdays')}</option>
                            </select>
                            ${freqType === 'every_n_days'
                              ? html`
                                  <input
                                    class="valve-freq-n-input"
                                    type="number"
                                    min="2"
                                    .value=${String(fv.frequency?.n ?? 2)}
                                    @input=${(e: InputEvent) =>
                                      updateValve({
                                        frequency: {
                                          ...fv.frequency!,
                                          n: parseInt((e.target as HTMLInputElement).value) || 2,
                                        },
                                      })}
                                  />
                                  <span>j</span>
                                `
                              : nothing}
                            ${freqType === 'weekdays'
                              ? html`
                                  <div class="valve-freq-days">
                                    ${['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(
                                      (day) => {
                                        const checked = fv.frequency?.days?.includes(day) ?? false;
                                        return html`
                                          <label class="valve-freq-day">
                                            <input
                                              type="checkbox"
                                              .checked=${checked}
                                              @change=${() => {
                                                const days = fv.frequency?.days ?? [];
                                                const newDays = checked
                                                  ? days.filter((d) => d !== day)
                                                  : [...days, day];
                                                updateValve({
                                                  frequency: { ...fv.frequency!, days: newDays },
                                                });
                                              }}
                                            />
                                            ${t(`days.${day}`)}
                                          </label>
                                        `;
                                      },
                                    )}
                                  </div>
                                `
                              : nothing}
                          </div>
                        </div>
                      `;
                    })}
                  `
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

      <div class="form-actions">
        <button class="btn btn-cancel" @click=${onCancel}>${t('config.cancel')}</button>
        <button class="btn btn-primary" @click=${() => onSave(form)}>${t('config.save')}</button>
      </div>
    </div>
  `;
}

export type { ZoneFormState };
