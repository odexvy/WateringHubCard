import { html, TemplateResult } from 'lit';
import type { Hass, Translator } from '../shared/types';
import { getAvailableValves } from './config-helpers';
import { renderReadOnlyListItem } from '../shared/shared-templates';

export function renderValvesTab(hass: Hass, t: Translator): TemplateResult {
  const valves = getAvailableValves(hass);
  if (valves.length === 0) {
    return html`<div class="empty-state">${t('config.no_valves')}</div>`;
  }
  return html`
    ${valves.map((v) =>
      renderReadOnlyListItem(v.name, `${t('config.valve_entity')}: ${v.entity_id}`),
    )}
  `;
}
