import type { Hass } from '../shared/types';
import { getAvailableValves, getZones, generateId } from '../config-card/config-helpers';

function makeHass(
  states: Record<string, { state: string; attributes?: Record<string, unknown> }>,
): Hass {
  const hassStates: Hass['states'] = {};
  for (const [id, s] of Object.entries(states)) {
    hassStates[id] = { entity_id: id, state: s.state, attributes: s.attributes ?? {} };
  }
  return {
    states: hassStates,
    language: 'en',
    connection: { subscribeEvents: jest.fn() },
    callService: jest.fn(),
  };
}

// ── getAvailableValves ───────────────────────────────────

describe('getAvailableValves', () => {
  it('returns valves from sensor attributes', () => {
    const valves = [
      { id: 'cedre', name: 'Oscillant Cedre', entity_id: 'switch.0x1' },
      { id: 'terrasse', name: 'Oscillant Terrasse', entity_id: 'switch.0x2' },
    ];
    const hass = makeHass({
      'sensor.wateringhub_status': { state: 'idle', attributes: { available_valves: valves } },
    });
    expect(getAvailableValves(hass)).toEqual(valves);
  });

  it('returns empty array when sensor missing', () => {
    const hass = makeHass({});
    expect(getAvailableValves(hass)).toEqual([]);
  });

  it('returns empty array when attribute missing', () => {
    const hass = makeHass({
      'sensor.wateringhub_status': { state: 'idle', attributes: {} },
    });
    expect(getAvailableValves(hass)).toEqual([]);
  });
});

// ── getZones ─────────────────────────────────────────────

describe('getZones', () => {
  it('returns zones from sensor attributes', () => {
    const zones = [{ id: 'jardin', name: 'Jardin complet', valves: ['cedre', 'terrasse'] }];
    const hass = makeHass({
      'sensor.wateringhub_status': { state: 'idle', attributes: { zones } },
    });
    expect(getZones(hass)).toEqual(zones);
  });

  it('returns empty array when sensor missing', () => {
    const hass = makeHass({});
    expect(getZones(hass)).toEqual([]);
  });

  it('returns empty array when attribute missing', () => {
    const hass = makeHass({
      'sensor.wateringhub_status': { state: 'idle', attributes: {} },
    });
    expect(getZones(hass)).toEqual([]);
  });
});

// ── generateId ───────────────────────────────────────────

describe('generateId', () => {
  it('converts name to lowercase snake_case', () => {
    expect(generateId('Arrosage Quotidien')).toBe('arrosage_quotidien');
  });

  it('removes accents', () => {
    expect(generateId('Arrosage été')).toBe('arrosage_ete');
  });

  it('removes special characters', () => {
    expect(generateId("l'arrosage du soir!")).toBe('l_arrosage_du_soir');
  });

  it('trims leading and trailing underscores', () => {
    expect(generateId(' test ')).toBe('test');
  });

  it('collapses multiple separators', () => {
    expect(generateId('a---b___c   d')).toBe('a_b_c_d');
  });

  it('handles empty string', () => {
    expect(generateId('')).toBe('');
  });

  it('handles pure numbers', () => {
    expect(generateId('123')).toBe('123');
  });
});
