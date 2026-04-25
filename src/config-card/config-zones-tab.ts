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
import { renderChipList, renderIconButton, renderNameForm } from '../shared/shared-templates';
import { renderAddValveForm, type AddValveFormProps } from './config-add-valve-form';

export interface ZonesTabCallbacks extends AddValveFormProps {
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
  // Valve assignment (immediate save via _editingValves staging)
  editingValves: ValveAssignment[] | null;
  onStartEditValves: () => void;
  onUpdateValves: (valves: ValveAssignment[]) => void;
  onSaveValves: () => void;
  onCancelValves: () => void;
  onDeleteValve: (entityId: string) => void;
  // Add-valve form expansion state
  addingValve: boolean;
  onStartAddValve: () => void;
}

export function renderZonesTab(hass: Hass, cb: ZonesTabCallbacks, t: Translator): TemplateResult {
  const supplies = getWaterSupplies(hass);
  const zones = getZones(hass);
  const valves = getAvailableValves(hass);
  const valveView: ValveAssignment[] = cb.editingValves ?? valvesToAssignments(valves);
  const isEditingValves = cb.editingValves !== null;
  const allValid = isEditingValves ? valveView.every((v) => v.zone_id && v.water_supply_id) : false;
  // Unassigned first (warning border), then by zone order.
  const sortedValves = [
    ...valveView.filter((v) => !v.zone_id),
    ...valveView.filter((v) => v.zone_id),
  ];

  return html`
    <div class="form-hint">${t('config.hint_zones_unified')}</div>

    <!-- Supplies chips -->
    <div class="form-label" style="margin-top:12px;">${t('config.tab_water_supplies')}</div>
    ${cb.editingSupply
      ? renderEditingSupply(cb, t)
      : renderChipList(supplies, {
          icon: 'mdi:water-pump',
          addLabel: t('config.new_water_supply'),
          onClick: cb.onEditSupply,
          onDelete: cb.onDeleteSupply,
          onNew: cb.onNewSupply,
        })}

    <!-- Zones chips -->
    <div class="form-label" style="margin-top:16px;">${t('config.tab_zones')}</div>
    ${cb.editingZone
      ? renderEditingZone(cb, t)
      : renderChipList(zones, {
          icon: 'mdi:shape-outline',
          addLabel: t('config.new_zone'),
          onClick: cb.onEditZone,
          onDelete: cb.onDeleteZone,
          onNew: cb.onNewZone,
        })}

    <!-- Valves -->
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

    <!-- Global save for staged valve dropdown changes -->
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

function renderEditingSupply(cb: ZonesTabCallbacks, t: Translator): TemplateResult {
  const editing = cb.editingSupply;
  if (!editing) return html``;
  return renderNameForm(
    editing.name,
    (name) => cb.onUpdateSupplyForm({ ...editing, name }),
    () => cb.onSaveSupply(editing),
    cb.onCancelSupply,
    t,
  );
}

function renderEditingZone(cb: ZonesTabCallbacks, t: Translator): TemplateResult {
  const editing = cb.editingZone;
  if (!editing) return html``;
  return renderNameForm(
    editing.name,
    (name) => cb.onUpdateZoneForm({ ...editing, name }),
    () => cb.onSaveZone(editing),
    cb.onCancelZone,
    t,
  );
}

function renderValveRow(
  v: ValveAssignment,
  zones: ZoneConfig[],
  supplies: WaterSupply[],
  cb: ZonesTabCallbacks,
  isUnassigned: boolean,
  t: Translator,
): TemplateResult {
  const errorBorder = 'border-color: var(--error-color);';
  const stageChange = (field: 'zone_id' | 'water_supply_id', val: string) => {
    if (!cb.editingValves) cb.onStartEditValves();
    const updated = (cb.editingValves ?? [v]).map((ev) =>
      ev.entity_id === v.entity_id ? { ...ev, [field]: val || null } : ev,
    );
    cb.onUpdateValves(updated);
  };

  return html`
    <div class="valve-row ${isUnassigned ? 'valve-row-unassigned' : ''}">
      <div class="valve-row-head">
        <ha-icon
          class="valve-icon"
          icon=${isUnassigned ? 'mdi:alert-circle-outline' : 'mdi:valve'}
        ></ha-icon>
        <div class="valve-name">${v.name}</div>
        ${renderIconButton('mdi:delete', () => cb.onDeleteValve(v.entity_id), {
          className: 'action-btn delete',
          title: t('config.delete'),
        })}
      </div>
      <div class="valve-row-selects">
        <select
          class="form-select valve-dropdown"
          style=${!v.zone_id ? errorBorder : ''}
          @change=${(e: Event) => stageChange('zone_id', (e.target as HTMLSelectElement).value)}
        >
          <option value="" ?selected=${!v.zone_id}>${t('config.none')}</option>
          ${zones.map(
            (z) => html`<option value=${z.id} ?selected=${z.id === v.zone_id}>${z.name}</option>`,
          )}
        </select>
        <select
          class="form-select valve-dropdown"
          style=${!v.water_supply_id ? errorBorder : ''}
          @change=${(e: Event) =>
            stageChange('water_supply_id', (e.target as HTMLSelectElement).value)}
        >
          <option value="" ?selected=${!v.water_supply_id}>${t('config.none')}</option>
          ${supplies.map(
            (s) =>
              html`<option value=${s.id} ?selected=${s.id === v.water_supply_id}>
                ${s.name}
              </option>`,
          )}
        </select>
      </div>
    </div>
  `;
}
