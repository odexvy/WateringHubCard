import type { Hass, HassEntity, Translator, ProgramSchedule, ValveStep } from './types';

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

export interface ErrorInfo {
  programName: string;
  errorMessage: string;
}

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
  zoneName: string;
  valveName: string;
  valveStart: string;
  valveDuration: number;
  valvesDone: number;
  valvesTotal: number;
  progressPercent: number;
  remaining: number;
  totalRemaining: number;
  totalDuration: number;
  totalElapsed: number;
  valvePercent: number;
  finePercent: number;
  globalEndPercent: number;
  valveSequence: ValveStep[];
  dryRun: boolean;
}

export function getRunningInfo(hass: Hass): RunningInfo | null {
  const entity = hass.states['sensor.wateringhub_status'];
  if (entity?.state !== 'running') return null;

  const attrs = entity.attributes;
  const valveStart = attrs.current_valve_start as string | null;
  const valveDuration = (attrs.current_valve_duration as number) ?? 0;
  const valvesDone = (attrs.valves_done as number) ?? 0;
  const valvesTotal = (attrs.valves_total as number) ?? 1;

  const elapsed = valveStart
    ? Math.max(0, (Date.now() - new Date(valveStart).getTime()) / 1000)
    : 0;
  const remaining = Math.max(0, valveDuration - elapsed);
  const valvePercent = valveDuration > 0 ? Math.min(100, (elapsed / valveDuration) * 100) : 0;
  const finePercent = ((valvesDone + valvePercent / 100) / valvesTotal) * 100;
  const globalEndPercent = ((valvesDone + 1) / valvesTotal) * 100;
  const valveSequence = Array.isArray(attrs.valves_sequence)
    ? (attrs.valves_sequence as ValveStep[])
    : [];

  // Total remaining: current valve remaining + all pending valve durations
  const pendingDuration = valveSequence
    .filter((v) => v.status === 'pending')
    .reduce((s, v) => s + v.duration, 0);
  const totalRemaining = remaining + pendingDuration;

  // Total duration of all valves (from sequence or fallback)
  const totalDuration =
    valveSequence.length > 0
      ? valveSequence.reduce((s, v) => s + v.duration, 0)
      : valveDuration * valvesTotal;

  // Total elapsed across all valves
  const doneDuration = valveSequence
    .filter((v) => v.status === 'done')
    .reduce((s, v) => s + v.duration, 0);
  const totalElapsed = doneDuration + elapsed;

  return {
    programName: (attrs.current_program as string) ?? '',
    zoneName: (attrs.current_zone_name as string) ?? '',
    valveName: (attrs.current_valve_name as string) ?? '',
    valveStart: valveStart ?? '',
    valveDuration,
    valvesDone,
    valvesTotal,
    progressPercent: (attrs.progress_percent as number) ?? 0,
    remaining,
    totalRemaining,
    totalDuration,
    totalElapsed,
    valvePercent,
    finePercent,
    globalEndPercent,
    valveSequence,
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
