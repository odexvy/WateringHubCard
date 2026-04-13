import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, WaterSupply, WaterSupplyFormState } from '../shared/types';
import { getWaterSupplies } from './config-helpers';
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

  return html`
    ${supplies.map((supply) =>
      editingSupply?.id === supply.id
        ? renderSupplyForm(editingSupply, onSave, onCancel, onFormUpdate, t)
        : renderListItem(
            supply.name,
            supply.id,
            () => onEdit(supply),
            () => onDelete(supply.id),
            t,
          ),
    )}
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
