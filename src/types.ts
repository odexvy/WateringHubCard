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
