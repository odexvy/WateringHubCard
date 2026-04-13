import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, WaterSupply, WaterSupplyFormState } from '../shared/types';
import { getAvailableValves, getWaterSupplies } from './config-helpers';
import {
  renderListItem,
  renderFormRow,
  renderFormActions,
  renderAddButton,
} from '../shared/shared-templates';

export function renderWaterSuppliesTab(
  hass: Hass,
  editingSupply: WaterSupplyFormState | null,
  onEdit: (supply: WaterSupply) => void,
  onDelete: (supplyId: string) => void,
  onNew: () => void,
  onSave: (form: WaterSupplyFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: WaterSupplyFormState) => void,
  t: Translator,
): TemplateResult {
  const supplies = getWaterSupplies(hass);
  const valves = getAvailableValves(hass);

  return html`
    <div class="form-hint">${t('config.hint_water_supplies')}</div>
    ${supplies.map((supply) => {
      if (editingSupply?.id === supply.id) {
        return renderSupplyForm(editingSupply, onSave, onCancel, onFormUpdate, t);
      }
      const supplyValves = valves.filter((v) => v.water_supply_id === supply.id);
      const valveNames = supplyValves.map((v) => v.name).join(', ') || '—';
      return renderListItem(
        supply.name,
        valveNames,
        () => onEdit(supply),
        () => onDelete(supply.id),
        t,
      );
    })}
    ${editingSupply?.isNew
      ? renderSupplyForm(editingSupply, onSave, onCancel, onFormUpdate, t)
      : nothing}
    ${editingSupply ? nothing : renderAddButton(`+ ${t('config.new_water_supply')}`, onNew)}
    ${supplies.length === 0 && !editingSupply
      ? html`<div class="empty-state">${t('config.no_water_supplies')}</div>`
      : nothing}
  `;
}

function renderSupplyForm(
  form: WaterSupplyFormState,
  onSave: (form: WaterSupplyFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: WaterSupplyFormState) => void,
  t: Translator,
): TemplateResult {
  return html`
    <div class="inline-form">
      ${renderFormRow(
        t('config.name'),
        html`<input
          class="form-input"
          .value=${form.name}
          @input=${(e: InputEvent) =>
            onFormUpdate({ ...form, name: (e.target as HTMLInputElement).value })}
        />`,
      )}
      ${renderFormActions(onCancel, () => onSave(form), t)}
    </div>
  `;
}
