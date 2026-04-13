import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, AvailableValve } from '../shared/types';
import { getAvailableValves, getZones, getWaterSupplies } from './config-helpers';
import { renderIconButton } from '../shared/shared-templates';

export interface ValveAssignment {
  entity_id: string;
  name: string;
  zone_id: string | null;
  water_supply_id: string | null;
}

export function renderValvesTab(
  hass: Hass,
  editingValves: ValveAssignment[] | null,
  onStartEdit: () => void,
  onFormUpdate: (valves: ValveAssignment[]) => void,
  onSave: () => void,
  onCancel: () => void,
  onDeleteValve: (entityId: string) => void,
  t: Translator,
): TemplateResult {
  const valves = getAvailableValves(hass);
  const zones = getZones(hass);
  const supplies = getWaterSupplies(hass);
  const hasPrereqs = zones.length > 0 && supplies.length > 0;

  if (valves.length === 0) {
    return html`
      <div class="form-hint">${t('config.hint_valves')}</div>
      <div class="empty-state">${t('config.no_valves')}</div>
    `;
  }

  const isEditing = editingValves !== null;
  const displayValves = isEditing ? editingValves : valves;
  const allValid = isEditing ? editingValves.every((v) => v.zone_id && v.water_supply_id) : false;

  return html`
    <div class="form-hint">${t('config.hint_valves')}</div>
    ${hasPrereqs ? nothing : html`<div class="empty-state">${t('config.hint_valves_prereq')}</div>`}
    ${displayValves.map(
      (v) => html`
        <div class="list-item">
          <div class="list-item-header">
            <div style="flex:1">
              <div class="list-item-name">${v.name}</div>
              <div class="list-item-sub">${v.entity_id}</div>
              ${hasPrereqs
                ? html`
                    ${renderValveDropdowns(
                      v,
                      zones,
                      supplies,
                      isEditing,
                      editingValves,
                      valves,
                      onStartEdit,
                      onFormUpdate,
                      t,
                    )}
                    ${isEditing && (!v.zone_id || !v.water_supply_id)
                      ? html`<div style="color:var(--error-color);font-size:11px;margin-top:4px;">
                          ${t('config.hint_valves_prereq')}
                        </div>`
                      : nothing}
                  `
                : nothing}
            </div>
            ${renderIconButton('mdi:delete', () => onDeleteValve(v.entity_id), {
              title: t('config.delete'),
              className: 'action-btn delete',
            })}
          </div>
        </div>
      `,
    )}
    ${isEditing
      ? html`<div class="form-actions">
          <button class="btn btn-cancel" @click=${onCancel}>${t('config.cancel')}</button>
          <button class="btn btn-primary" ?disabled=${!allValid} @click=${onSave}>
            ${t('config.save')}
          </button>
        </div>`
      : nothing}
  `;
}

function renderValveDropdowns(
  v: { entity_id: string; zone_id: string | null; water_supply_id: string | null },
  zones: Array<{ id: string; name: string }>,
  supplies: Array<{ id: string; name: string }>,
  isEditing: boolean,
  editingValves: ValveAssignment[] | null,
  valves: AvailableValve[],
  onStartEdit: () => void,
  onFormUpdate: (valves: ValveAssignment[]) => void,
  t: Translator,
): TemplateResult {
  const zoneEmpty = isEditing && !v.zone_id;
  const supplyEmpty = isEditing && !v.water_supply_id;
  const errorBorder = 'border-color: var(--error-color)';

  return html`
    <div style="display:flex; gap:8px; margin-top:8px; flex-wrap:wrap;">
      <div style="flex:1; min-width:120px;">
        <label class="form-label">${t('config.tab_zones')}</label>
        <select
          class="form-select"
          style="width:100%;${zoneEmpty ? errorBorder : ''}"
          @change=${(e: Event) => {
            if (!isEditing) onStartEdit();
            const val = (e.target as HTMLSelectElement).value;
            const updated = (editingValves ?? valvesToAssignments(valves)).map((ev) =>
              ev.entity_id === v.entity_id ? { ...ev, zone_id: val } : ev,
            );
            onFormUpdate(updated);
          }}
        >
          <option value="" ?selected=${!v.zone_id}>—</option>
          ${zones.map(
            (z) => html`<option value=${z.id} ?selected=${z.id === v.zone_id}>${z.name}</option>`,
          )}
        </select>
      </div>
      <div style="flex:1; min-width:120px;">
        <label class="form-label">${t('config.tab_water_supplies')}</label>
        <select
          class="form-select"
          style="width:100%;${supplyEmpty ? errorBorder : ''}"
          @change=${(e: Event) => {
            if (!isEditing) onStartEdit();
            const val = (e.target as HTMLSelectElement).value;
            const updated = (editingValves ?? valvesToAssignments(valves)).map((ev) =>
              ev.entity_id === v.entity_id ? { ...ev, water_supply_id: val } : ev,
            );
            onFormUpdate(updated);
          }}
        >
          <option value="" ?selected=${!v.water_supply_id}>—</option>
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

function valvesToAssignments(valves: AvailableValve[]): ValveAssignment[] {
  return valves.map((v) => ({
    entity_id: v.entity_id,
    name: v.name,
    zone_id: v.zone_id,
    water_supply_id: v.water_supply_id,
  }));
}

export { valvesToAssignments };
