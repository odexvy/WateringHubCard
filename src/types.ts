export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

export interface Hass {
  states: Record<string, HassEntity>;
  language: string;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<void>;
}

export interface CardConfig {
  type: string;
  title?: string;
}

export type Translator = (key: string, params?: Record<string, string | number>) => string;

export interface ProgramSchedule {
  time: string;
}

// Config card types

export interface AvailableValve {
  id: string;
  name: string;
  entity_id: string;
}

export interface ZoneConfig {
  id: string;
  name: string;
  valves: string[]; // valve IDs only
}

// Valve sequence (running view)

export interface ValveStep {
  valve_id: string;
  valve_name: string;
  zone_id: string;
  zone_name: string;
  duration: number;
  status: 'done' | 'running' | 'pending';
}

// Valve frequency override

export interface ValveFrequency {
  type: 'every_n_days' | 'weekdays';
  n?: number;
  start_date?: string;
  days?: string[];
}

// Dashboard card types

export interface ProgramValve {
  valve_id: string;
  valve_name: string;
  duration: number;
  frequency?: ValveFrequency;
}

export interface ProgramZone {
  zone_id: string;
  zone_name: string;
  valves: ProgramValve[];
}
