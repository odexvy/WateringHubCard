import type { Hass, AvailableValve, ZoneConfig, WaterSupply } from '../shared/types';

export interface ValveAssignment {
  entity_id: string;
  name: string;
  zone_id: string | null;
  water_supply_id: string | null;
}

export function valvesToAssignments(valves: AvailableValve[]): ValveAssignment[] {
  return valves.map((v) => ({
    entity_id: v.entity_id,
    name: v.name,
    zone_id: v.zone_id,
    water_supply_id: v.water_supply_id,
  }));
}

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

export function getValvesForZone(zoneId: string, valves: AvailableValve[]): AvailableValve[] {
  return valves.filter((v) => v.zone_id === zoneId);
}

export function generateId(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replaceAll(/[\u0300-\u036f]/g, '')
    .replaceAll(/[^a-z0-9]+/g, '_')
    .replaceAll(/^_|_$/g, '');
}
