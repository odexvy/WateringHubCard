import type { Hass, HassEntity, Translator } from './types';

// ── Entity discovery ─────────────────────────────────────

export function discoverPrograms(hass: Hass): string[] {
  return Object.keys(hass.states).filter((id) => id.startsWith('switch.wateringhub_'));
}

export function getActiveProgramName(hass: Hass, programEntities: string[]): string | null {
  for (const entityId of programEntities) {
    const entity = hass.states[entityId];
    if (entity?.state === 'on') {
      return typeof entity.attributes.friendly_name === 'string'
        ? entity.attributes.friendly_name
        : entityId;
    }
  }
  return null;
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

  const date = new Date(entity!.state);
  if (isNaN(date.getTime())) return entity!.state;

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  // Future date
  if (diffMs < 0) {
    const futureDiff = -diffMs;
    const hours = Math.floor(futureDiff / (1000 * 60 * 60));
    if (hours < 24) {
      const timeStr = date.toLocaleTimeString(locale ?? [], { hour: '2-digit', minute: '2-digit' });
      return t('time.today_at', { time: timeStr });
    }
    const days = Math.floor(hours / 24);
    if (days === 1) {
      const timeStr = date.toLocaleTimeString(locale ?? [], { hour: '2-digit', minute: '2-digit' });
      return t('time.tomorrow_at', { time: timeStr });
    }
    return t('time.in_days', { count: days });
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
