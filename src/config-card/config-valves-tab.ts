import { html, TemplateResult } from 'lit';
import type { Hass, Translator } from '../shared/types';
import { getAvailableValves, getZones, getWaterSupplies } from './config-helpers';
import { renderIconButton } from '../shared/shared-templates';

export function renderValvesTab(
  hass: Hass,
  onChangeValve: (
    entityId: string,
    field: 'zone_id' | 'water_supply_id',
    value: string | null,
  ) => void,
  onDeleteValve: (entityId: string) => void,
  t: Translator,
): TemplateResult {
  const valves = getAvailableValves(hass);
  const zones = getZones(hass);
  const supplies = getWaterSupplies(hass);

  if (valves.length === 0) {
    return html`
      <div class="form-hint">${t('config.hint_valves')}</div>
      <div class="empty-state">${t('config.no_valves')}</div>
    `;
  }

  return html`
    <div class="form-hint">${t('config.hint_valves')}</div>
    ${valves.map(
      (v) => html`
        <div class="list-item">
          <div class="list-item-header">
            <div style="flex:1">
              <div class="list-item-name">${v.name}</div>
              <div class="list-item-sub">${v.entity_id}</div>
              <div style="display:flex; gap:8px; margin-top:8px; flex-wrap:wrap;">
                <select
                  class="form-select"
                  style="flex:1; min-width:120px;"
                  .value=${v.zone_id ?? ''}
                  @change=${(e: Event) => {
                    const val = (e.target as HTMLSelectElement).value;
                    onChangeValve(v.entity_id, 'zone_id', val || null);
                  }}
                >
                  <option value="">${t('config.none')}</option>
                  ${zones.map((z) => html`<option value=${z.id}>${z.name}</option>`)}
                </select>
                <select
                  class="form-select"
                  style="flex:1; min-width:120px;"
                  .value=${v.water_supply_id ?? ''}
                  @change=${(e: Event) => {
                    const val = (e.target as HTMLSelectElement).value;
                    onChangeValve(v.entity_id, 'water_supply_id', val || null);
                  }}
                >
                  <option value="">${t('config.none')}</option>
                  ${supplies.map((s) => html`<option value=${s.id}>${s.name}</option>`)}
                </select>
              </div>
            </div>
            ${renderIconButton('mdi:delete', () => onDeleteValve(v.entity_id), {
              title: t('config.delete'),
              className: 'action-btn delete',
            })}
          </div>
        </div>
      `,
    )}
  `;
}
