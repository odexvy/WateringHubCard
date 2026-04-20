export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

export interface HassEvent {
  event_type: string;
  data: Record<string, unknown>;
}

export interface HassConnection {
  subscribeEvents(callback: (event: HassEvent) => void, eventType: string): Promise<() => void>;
}

export interface Hass {
  states: Record<string, HassEntity>;
  language: string;
  connection: HassConnection;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<void>;
}

export interface CardConfig {
  type: string;
  title?: string;
}

export type Translator = (key: string, params?: Record<string, string | number>) => string;

export interface ProgramSchedule {
  times: string[];
}

// Config card types

export interface AvailableValve {
  id: string;
  name: string;
  entity_id: string;
  water_supply_id: string | null;
  zone_id: string | null;
}

export interface ZoneConfig {
  id: string;
  name: string;
}

// Valve sequence (running view)

export interface ValveStep {
  valve_id: string;
  valve_name: string;
  zone_id: string;
  zone_name: string;
  duration: number;
  status: 'done' | 'running' | 'pending';
  water_supply_id: string | null;
  start?: string;
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
  times?: string[];
}

export interface ProgramZone {
  zone_id: string;
  zone_name: string;
  valves: ProgramValve[];
}

// Error / Skip info (from helpers.ts)

export interface ErrorInfo {
  programName: string;
  errorMessage: string;
}

export interface SkipInfo {
  isSkipped: boolean;
  daysRemaining: number;
  skipUntil: string;
}

// Config form state (from config-templates.ts)

export interface ProgramValveForm {
  valve_id: string;
  duration: number;
  frequency?: ValveFrequency;
  times?: string[];
}

export interface ProgramZoneForm {
  zone_id: string;
  valves: ProgramValveForm[];
}

export interface ProgramFormState {
  id: string;
  name: string;
  schedule: ProgramSchedule;
  zones: ProgramZoneForm[];
  dry_run: boolean;
  isNew: boolean;
}

export interface ZoneFormState {
  id: string;
  name: string;
  isNew: boolean;
}

// Water supply

export interface WaterSupply {
  id: string;
  name: string;
}

export interface WaterSupplyFormState {
  id: string;
  name: string;
  isNew: boolean;
}

export interface ActiveValve {
  water_supply_id: string | null;
  valve_id: string;
  valve_name: string;
  valve_start: string;
  valve_duration: number;
}
