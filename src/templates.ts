import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, ProgramSchedule, ProgramZone } from './types';
import {
  getGlobalStatus,
  statusLabel,
  formatRelative,
  formatNextRun,
  formatSchedule,
  getActiveProgramName,
  getRunningInfo,
  formatRemainingTime,
} from './helpers';

export function renderHeader(
  title: string,
  isRunning: boolean,
  onStopAll: () => void,
  t: Translator,
): TemplateResult {
  return html`
    <div class="header">
      <span class="title">${title}</span>
      ${isRunning
        ? html`<button class="stop-btn" @click=${onStopAll}>${t('stop_all')}</button>`
        : nothing}
    </div>
  `;
}

export function renderStatusRow(
  hass: Hass,
  programEntities: string[],
  t: Translator,
): TemplateResult {
  const status = getGlobalStatus(hass);
  const activeName = getActiveProgramName(hass, programEntities);

  return html`
    <div class="status-row">
      <span class="badge badge-${status}"> ${statusLabel(status, t, activeName)} </span>
      <span class="info-item"> ${t('next')}: ${formatNextRun(hass, t, hass.language)} </span>
      <span class="info-item">
        ${t('last')}: ${formatRelative(hass, 'sensor.wateringhub_last_run', t, hass.language)}
      </span>
    </div>
  `;
}

export function renderRunningView(hass: Hass, t: Translator): TemplateResult {
  const info = getRunningInfo(hass);
  if (!info) return html``;

  return html`
    <div class="running-view">
      <div class="running-zone">
        <ha-icon icon="mdi:map-marker"></ha-icon>
        ${t('running.zone', { name: info.zoneName })}
      </div>

      <div class="running-valve-row">
        <ha-icon icon="mdi:water"></ha-icon>
        <span class="running-valve-name">${info.valveName}</span>
        <span class="running-valve-time">
          ${t('running.remaining', { time: formatRemainingTime(info.remaining) })}
        </span>
      </div>

      <div class="running-bar-section">
        <div class="running-bar">
          <div class="running-bar-fill" style="width: ${info.valvePercent}%"></div>
        </div>
      </div>

      <div class="running-global">
        <span class="running-global-label">
          ${t('running.progress', { done: info.valvesDone + 1, total: info.valvesTotal })}
        </span>
        <div class="running-bar">
          <div class="running-bar-fill global" style="width: ${info.finePercent}%"></div>
        </div>
      </div>
    </div>
  `;
}

export function renderProgramList(
  hass: Hass,
  programEntities: string[],
  expandedProgram: string | null,
  onToggleExpand: (entityId: string) => void,
  onToggleProgram: (entityId: string) => void,
  t: Translator,
): TemplateResult {
  if (programEntities.length === 0) {
    return html`<div class="no-programs">${t('no_programs')}</div>`;
  }

  return html`${programEntities.map((entityId) => {
    const entity = hass.states[entityId];
    if (!entity) return nothing;

    const isOn = entity.state === 'on';
    const isExpanded = expandedProgram === entityId;
    const name =
      typeof entity.attributes.friendly_name === 'string'
        ? entity.attributes.friendly_name
        : entityId;

    return html`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${() => onToggleExpand(entityId)}>
            <ha-icon class="chevron ${isExpanded ? 'open' : ''}" icon="mdi:chevron-down"></ha-icon>
            ${isOn ? html`<div class="active-dot"></div>` : nothing}
            <span class="program-name ${isOn ? 'active' : ''}">${name}</span>
          </div>
          <ha-switch .checked=${isOn} @change=${() => onToggleProgram(entityId)}></ha-switch>
        </div>
        ${renderProgramRecap(entity.attributes, isExpanded, t)}
      </div>
    `;
  })}`;
}

function renderProgramRecap(
  attributes: Record<string, unknown>,
  isExpanded: boolean,
  t: Translator,
): TemplateResult {
  const schedule = attributes.schedule as ProgramSchedule | undefined;
  const zones = (attributes.zones as ProgramZone[]) ?? [];
  const totalDuration = attributes.total_duration as number | undefined;

  return html`
    <div class="program-recap ${isExpanded ? 'open' : ''}">
      ${schedule
        ? html`<div class="recap-schedule">
            <ha-icon icon="mdi:calendar-clock"></ha-icon>
            ${formatSchedule(schedule, t)}
          </div>`
        : nothing}
      ${zones.map(
        (zone) => html`
          <div class="recap-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            ${zone.zone_name}
          </div>
          ${zone.valves.map(
            (valve) => html`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${valve.valve_name} — ${valve.duration} min
              </div>
            `,
          )}
        `,
      )}
      ${totalDuration
        ? html`<div class="recap-total">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            ${t('recap.total_duration', { duration: totalDuration })}
          </div>`
        : nothing}
    </div>
  `;
}
