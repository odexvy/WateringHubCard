import type {
  Hass,
  HassEntity,
  Translator,
  ProgramSchedule,
  ValveStep,
  ActiveValve,
  ErrorInfo,
  SkipInfo,
} from './types';

export type { ErrorInfo, SkipInfo } from './types';

// ── Entity discovery ─────────────────────────────────────

export function discoverPrograms(hass: Hass): string[] {
  return Object.keys(hass.states).filter((id) => id.startsWith('switch.wateringhub_'));
}

export function getActiveProgramName(hass: Hass, programEntities: string[]): string | null {
  for (const entityId of programEntities) {
    const entity = hass.states[entityId];
    if (entity?.state === 'on') {
      return getFriendlyName(entity, entityId);
    }
  }
  return null;
}

export function getFriendlyName(
  entity: { attributes: Record<string, unknown> } | undefined,
  fallback: string,
): string {
  return typeof entity?.attributes.friendly_name === 'string'
    ? entity.attributes.friendly_name
    : fallback;
}

// ── Status ───────────────────────────────────────────────

export function getGlobalStatus(hass: Hass): string {
  return hass.states['sensor.wateringhub_status']?.state ?? 'idle';
}

export function statusLabel(
  status: string,
  t: Translator,
  activeProgramName: string | null,
): string {
  if (status === 'running' && activeProgramName) {
    return t('status.running_program', { name: activeProgramName });
  }
  const label = t(`status.${status}`);
  return label === `status.${status}` ? t('status.idle') : label;
}

// ── Error info ───────────────────────────────────────────

export function getErrorInfo(hass: Hass): ErrorInfo | null {
  const entity = hass.states['sensor.wateringhub_status'];
  if (entity?.state !== 'error') return null;

  const attrs = entity.attributes;
  const programId = attrs.current_program as string | null;
  const switchEntity = programId ? hass.states[`switch.wateringhub_${programId}`] : undefined;
  const programName = getFriendlyName(switchEntity, programId ?? '');

  return {
    programName,
    errorMessage: (attrs.error_message as string) ?? '',
  };
}

// ── Running info ─────────────────────────────────────────

export interface RunningInfo {
  programName: string;
  valvesDone: number;
  valvesTotal: number;
  progressPercent: number;
  totalRemaining: number;
  totalDuration: number;
  totalElapsed: number;
  valveSequence: ValveStep[];
  activeValves: ActiveValve[];
  dryRun: boolean;
}

export function getRunningInfo(hass: Hass): RunningInfo | null {
  const entity = hass.states['sensor.wateringhub_status'];
  if (entity?.state !== 'running') return null;

  const attrs = entity.attributes;
  const valvesDone = (attrs.valves_done as number) ?? 0;
  const valvesTotal = (attrs.valves_total as number) ?? 1;
  const valveSequence = Array.isArray(attrs.valves_sequence)
    ? (attrs.valves_sequence as ValveStep[])
    : [];
  const activeValves = Array.isArray(attrs.active_valves)
    ? (attrs.active_valves as ActiveValve[])
    : [];

  // Per-supply remaining: for each active valve, compute remaining on its supply
  const remainingPerSupply = activeValves.map((av) => {
    const elapsed = Math.max(0, (Date.now() - new Date(av.valve_start).getTime()) / 1000);
    const currentRemaining = Math.max(0, av.valve_duration - elapsed);
    const pendingOnSupply = valveSequence
      .filter((v) => v.water_supply_id === av.water_supply_id && v.status === 'pending')
      .reduce((s, v) => s + v.duration, 0);
    return currentRemaining + pendingOnSupply;
  });
  const totalRemaining = remainingPerSupply.length > 0 ? Math.max(...remainingPerSupply) : 0;

  // Total duration: max across supplies
  const supplyIds = [...new Set(valveSequence.map((v) => v.water_supply_id))];
  const durationPerSupply = supplyIds.map((sid) =>
    valveSequence.filter((v) => v.water_supply_id === sid).reduce((s, v) => s + v.duration, 0),
  );
  const totalDuration = durationPerSupply.length > 0 ? Math.max(...durationPerSupply) : 0;

  // Total elapsed: done durations + active elapsed
  const doneDuration = valveSequence
    .filter((v) => v.status === 'done')
    .reduce((s, v) => s + v.duration, 0);
  const activeElapsed = activeValves.reduce((s, av) => {
    return s + Math.max(0, (Date.now() - new Date(av.valve_start).getTime()) / 1000);
  }, 0);
  const totalElapsed = doneDuration + activeElapsed;

  return {
    programName: (attrs.current_program as string) ?? '',
    valvesDone,
    valvesTotal,
    progressPercent: (attrs.progress_percent as number) ?? 0,
    totalRemaining,
    totalDuration,
    totalElapsed,
    valveSequence,
    activeValves,
    dryRun: attrs.dry_run === true,
  };
}

export function formatRemainingTime(seconds: number): string {
  if (seconds <= 0) return '0:00';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── Schedule formatting ──────────────────────────────────

export function formatSchedule(schedule: ProgramSchedule | undefined, _t: Translator): string {
  if (!schedule) return '';
  return schedule.time;
}

// ── Time formatting ──────────────────────────────────────

function isInvalidState(entity: HassEntity | undefined): boolean {
  return (
    !entity ||
    entity.state === 'None' ||
    entity.state === 'unknown' ||
    entity.state === 'unavailable'
  );
}

export function formatRelative(
  hass: Hass,
  entityId: string,
  t: Translator,
  locale?: string,
): string {
  const entity = hass.states[entityId];
  if (isInvalidState(entity)) return t('time.never');

  const date = new Date(entity.state);
  if (Number.isNaN(date.getTime())) return entity.state;

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  // Future date
  if (diffMs < 0) {
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const targetDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const daysDiff = Math.round((targetDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const timeStr = date.toLocaleTimeString(locale ?? [], { hour: '2-digit', minute: '2-digit' });

    if (daysDiff === 0) return t('time.today_at', { time: timeStr });
    if (daysDiff === 1) return t('time.tomorrow_at', { time: timeStr });
    return t('time.in_days', { count: daysDiff });
  }

  // Past date
  const minutes = Math.floor(diffMs / (1000 * 60));
  if (minutes < 1) return t('time.just_now');
  if (minutes < 60) return t('time.minutes_ago', { count: minutes });
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return t('time.hours_ago', { count: hours });
  const days = Math.floor(hours / 24);
  return t('time.days_ago', { count: days });
}

export function formatNextRun(hass: Hass, t: Translator, locale?: string): string {
  const entity = hass.states['sensor.wateringhub_next_run'];
  if (isInvalidState(entity)) return t('time.no_schedule');
  return formatRelative(hass, 'sensor.wateringhub_next_run', t, locale);
}

// ── Skip info ───────────────────────────────────────────

export function getSkipInfo(entity: HassEntity): SkipInfo | null {
  const skipUntil = entity.attributes.skip_until;
  if (typeof skipUntil !== 'string') return null;

  const target = new Date(skipUntil + 'T23:59:59');
  if (Number.isNaN(target.getTime())) return null;

  const now = new Date();
  if (now > target) return null;

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const targetDay = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  const daysRemaining = Math.max(
    1,
    Math.ceil((targetDay.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)),
  );

  return { isSkipped: true, daysRemaining, skipUntil };
}

export function formatSkipBadge(daysRemaining: number, t: Translator): string {
  return t('skip.active', { count: daysRemaining });
}
