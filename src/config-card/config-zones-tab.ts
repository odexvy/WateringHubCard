import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, AvailableValve, ZoneConfig, ZoneFormState } from '../shared/types';
import { getAvailableValves, getZones } from './config-helpers';
import {
  renderListItem,
  renderFormRow,
  renderFormActions,
  renderAddButton,
} from '../shared/shared-templates';

export function renderZonesTab(
  hass: Hass,
  editingZone: ZoneFormState | null,
  onEdit: (zone: ZoneConfig) => void,
  onDelete: (zoneId: string) => void,
  onNew: () => void,
  onSave: (form: ZoneFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ZoneFormState) => void,
  t: Translator,
): TemplateResult {
  const zones = getZones(hass);
  const valves = getAvailableValves(hass);

  return html`
    ${zones.map((zone) =>
      editingZone?.id === zone.id
        ? renderZoneForm(editingZone, valves, onSave, onCancel, onFormUpdate, t)
        : renderZoneItem(zone, valves, onEdit, onDelete, t),
    )}
    ${editingZone?.isNew
      ? renderZoneForm(editingZone, valves, onSave, onCancel, onFormUpdate, t)
      : nothing}
    ${editingZone ? nothing : renderAddButton(`+ ${t('config.new_zone')}`, onNew)}
    ${zones.length === 0 && !editingZone
      ? html`<div class="empty-state">${t('config.no_zones')}</div>`
      : nothing}
  `;
}

function renderZoneItem(
  zone: ZoneConfig,
  valves: AvailableValve[],
  onEdit: (zone: ZoneConfig) => void,
  onDelete: (zoneId: string) => void,
  t: Translator,
): TemplateResult {
  const valveNames = zone.valves
    .map((vid) => valves.find((v) => v.id === vid)?.name ?? vid)
    .join(', ');

  return renderListItem(
    zone.name,
    valveNames,
    () => onEdit(zone),
    () => onDelete(zone.id),
    t,
  );
}

function renderZoneForm(
  form: ZoneFormState,
  valves: AvailableValve[],
  onSave: (form: ZoneFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ZoneFormState) => void,
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
      ${renderFormRow(
        t('config.select_valves'),
        html`<div class="checkbox-list">
          ${valves.map((v) => {
            const checked = form.valves.includes(v.id);
            return html`
              <label class="checkbox-item">
                <input
                  type="checkbox"
                  .checked=${checked}
                  @change=${() => {
                    const newValves = checked
                      ? form.valves.filter((id) => id !== v.id)
                      : [...form.valves, v.id];
                    onFormUpdate({ ...form, valves: newValves });
                  }}
                />
                ${v.name}
              </label>
            `;
          })}
        </div>`,
      )}
      ${renderFormActions(onCancel, () => onSave(form), t)}
    </div>
  `;
}
