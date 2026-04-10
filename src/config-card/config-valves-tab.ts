import { html, TemplateResult } from 'lit';
import type { Hass, Translator } from '../types';
import { getAvailableValves } from './config-helpers';

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
