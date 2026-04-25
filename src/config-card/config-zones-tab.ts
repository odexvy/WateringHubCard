import { html, nothing, TemplateResult } from 'lit';
import type {
  Hass,
  Translator,
  ZoneConfig,
  ZoneFormState,
  WaterSupply,
  WaterSupplyFormState,
} from '../shared/types';
import {
  getAvailableValves,
  getZones,
  getWaterSupplies,
  valvesToAssignments,
  type ValveAssignment,
} from './config-helpers';
import { renderFormRow, renderFormActions, renderIconButton } from '../shared/shared-templates';

export interface ZonesTabCallbacks {
  // Supplies
  editingSupply: WaterSupplyFormState | null;
  onNewSupply: () => void;
  onEditSupply: (s: WaterSupply) => void;
  onSaveSupply: (form: WaterSupplyFormState) => void;
  onCancelSupply: () => void;
  onUpdateSupplyForm: (form: WaterSupplyFormState) => void;
  onDeleteSupply: (id: string) => void;
  // Zones
  editingZone: ZoneFormState | null;
  onNewZone: () => void;
  onEditZone: (z: ZoneConfig) => void;
  onSaveZone: (form: ZoneFormState) => void;
  onCancelZone: () => void;
  onUpdateZoneForm: (form: ZoneFormState) => void;
  onDeleteZone: (id: string) => void;
  // Valves
  editingValves: ValveAssignment[] | null;
  onStartEditValves: () => void;
  onUpdateValves: (valves: ValveAssignment[]) => void;
  onSaveValves: () => void;
  onCancelValves: () => void;
  onDeleteValve: (entityId: string) => void;
  // Expanded zones local UI state
  expandedZones: Set<string>;
  onToggleZone: (zoneId: string) => void;
  // Add-valve form
  addingValve: boolean;
  newValveEntityId: string;
  newValveZoneId: string;
  newValveSupplyId: string;
  onStartAddValve: () => void;
  onCancelAddValve: () => void;
  onUpdateNewValveEntity: (id: string) => void;
  onUpdateNewValveZone: (id: string) => void;
  onUpdateNewValveSupply: (id: string) => void;
  onSaveNewValve: () => void;
}

export function renderZonesTab(hass: Hass, cb: ZonesTabCallbacks, t: Translator): TemplateResult {
  const supplies = getWaterSupplies(hass);
  const zones = getZones(hass);
  const valves = getAvailableValves(hass);
  const valveView: ValveAssignment[] = cb.editingValves ?? valvesToAssignments(valves);
  const isEditingValves = cb.editingValves !== null;
  const allValid = isEditingValves ? valveView.every((v) => v.zone_id && v.water_supply_id) : false;
  // Flat list: unassigned first (warning border), then by zone order
  const sortedValves = [
    ...valveView.filter((v) => !v.zone_id),
    ...valveView.filter((v) => v.zone_id),
  ];

  return html`
    <div class="form-hint">${t('config.hint_zones_unified')}</div>

    <!-- Supplies chips -->
    <div class="form-label" style="margin-top:12px;">${t('config.tab_water_supplies')}</div>
    ${cb.editingSupply
      ? renderNameForm(
          cb.editingSupply.name,
          (name) => cb.onUpdateSupplyForm({ ...cb.editingSupply!, name }),
          () => cb.onSaveSupply(cb.editingSupply!),
          cb.onCancelSupply,
          t,
        )
      : html`
          <div class="supply-chips">
            ${supplies.map(
              (s) => html`
                <span class="supply-chip" @click=${() => cb.onEditSupply(s)}>
                  <ha-icon icon="mdi:water-pump"></ha-icon>
                  ${s.name}
                  <span
                    class="chip-close"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      cb.onDeleteSupply(s.id);
                    }}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </span>
                </span>
              `,
            )}
            <span class="supply-chip chip-add" @click=${cb.onNewSupply}>
              + ${t('config.new_water_supply')}
            </span>
          </div>
        `}

    <!-- Zones chips -->
    <div class="form-label" style="margin-top:16px;">${t('config.tab_zones')}</div>
    ${cb.editingZone
      ? renderNameForm(
          cb.editingZone.name,
          (name) => cb.onUpdateZoneForm({ ...cb.editingZone!, name }),
          () => cb.onSaveZone(cb.editingZone!),
          cb.onCancelZone,
          t,
        )
      : html`
          <div class="supply-chips">
            ${zones.map(
              (z) => html`
                <span class="supply-chip" @click=${() => cb.onEditZone(z)}>
                  <ha-icon icon="mdi:shape-outline"></ha-icon>
                  ${z.name}
                  <span
                    class="chip-close"
                    @click=${(e: Event) => {
                      e.stopPropagation();
                      cb.onDeleteZone(z.id);
                    }}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                  </span>
                </span>
              `,
            )}
            <span class="supply-chip chip-add" @click=${cb.onNewZone}>
              + ${t('config.new_zone')}
            </span>
          </div>
        `}

    <!-- All valves (flat list, unassigned first with warning border) -->
    <div class="form-label" style="margin-top:16px;">
      ${t('config.editor_section_valves')} (${sortedValves.length})
    </div>
    ${sortedValves.length === 0 && !cb.addingValve
      ? html`<div class="empty-state">${t('config.no_valves')}</div>`
      : nothing}
    ${sortedValves.map((v) => renderValveRow(v, zones, supplies, cb, !v.zone_id, t))}
    ${cb.addingValve
      ? renderAddValveForm(hass, valves, zones, supplies, cb, t)
      : html`<button class="add-btn" @click=${cb.onStartAddValve}>
          + ${t('config.add_valve')}
        </button>`}

    <!-- Global valves save -->
    ${isEditingValves
      ? html`<div class="form-actions" style="margin-top:16px;">
          <button class="btn btn-cancel" @click=${cb.onCancelValves}>${t('config.cancel')}</button>
          <button class="btn btn-primary" ?disabled=${!allValid} @click=${cb.onSaveValves}>
            ${t('config.save')}
          </button>
        </div>`
      : nothing}
  `;
}

function renderAddValveForm(
  hass: Hass,
  existingValves: ReturnType<typeof getAvailableValves>,
  zones: ZoneConfig[],
  supplies: WaterSupply[],
  cb: ZonesTabCallbacks,
  t: Translator,
): TemplateResult {
  const existingIds = new Set(existingValves.map((v) => v.entity_id));
  const candidates = Object.keys(hass.states)
    .filter((id) => id.startsWith('switch.') && !existingIds.has(id))
    .map((id) => ({
      id,
      name: (hass.states[id]?.attributes.friendly_name as string | undefined) ?? id,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  return html`
    <div class="inline-form">
      ${renderFormRow(
        t('config.select_entity'),
        html`<select
          class="form-input"
          @change=${(e: Event) => cb.onUpdateNewValveEntity((e.target as HTMLSelectElement).value)}
        >
          <option value="" ?selected=${!cb.newValveEntityId}>${t('config.none')}</option>
          ${candidates.map(
            (c) =>
              html`<option value=${c.id} ?selected=${c.id === cb.newValveEntityId}>
                ${c.name}
              </option>`,
          )}
        </select>`,
      )}
      ${renderFormRow(
        t('config.tab_zones'),
        html`<select
          class="form-input"
          @change=${(e: Event) => cb.onUpdateNewValveZone((e.target as HTMLSelectElement).value)}
        >
          <option value="" ?selected=${!cb.newValveZoneId}>${t('config.none')}</option>
          ${zones.map(
            (z) =>
              html`<option value=${z.id} ?selected=${z.id === cb.newValveZoneId}>
                ${z.name}
              </option>`,
          )}
        </select>`,
      )}
      ${renderFormRow(
        t('config.tab_water_supplies'),
        html`<select
          class="form-input"
          @change=${(e: Event) => cb.onUpdateNewValveSupply((e.target as HTMLSelectElement).value)}
        >
          <option value="" ?selected=${!cb.newValveSupplyId}>${t('config.none')}</option>
          ${supplies.map(
            (s) =>
              html`<option value=${s.id} ?selected=${s.id === cb.newValveSupplyId}>
                ${s.name}
              </option>`,
          )}
        </select>`,
      )}
      ${renderFormActions(cb.onCancelAddValve, cb.onSaveNewValve, t)}
    </div>
  `;
}

function renderValveRow(
  v: ValveAssignment,
  zones: ZoneConfig[],
  supplies: WaterSupply[],
  cb: ZonesTabCallbacks,
  isUnassigned: boolean,
  t: Translator,
): TemplateResult {
  const zoneEmpty = !v.zone_id;
  const supplyEmpty = !v.water_supply_id;
  const errorBorder = 'border-color: var(--error-color);';
  const changeZone = (val: string) => {
    if (!cb.editingValves) cb.onStartEditValves();
    const updated = (cb.editingValves ?? [v]).map((ev) =>
      ev.entity_id === v.entity_id ? { ...ev, zone_id: val || null } : ev,
    );
    cb.onUpdateValves(updated);
  };
  const changeSupply = (val: string) => {
    if (!cb.editingValves) cb.onStartEditValves();
    const updated = (cb.editingValves ?? [v]).map((ev) =>
      ev.entity_id === v.entity_id ? { ...ev, water_supply_id: val || null } : ev,
    );
    cb.onUpdateValves(updated);
  };

  return html`
    <div class="valve-row ${isUnassigned ? 'valve-row-unassigned' : ''}">
      <ha-icon
        class="valve-icon"
        icon=${isUnassigned ? 'mdi:alert-circle-outline' : 'mdi:valve'}
      ></ha-icon>
      <div class="valve-name">${v.name}</div>
      <select
        class="form-select valve-dropdown"
        style=${zoneEmpty ? errorBorder : ''}
        @change=${(e: Event) => changeZone((e.target as HTMLSelectElement).value)}
      >
        <option value="" ?selected=${!v.zone_id}>${t('config.none')}</option>
        ${zones.map(
          (z) => html`<option value=${z.id} ?selected=${z.id === v.zone_id}>${z.name}</option>`,
        )}
      </select>
      <select
        class="form-select valve-dropdown"
        style=${supplyEmpty ? errorBorder : ''}
        @change=${(e: Event) => changeSupply((e.target as HTMLSelectElement).value)}
      >
        <option value="" ?selected=${!v.water_supply_id}>${t('config.none')}</option>
        ${supplies.map(
          (s) =>
            html`<option value=${s.id} ?selected=${s.id === v.water_supply_id}>${s.name}</option>`,
        )}
      </select>
      ${renderIconButton('mdi:delete', () => cb.onDeleteValve(v.entity_id), {
        className: 'action-btn delete',
        title: t('config.delete'),
      })}
    </div>
  `;
}

function renderNameForm(
  name: string,
  onNameChange: (name: string) => void,
  onSave: () => void,
  onCancel: () => void,
  t: Translator,
): TemplateResult {
  return html`
    <div class="inline-form">
      ${renderFormRow(
        t('config.name'),
        html`<input
          class="form-input"
          .value=${name}
          @input=${(e: InputEvent) => onNameChange((e.target as HTMLInputElement).value)}
        />`,
      )}
      ${renderFormActions(onCancel, onSave, t)}
    </div>
  `;
}
