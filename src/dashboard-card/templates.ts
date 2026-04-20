import { html, nothing, TemplateResult } from 'lit';
import type {
  Hass,
  Translator,
  ProgramSchedule,
  ProgramZone,
  ValveStep,
  ValveFrequency,
  ActiveValve,
} from '../shared/types';
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
} from '../shared/helpers';
import { renderBadge } from '../shared/shared-templates';

export function renderHeader(title: string): TemplateResult {
  return html`
    <div class="header">
      <span class="title">${title}</span>
    </div>
  `;
}

function renderProgramStatus(
  hass: Hass,
  entity: { entity_id: string; state: string; attributes: Record<string, unknown> },
  isOn: boolean,
  skipDropdownOpen: boolean,
  t: Translator,
  onToggleSkipDropdown: () => void,
  onSkip: (days: number) => void,
  onCancelSkip: () => void,
): TemplateResult {
  if (!isOn) {
    return html`
      <div class="program-status">${renderBadge('disabled', t('status.disabled'))}</div>
    `;
  }

  const status = getGlobalStatus(hass);

  if (status === 'running') {
    const statusEntity = hass.states['sensor.wateringhub_status'];
    const currentProgram = statusEntity?.attributes.current_program as string | undefined;
    const entityProgramId = entity.entity_id?.replace('switch.wateringhub_', '');
    const isThisRunning = currentProgram === entityProgramId;

    return html`
      <div class="program-status">
        ${isThisRunning ? renderBadge('running', t('status.running')) : nothing}
      </div>
    `;
  }

  const skipInfo = getSkipInfo(entity as import('../shared/types').HassEntity);
  const skipDropdown = skipDropdownOpen ? renderSkipDropdown(onSkip, t) : nothing;

  return html`
    <div class="program-status">
      ${skipInfo
        ? html`
            ${renderBadge('skipped', formatSkipBadge(skipInfo.daysRemaining, t))}
            <button class="skip-cancel-btn" @click=${onCancelSkip} title=${t('skip.cancel')}>
              <ha-icon icon="mdi:close-circle-outline"></ha-icon>
            </button>
          `
        : html`
            ${renderBadge('idle', t('status.idle'))}
            <div class="skip-dropdown-wrapper">
              <button class="skip-btn" @click=${onToggleSkipDropdown} title=${t('skip.button')}>
                <ha-icon icon="mdi:pause-circle-outline"></ha-icon>
              </button>
              ${skipDropdown}
            </div>
          `}
      <span class="info-sm">${t('next')}: ${formatNextRun(hass, t, hass.language)}</span>
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

  const waterSupplies =
    (hass.states['sensor.wateringhub_status']?.attributes.water_supplies as Array<{
      id: string;
      name: string;
    }>) ?? [];

  const valveTimeline =
    info.activeValves.length > 1
      ? renderParallelTimeline(info.valveSequence, info.activeValves, waterSupplies)
      : renderValveTimeline(info.valveSequence, info.activeValves);
  const timeline = info.valveSequence.length > 0 ? valveTimeline : nothing;

  const CIRCUMFERENCE = 2 * Math.PI * 30;
  const globalPct =
    info.totalDuration > 0 ? Math.min(1, info.totalElapsed / info.totalDuration) : 0;
  const dashOffset = CIRCUMFERENCE * (1 - globalPct);

  return html`
    <div class="running-block">
      <button class="running-stop-btn" @click=${onStopAll}>${t('stop_all')}</button>
      ${info.dryRun ? renderBadge('dry-run', t('running.dry_run')) : nothing}

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

      ${timeline}
    </div>
  `;
}

function renderValveTimeline(steps: ValveStep[], activeValves: ActiveValve[]): TemplateResult {
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

  // Build a map of valve_id -> remaining seconds from active valves
  const remainingByValve = new Map<string, number>();
  for (const av of activeValves) {
    const elapsed = Math.max(0, (Date.now() - new Date(av.valve_start).getTime()) / 1000);
    remainingByValve.set(av.valve_id, Math.max(0, av.valve_duration - elapsed));
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
            const valveRemaining = remainingByValve.get(v.valve_id) ?? 0;
            return html`
              <div class="tl-step tl-${v.status}">
                <span class="tl-dot">${dotMap[v.status]}</span>
                <span class="tl-step-name">${v.valve_name}</span>
                <span class="tl-step-time">
                  ${v.status === 'running'
                    ? formatRemainingTime(valveRemaining)
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

function renderParallelTimeline(
  steps: ValveStep[],
  activeValves: ActiveValve[],
  waterSupplies: Array<{ id: string; name: string }>,
): TemplateResult {
  // Group steps by water_supply_id, preserving order
  const supplyOrder: string[] = [];
  const stepsBySupply = new Map<string, ValveStep[]>();
  for (const step of steps) {
    if (!stepsBySupply.has(step.water_supply_id)) {
      supplyOrder.push(step.water_supply_id);
      stepsBySupply.set(step.water_supply_id, []);
    }
    stepsBySupply.get(step.water_supply_id)!.push(step);
  }

  // Filter active valves per supply
  const activeBySupply = new Map<string, ActiveValve[]>();
  for (const av of activeValves) {
    if (!activeBySupply.has(av.water_supply_id)) {
      activeBySupply.set(av.water_supply_id, []);
    }
    activeBySupply.get(av.water_supply_id)!.push(av);
  }

  return html`
    <div class="parallel-timeline">
      ${supplyOrder.map((supplyId) => {
        const supplySteps = stepsBySupply.get(supplyId) ?? [];
        const supplyActive = activeBySupply.get(supplyId) ?? [];
        const label = waterSupplies.find((ws) => ws.id === supplyId)?.name ?? supplyId;
        return html`
          <div class="supply-column">
            <div class="supply-label">${label}</div>
            ${renderValveTimeline(supplySteps, supplyActive)}
          </div>
        `;
      })}
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
        ${renderProgramStatus(
          hass,
          entity,
          isOn,
          skipDropdownOpen === entityId,
          t,
          () => onToggleSkipDropdown(entityId),
          (days) => onSkip(entityId, days),
          () => onCancelSkip(entityId),
        )}
        ${renderProgramRecap(hass, entity.attributes, isExpanded, t)}
      </div>
    `;
  })}`;
}

function renderSkipDropdown(onSkip: (days: number) => void, t: Translator): TemplateResult {
  const options = [1, 2, 3, 5];
  return html`
    <div class="skip-dropdown">
      ${options.map(
        (days) => html`
          <button class="skip-dropdown-option" @click=${() => onSkip(days)}>
            ${days === 1 ? t('skip.days_1') : t('skip.days_n', { count: days })}
          </button>
        `,
      )}
    </div>
  `;
}

function renderProgramRecap(
  hass: Hass,
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
      <div class="recap-schedule">
        <ha-icon icon="mdi:history"></ha-icon>
        ${t('last')}: ${formatRelative(hass, 'sensor.wateringhub_last_run', t, hass.language)}
      </div>
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
                min${formatValveFrequency(valve.frequency, t)}${formatValveTimes(
                  valve.times,
                  schedule?.times,
                )}
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

function formatValveTimes(
  valveTimes: string[] | undefined,
  scheduleTimes: string[] | undefined,
): string {
  if (!valveTimes || valveTimes.length === 0) return '';
  if (scheduleTimes && valveTimes.length === scheduleTimes.length) return '';
  return ` · ${[...valveTimes].sort().join(', ')}`;
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
