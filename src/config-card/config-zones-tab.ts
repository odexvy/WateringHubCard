import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, ZoneConfig, ZoneFormState } from '../shared/types';
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
    <div class="form-hint">${t('config.hint_zones')}</div>
    ${zones.map((zone) =>
      editingZone?.id === zone.id
        ? renderZoneForm(editingZone, onSave, onCancel, onFormUpdate, t)
        : renderZoneItem(zone, valves, onEdit, onDelete, t),
    )}
    ${editingZone?.isNew ? renderZoneForm(editingZone, onSave, onCancel, onFormUpdate, t) : nothing}
    ${editingZone ? nothing : renderAddButton(`+ ${t('config.new_zone')}`, onNew)}
    ${zones.length === 0 && !editingZone
      ? html`<div class="empty-state">${t('config.no_zones')}</div>`
      : nothing}
  `;
}

function renderZoneItem(
  zone: ZoneConfig,
  valves: Array<{ id: string; name: string; zone_id: string | null }>,
  onEdit: (zone: ZoneConfig) => void,
  onDelete: (zoneId: string) => void,
  t: Translator,
): TemplateResult {
  const zoneValves = valves.filter((v) => v.zone_id === zone.id);
  const valveNames = zoneValves.map((v) => v.name).join(', ') || '—';

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
      ${renderFormActions(onCancel, () => onSave(form), t)}
    </div>
  `;
}
