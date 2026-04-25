import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, ProgramFormState, ProgramSchedule } from '../shared/types';
import { discoverPrograms, getFriendlyName, formatSchedule } from '../shared/helpers';
import { getZones, getAvailableValves } from './config-helpers';
import { renderListItem, renderAddButton } from '../shared/shared-templates';
import { renderProgramForm } from './config-program-form';

export function renderProgramsTab(
  hass: Hass,
  editingProgram: ProgramFormState | null,
  onEdit: (entityId: string) => void,
  onDelete: (entityId: string) => void,
  onNew: () => void,
  onSave: (form: ProgramFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ProgramFormState) => void,
  t: Translator,
): TemplateResult {
  const programEntities = discoverPrograms(hass);
  const zones = getZones(hass);
  const valves = getAvailableValves(hass);
  const hasConfiguredValves = valves.some((v) => v.zone_id !== null);

  return html`
    <div class="form-hint">${t('config.hint_programs')}</div>
    ${hasConfiguredValves
      ? nothing
      : html`<div class="empty-state">${t('config.hint_programs_prereq')}</div>`}
    ${programEntities.map((entityId) => {
      const entity = hass.states[entityId];
      if (!entity) return nothing;
      const programId = (entity.attributes.program_id as string) ?? '';
      if (editingProgram?.id === programId) {
        return renderProgramForm(editingProgram, zones, valves, onSave, onCancel, onFormUpdate, t);
      }
      return renderProgramItem(entity, entityId, onEdit, onDelete, t);
    })}
    ${editingProgram?.isNew
      ? renderProgramForm(editingProgram, zones, valves, onSave, onCancel, onFormUpdate, t)
      : nothing}
    ${editingProgram ? nothing : renderAddButton(`+ ${t('config.new_program')}`, onNew)}
    ${programEntities.length === 0 && !editingProgram
      ? html`<div class="empty-state">${t('config.no_programs')}</div>`
      : nothing}
  `;
}

function renderProgramItem(
  entity: { state: string; attributes: Record<string, unknown> },
  entityId: string,
  onEdit: (entityId: string) => void,
  onDelete: (entityId: string) => void,
  t: Translator,
): TemplateResult {
  const name = getFriendlyName(entity, entityId);
  const schedule = entity.attributes.schedule as ProgramSchedule | undefined;
  const totalDuration = entity.attributes.total_duration as number | undefined;
  const dryRun = entity.attributes.dry_run === true;
  const scheduleStr = formatSchedule(schedule, t);
  const sub = totalDuration ? `${scheduleStr} — ${totalDuration} min` : scheduleStr;
  const dryRunBadge = dryRun
    ? html`<span class="badge-dry-run-sm">${t('config.dry_run')}</span>`
    : nothing;

  return renderListItem(
    html`${name} ${dryRunBadge}`,
    sub,
    () => onEdit(entityId),
    () => onDelete(entityId),
    t,
  );
}
