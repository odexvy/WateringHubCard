import type { Hass, AvailableValve, ZoneConfig, WaterSupply } from '../shared/types';

export function getAvailableValves(hass: Hass): AvailableValve[] {
  const entity = hass.states['sensor.wateringhub_status'];
  return (entity?.attributes.available_valves as AvailableValve[]) ?? [];
}

export function getZones(hass: Hass): ZoneConfig[] {
  const entity = hass.states['sensor.wateringhub_status'];
  return (entity?.attributes.zones as ZoneConfig[]) ?? [];
}

export function getWaterSupplies(hass: Hass): WaterSupply[] {
  const entity = hass.states['sensor.wateringhub_status'];
  return (entity?.attributes.water_supplies as WaterSupply[]) ?? [];
}

export function generateId(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .replaceAll(/[^a-z0-9]+/g, '_')
    .replaceAll(/^_|_$/g, '');
}
