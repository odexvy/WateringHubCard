import { html, TemplateResult } from 'lit';
import type { Hass, Translator } from '../shared/types';
import { getAvailableValves, getWaterSupplies } from './config-helpers';
import { renderReadOnlyListItem } from '../shared/shared-templates';

export function renderValvesTab(hass: Hass, t: Translator): TemplateResult {
  const valves = getAvailableValves(hass);
  const supplies = getWaterSupplies(hass);
  if (valves.length === 0) {
    return html`<div class="empty-state">${t('config.no_valves')}</div>`;
  }
  return html`
    ${valves.map((v) => {
      const supplyName =
        supplies.find((s) => s.id === v.water_supply_id)?.name ?? v.water_supply_id;
      return renderReadOnlyListItem(v.name, `${v.entity_id} · ${supplyName}`);
    })}
  `;
}
