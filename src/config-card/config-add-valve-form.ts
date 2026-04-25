import { html, TemplateResult } from 'lit';
import type { Hass, Translator, ZoneConfig, WaterSupply, AvailableValve } from '../shared/types';
import { renderFormRow, renderFormActions } from '../shared/shared-templates';

export interface AddValveFormProps {
  newValveEntityId: string;
  newValveZoneId: string;
  newValveSupplyId: string;
  onUpdateNewValveEntity: (id: string) => void;
  onUpdateNewValveZone: (id: string) => void;
  onUpdateNewValveSupply: (id: string) => void;
  onCancelAddValve: () => void;
  onSaveNewValve: () => void;
}

export function renderAddValveForm(
  hass: Hass,
  existingValves: AvailableValve[],
  zones: ZoneConfig[],
  supplies: WaterSupply[],
  props: AddValveFormProps,
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
        renderSelect(candidates, props.newValveEntityId, props.onUpdateNewValveEntity, t),
      )}
      ${renderFormRow(
        t('config.tab_zones'),
        renderSelect(zones, props.newValveZoneId, props.onUpdateNewValveZone, t),
      )}
      ${renderFormRow(
        t('config.tab_water_supplies'),
        renderSelect(supplies, props.newValveSupplyId, props.onUpdateNewValveSupply, t),
      )}
      ${renderFormActions(props.onCancelAddValve, props.onSaveNewValve, t)}
    </div>
  `;
}

function renderSelect(
  items: Array<{ id: string; name: string }>,
  selected: string,
  onChange: (val: string) => void,
  t: Translator,
): TemplateResult {
  return html`<select
    class="form-input"
    @change=${(e: Event) => onChange((e.target as HTMLSelectElement).value)}
  >
    <option value="" ?selected=${!selected}>${t('config.none')}</option>
    ${items.map(
      (item) =>
        html`<option value=${item.id} ?selected=${item.id === selected}>${item.name}</option>`,
    )}
  </select>`;
}
