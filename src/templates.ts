import { html, nothing, TemplateResult } from 'lit';
import { keyed } from 'lit/directives/keyed.js';
import type { Hass, Translator, ProgramSchedule, ProgramZone, ValveStep } from './types';
import {
  getGlobalStatus,
  statusLabel,
  formatRelative,
  formatNextRun,
  formatSchedule,
  getActiveProgramName,
  getRunningInfo,
  getErrorInfo,
  formatRemainingTime,
  getFriendlyName,
} from './helpers';

export function renderHeader(
  title: string,
  showStopButton: boolean,
  onStopAll: () => void,
  t: Translator,
): TemplateResult {
  return html`
    <div class="header">
      <span class="title">${title}</span>
      ${showStopButton
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

export function renderErrorView(hass: Hass, t: Translator): TemplateResult {
  const info = getErrorInfo(hass);
  if (!info) return html``;

  return html`
    <div class="error-view">
      <div class="error-title">
        <ha-icon icon="mdi:alert-circle"></ha-icon>
        ${t('error.program', { name: info.programName })}
      </div>
      ${info.errorMessage ? html`<div class="error-message">${info.errorMessage}</div>` : nothing}
      <div class="error-auto-stopped">${t('error.auto_stopped')}</div>
    </div>
  `;
}

export function renderRunningView(
  hass: Hass,
  valveKey: string,
  valveBarStyle: string,
  globalBarStyle: string,
  t: Translator,
): TemplateResult {
  const info = getRunningInfo(hass);
  if (!info) return html``;

  return html`
    <div class="running-view">
      ${info.dryRun ? html`<span class="badge-dry-run">${t('running.dry_run')}</span>` : nothing}
      ${info.valveSequence.length > 0
        ? renderValveSequence(info.valveSequence, info.remaining, t)
        : renderRunningCompact(info, t)}

      <div class="running-bar-section">
        <div class="running-bar">
          ${keyed(valveKey, html`<div class="running-bar-fill" style="${valveBarStyle}"></div>`)}
        </div>
      </div>

      <div class="running-global">
        <span class="running-global-label">
          ${t('running.progress', { done: info.valvesDone + 1, total: info.valvesTotal })}
        </span>
        <div class="running-bar">
          ${keyed(
            valveKey,
            html`<div class="running-bar-fill global" style="${globalBarStyle}"></div>`,
          )}
        </div>
      </div>
    </div>
  `;
}

function renderRunningCompact(
  info: ReturnType<typeof getRunningInfo> & object,
  t: Translator,
): TemplateResult {
  return html`
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
  `;
}

function renderValveSequence(steps: ValveStep[], remaining: number, t: Translator): TemplateResult {
  // Group by zone, preserving order
  const groups: { zoneName: string; valves: ValveStep[] }[] = [];
  for (const step of steps) {
    const last = groups[groups.length - 1];
    if (last?.zoneName === step.zone_name) {
      last.valves.push(step);
    } else {
      groups.push({ zoneName: step.zone_name, valves: [step] });
    }
  }

  return html`
    <div class="valve-sequence">
      ${groups.map(
        (group) => html`
          <div class="seq-zone">
            <ha-icon icon="mdi:map-marker"></ha-icon>
            <span>${group.zoneName}</span>
          </div>
          ${group.valves.map((v) => {
            const iconMap = {
              done: 'mdi:check-circle',
              running: 'mdi:water',
              pending: 'mdi:clock-outline',
            };
            const icon = iconMap[v.status];
            const durationMin = Math.ceil(v.duration / 60);
            return html`
              <div class="seq-valve seq-${v.status}">
                <ha-icon icon="${icon}"></ha-icon>
                <span class="seq-valve-name">${v.valve_name}</span>
                <span class="seq-valve-info">
                  ${v.status === 'running'
                    ? t('running.remaining', { time: formatRemainingTime(remaining) })
                    : `${durationMin} min`}
                </span>
              </div>
            `;
          })}
        `,
      )}
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
    return html`<div class="empty-state">${t('no_programs')}</div>`;
  }

  return html`${programEntities.map((entityId) => {
    const entity = hass.states[entityId];
    if (!entity) return nothing;

    const isOn = entity.state === 'on';
    const isExpanded = isOn || expandedProgram === entityId;
    const name = getFriendlyName(entity, entityId);

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
