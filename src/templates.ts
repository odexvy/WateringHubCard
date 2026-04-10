import { html, nothing, TemplateResult } from 'lit';
import type {
  Hass,
  Translator,
  ProgramSchedule,
  ProgramZone,
  ValveStep,
  ValveFrequency,
} from './types';
import {
  getGlobalStatus,
  formatRelative,
  formatNextRun,
  formatSchedule,
  getRunningInfo,
  getErrorInfo,
  formatRemainingTime,
  getFriendlyName,
  getSkipInfo,
  formatSkipBadge,
} from './helpers';

export function renderHeader(title: string): TemplateResult {
  return html`
    <div class="header">
      <span class="title">${title}</span>
    </div>
  `;
}

function renderProgramStatus(
  hass: Hass,
  entity: { state: string; attributes: Record<string, unknown> },
  isOn: boolean,
  t: Translator,
  onCancelSkip: () => void,
): TemplateResult {
  if (!isOn) {
    return html`
      <div class="program-status">
        <span class="badge-sm badge-disabled">${t('status.disabled')}</span>
      </div>
    `;
  }

  const skipInfo = getSkipInfo(entity as import('./types').HassEntity);
  if (skipInfo) {
    return html`
      <div class="program-status">
        <span class="badge-sm badge-skipped">${formatSkipBadge(skipInfo.daysRemaining, t)}</span>
        <button class="skip-cancel-btn" @click=${onCancelSkip} title=${t('skip.cancel')}>
          <ha-icon icon="mdi:close"></ha-icon>
        </button>
      </div>
    `;
  }

  const status = getGlobalStatus(hass);
  if (status === 'running') return html``;

  return html`
    <div class="program-status">
      <span class="badge-sm badge-idle">${t('status.idle')}</span>
      <span class="info-sm">${t('next')}: ${formatNextRun(hass, t, hass.language)}</span>
      <span class="info-sm">
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
  onStopAll: () => void,
  t: Translator,
): TemplateResult {
  const info = getRunningInfo(hass);
  if (!info) return html``;

  const CIRCUMFERENCE = 2 * Math.PI * 30;
  const globalPct = info.totalDuration > 0 ? info.totalElapsed / info.totalDuration : 0;
  const dashOffset = CIRCUMFERENCE * (1 - Math.min(1, globalPct));

  return html`
    <div class="running-block">
      <button class="running-stop-btn" @click=${onStopAll}>${t('stop_all')}</button>
      ${info.dryRun ? html`<span class="badge-dry-run">${t('running.dry_run')}</span>` : nothing}

      <div class="global-hero">
        <div class="circular-progress">
          <svg viewBox="0 0 68 68">
            <circle class="cp-track" cx="34" cy="34" r="30" />
            <circle
              class="cp-fill"
              cx="34"
              cy="34"
              r="30"
              style="stroke-dasharray: ${CIRCUMFERENCE}; stroke-dashoffset: ${dashOffset}"
            />
          </svg>
          <div class="cp-center">
            <span class="cp-time">${formatRemainingTime(info.totalRemaining)}</span>
          </div>
        </div>
        <div class="global-info">
          <div class="global-program-name">
            ${getFriendlyName(
              hass.states[`switch.wateringhub_${info.programName}`],
              info.programName,
            )}
          </div>
          <div class="global-sub">
            ${t('running.progress', { done: info.valvesDone + 1, total: info.valvesTotal })}
          </div>
        </div>
      </div>

      ${info.valveSequence.length > 0
        ? renderValveTimeline(info.valveSequence, info.remaining)
        : nothing}
    </div>
  `;
}

function renderValveTimeline(steps: ValveStep[], remaining: number): TemplateResult {
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

  // SVG icons as inline templates
  const dotDone = html`<svg viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9Z"
    />
  </svg>`;
  const dotRunning = html`<svg viewBox="0 0 24 24">
    <circle fill="currentColor" cx="12" cy="12" r="6" />
  </svg>`;
  const dotPending = html`<svg viewBox="0 0 24 24">
    <circle fill="none" stroke="currentColor" stroke-width="2" cx="12" cy="12" r="6" />
  </svg>`;
  const dotMap = { done: dotDone, running: dotRunning, pending: dotPending };

  return html`
    <div class="valve-timeline">
      ${groups.map(
        (group) => html`
          <div class="tl-zone">${group.zoneName}</div>
          ${group.valves.map((v) => {
            const durationMin = Math.ceil(v.duration / 60);
            return html`
              <div class="tl-step tl-${v.status}">
                <span class="tl-dot">${dotMap[v.status]}</span>
                <span class="tl-step-name">${v.valve_name}</span>
                <span class="tl-step-time">
                  ${v.status === 'running' ? formatRemainingTime(remaining) : `${durationMin} min`}
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
  skipDropdownOpen: string | null,
  onToggleExpand: (entityId: string) => void,
  onToggleProgram: (entityId: string) => void,
  onToggleSkipDropdown: (entityId: string) => void,
  onSkip: (entityId: string, days: number) => void,
  onCancelSkip: (entityId: string) => void,
  t: Translator,
): TemplateResult {
  if (programEntities.length === 0) {
    return html`<div class="empty-state">${t('no_programs')}</div>`;
  }

  return html`${programEntities.map((entityId) => {
    const entity = hass.states[entityId];
    if (!entity) return nothing;

    const isOn = entity.state === 'on';
    const isExpanded = expandedProgram === entityId;
    const name = getFriendlyName(entity, entityId);
    const skipInfo = getSkipInfo(entity);
    const status = getGlobalStatus(hass);
    const showSkipBtn = isOn && status !== 'running' && !skipInfo;

    return html`
      <div class="program-wrapper">
        <div class="program">
          <div class="program-header" @click=${() => onToggleExpand(entityId)}>
            <ha-icon class="chevron ${isExpanded ? 'open' : ''}" icon="mdi:chevron-down"></ha-icon>
            ${isOn ? html`<div class="active-dot"></div>` : nothing}
            <span class="program-name ${isOn ? 'active' : ''}">${name}</span>
          </div>
          ${showSkipBtn
            ? html`
                <div class="skip-dropdown-wrapper">
                  <button
                    class="skip-btn"
                    @click=${() => onToggleSkipDropdown(entityId)}
                    title=${t('skip.button')}
                  >
                    <ha-icon icon="mdi:debug-step-over"></ha-icon>
                  </button>
                  ${skipDropdownOpen === entityId
                    ? renderSkipDropdown(entityId, onSkip, t)
                    : nothing}
                </div>
              `
            : nothing}
          <ha-switch .checked=${isOn} @change=${() => onToggleProgram(entityId)}></ha-switch>
        </div>
        ${renderProgramStatus(hass, entity, isOn, t, () => onCancelSkip(entityId))}
        ${renderProgramRecap(entity.attributes, isExpanded, t)}
      </div>
    `;
  })}`;
}

function renderSkipDropdown(
  entityId: string,
  onSkip: (entityId: string, days: number) => void,
  t: Translator,
): TemplateResult {
  const options = [1, 2, 3, 7];
  return html`
    <div class="skip-dropdown">
      ${options.map(
        (days) => html`
          <button class="skip-dropdown-option" @click=${() => onSkip(entityId, days)}>
            ${days === 1 ? t('skip.days_1') : t('skip.days_n', { count: days })}
          </button>
        `,
      )}
    </div>
  `;
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
            <span class="recap-zone-badge">${zone.zone_name}</span>
          </div>
          ${zone.valves.map(
            (valve) => html`
              <div class="recap-valve">
                <ha-icon icon="mdi:water"></ha-icon>
                ${valve.valve_name} — ${valve.duration}
                min${formatValveFrequency(valve.frequency, t)}
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

function formatValveFrequency(frequency: ValveFrequency | undefined, t: Translator): string {
  if (!frequency) return '';
  if (frequency.type === 'every_n_days') {
    return ` · ${t('recap.frequency_every_n', { n: frequency.n ?? 2 })}`;
  }
  if (frequency.type === 'weekdays' && frequency.days?.length) {
    const dayLabels = frequency.days.map((d) => t(`days.${d}`)).join(', ');
    return ` · ${dayLabels}`;
  }
  return '';
}
