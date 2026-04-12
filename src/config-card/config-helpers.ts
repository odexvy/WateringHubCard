import type { Hass, AvailableValve, ZoneConfig } from '../shared/types';

export function getAvailableValves(hass: Hass): AvailableValve[] {
  const entity = hass.states['sensor.wateringhub_status'];
  return (entity?.attributes.available_valves as AvailableValve[]) ?? [];
}

export function getZones(hass: Hass): ZoneConfig[] {
  const entity = hass.states['sensor.wateringhub_status'];
  return (entity?.attributes.zones as ZoneConfig[]) ?? [];
}

export function generateId(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '');
}
