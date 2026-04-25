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
}

export function renderZonesTab(hass: Hass, cb: ZonesTabCallbacks, t: Translator): TemplateResult {
  const supplies = getWaterSupplies(hass);
  const zones = getZones(hass);
  const valves = getAvailableValves(hass);
  const valveView: ValveAssignment[] = cb.editingValves ?? valvesToAssignments(valves);
  const isEditingValves = cb.editingValves !== null;
  const allValid = isEditingValves ? valveView.every((v) => v.zone_id && v.water_supply_id) : false;
  const unassignedValves = valveView.filter((v) => !v.zone_id);

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

    <!-- Zones list -->
    <div class="form-label" style="margin-top:16px;">${t('config.tab_zones')}</div>
    ${zones.length === 0 && !cb.editingZone?.isNew
      ? html`<div class="empty-state">${t('config.no_zones')}</div>`
      : nothing}
    ${zones.map((zone) =>
      cb.editingZone?.id === zone.id
        ? renderNameForm(
            cb.editingZone.name,
            (name) => cb.onUpdateZoneForm({ ...cb.editingZone!, name }),
            () => cb.onSaveZone(cb.editingZone!),
            cb.onCancelZone,
            t,
          )
        : renderZoneCard(zone, valveView, zones, supplies, cb, t),
    )}
    ${cb.editingZone?.isNew
      ? renderNameForm(
          cb.editingZone.name,
          (name) => cb.onUpdateZoneForm({ ...cb.editingZone!, name }),
          () => cb.onSaveZone(cb.editingZone!),
          cb.onCancelZone,
          t,
        )
      : nothing}
    ${cb.editingZone
      ? nothing
      : html`<button class="add-btn" @click=${cb.onNewZone}>+ ${t('config.new_zone')}</button>`}

    <!-- Unassigned valves -->
    ${unassignedValves.length > 0
      ? html`
          <div class="form-label" style="margin-top:16px; color:var(--warning-color);">
            ${t('config.valves_unassigned')} (${unassignedValves.length})
          </div>
          ${unassignedValves.map((v) => renderValveRow(v, zones, supplies, cb, true, t))}
        `
      : nothing}

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

function renderZoneCard(
  zone: ZoneConfig,
  valveView: ValveAssignment[],
  zones: ZoneConfig[],
  supplies: WaterSupply[],
  cb: ZonesTabCallbacks,
  t: Translator,
): TemplateResult {
  const zoneValves = valveView.filter((v) => v.zone_id === zone.id);
  const isExpanded = cb.expandedZones.has(zone.id);

  return html`
    <div class="zone-card">
      <div class="zone-card-header" @click=${() => cb.onToggleZone(zone.id)}>
        <ha-icon class="chevron ${isExpanded ? 'open' : ''}" icon="mdi:chevron-down"></ha-icon>
        <span class="zone-card-name">${zone.name}</span>
        <span class="info-sm">(${zoneValves.length})</span>
        <div class="list-item-actions" @click=${(e: Event) => e.stopPropagation()}>
          ${renderIconButton('mdi:pencil', () => cb.onEditZone(zone), {
            className: 'action-btn',
            title: t('config.edit'),
          })}
          ${renderIconButton('mdi:delete', () => cb.onDeleteZone(zone.id), {
            className: 'action-btn delete',
            title: t('config.delete'),
          })}
        </div>
      </div>
      ${isExpanded
        ? html`
            <div class="zone-card-body">
              ${zoneValves.length === 0
                ? html`<div class="info-sm" style="padding:8px 0;">
                    ${t('config.no_valves_in_zone')}
                  </div>`
                : zoneValves.map((v) => renderValveRow(v, zones, supplies, cb, false, t))}
            </div>
          `
        : nothing}
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
