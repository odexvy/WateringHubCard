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
  type: 'daily' | 'every_n_days' | 'weekdays';
  time: string;
  n?: number;
  start_date?: string;
  days?: string[];
}

export interface ProgramValve {
  valve_id: string;
  valve_name: string;
  duration: number;
}

export interface ProgramZone {
  zone_id: string;
  zone_name: string;
  valves: ProgramValve[];
}
