import type { Hass, Translator, ProgramSchedule } from '../types';
import {
  discoverPrograms,
  getActiveProgramName,
  getGlobalStatus,
  statusLabel,
  formatSchedule,
  formatRelative,
  formatNextRun,
} from '../helpers';

// ── Mock helpers ─────────────────────────────────────────

function makeHass(
  states: Record<string, { state: string; attributes?: Record<string, unknown> }>,
): Hass {
  const hassStates: Record<string, any> = {};
  for (const [id, s] of Object.entries(states)) {
    hassStates[id] = { entity_id: id, state: s.state, attributes: s.attributes ?? {} };
  }
  return {
    states: hassStates,
    language: 'en',
    callService: jest.fn(),
  };
}

const mockT: Translator = (key, params) => {
  let result = key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      result = result.replace(`{${k}}`, String(v));
    }
  }
  return result;
};

// ── discoverPrograms ─────────────────────────────────────

describe('discoverPrograms', () => {
  it('finds switch.wateringhub_* entities', () => {
    const hass = makeHass({
      'switch.wateringhub_prog_a': { state: 'on' },
      'switch.wateringhub_prog_b': { state: 'off' },
      'sensor.wateringhub_status': { state: 'idle' },
      'switch.other_thing': { state: 'on' },
    });
    expect(discoverPrograms(hass)).toEqual([
      'switch.wateringhub_prog_a',
      'switch.wateringhub_prog_b',
    ]);
  });

  it('returns empty array when no programs', () => {
    const hass = makeHass({
      'sensor.wateringhub_status': { state: 'idle' },
    });
    expect(discoverPrograms(hass)).toEqual([]);
  });
});

// ── getActiveProgramName ─────────────────────────────────

describe('getActiveProgramName', () => {
  it('returns friendly_name of ON program', () => {
    const hass = makeHass({
      'switch.wateringhub_prog_a': { state: 'off', attributes: { friendly_name: 'Program A' } },
      'switch.wateringhub_prog_b': { state: 'on', attributes: { friendly_name: 'Program B' } },
    });
    const programs = ['switch.wateringhub_prog_a', 'switch.wateringhub_prog_b'];
    expect(getActiveProgramName(hass, programs)).toBe('Program B');
  });

  it('returns entity_id when no friendly_name', () => {
    const hass = makeHass({
      'switch.wateringhub_prog_a': { state: 'on' },
    });
    expect(getActiveProgramName(hass, ['switch.wateringhub_prog_a'])).toBe(
      'switch.wateringhub_prog_a',
    );
  });

  it('returns null when none active', () => {
    const hass = makeHass({
      'switch.wateringhub_prog_a': { state: 'off' },
    });
    expect(getActiveProgramName(hass, ['switch.wateringhub_prog_a'])).toBeNull();
  });
});

// ── getGlobalStatus ──────────────────────────────────────

describe('getGlobalStatus', () => {
  it('returns sensor state', () => {
    const hass = makeHass({ 'sensor.wateringhub_status': { state: 'running' } });
    expect(getGlobalStatus(hass)).toBe('running');
  });

  it('defaults to idle when sensor missing', () => {
    const hass = makeHass({});
    expect(getGlobalStatus(hass)).toBe('idle');
  });
});

// ── statusLabel ──────────────────────────────────────────

describe('statusLabel', () => {
  it('returns running with program name', () => {
    expect(statusLabel('running', mockT, 'My Program')).toBe('status.running_program');
  });

  it('returns translated status for idle', () => {
    expect(statusLabel('idle', mockT, null)).toBe('status.idle');
  });

  it('falls back to idle for unknown status', () => {
    const t: Translator = (key) => key;
    expect(statusLabel('banana', t, null)).toBe('status.idle');
  });
});

// ── formatSchedule ───────────────────────────────────────

describe('formatSchedule', () => {
  it('formats daily schedule', () => {
    const schedule: ProgramSchedule = { type: 'daily', time: '22:00' };
    expect(formatSchedule(schedule, mockT)).toBe('schedule.daily');
  });

  it('formats every_n_days schedule', () => {
    const schedule: ProgramSchedule = { type: 'every_n_days', time: '22:00', n: 3 };
    expect(formatSchedule(schedule, mockT)).toBe('schedule.every_n_days');
  });

  it('formats weekdays schedule', () => {
    const schedule: ProgramSchedule = {
      type: 'weekdays',
      time: '22:00',
      days: ['mon', 'wed', 'fri'],
    };
    expect(formatSchedule(schedule, mockT)).toBe('schedule.weekdays');
  });

  it('returns empty string for undefined', () => {
    expect(formatSchedule(undefined, mockT)).toBe('');
  });
});

// ── formatRelative ───────────────────────────────────────

describe('formatRelative', () => {
  it('returns time.never for missing entity', () => {
    const hass = makeHass({});
    expect(formatRelative(hass, 'sensor.wateringhub_last_run', mockT)).toBe('time.never');
  });

  it('returns time.never for unknown state', () => {
    const hass = makeHass({ 'sensor.wateringhub_last_run': { state: 'unknown' } });
    expect(formatRelative(hass, 'sensor.wateringhub_last_run', mockT)).toBe('time.never');
  });

  it('returns time.never for None state', () => {
    const hass = makeHass({ 'sensor.wateringhub_last_run': { state: 'None' } });
    expect(formatRelative(hass, 'sensor.wateringhub_last_run', mockT)).toBe('time.never');
  });

  it('returns raw state for invalid date', () => {
    const hass = makeHass({ 'sensor.wateringhub_last_run': { state: 'not-a-date' } });
    expect(formatRelative(hass, 'sensor.wateringhub_last_run', mockT)).toBe('not-a-date');
  });

  it('returns time.just_now for recent past', () => {
    const now = new Date();
    const hass = makeHass({ 'sensor.wateringhub_last_run': { state: now.toISOString() } });
    expect(formatRelative(hass, 'sensor.wateringhub_last_run', mockT)).toBe('time.just_now');
  });

  it('returns minutes ago for past within hour', () => {
    const date = new Date(Date.now() - 15 * 60 * 1000);
    const hass = makeHass({ 'sensor.wateringhub_last_run': { state: date.toISOString() } });
    expect(formatRelative(hass, 'sensor.wateringhub_last_run', mockT)).toBe('time.minutes_ago');
  });

  it('returns hours ago for past within day', () => {
    const date = new Date(Date.now() - 3 * 60 * 60 * 1000);
    const hass = makeHass({ 'sensor.wateringhub_last_run': { state: date.toISOString() } });
    expect(formatRelative(hass, 'sensor.wateringhub_last_run', mockT)).toBe('time.hours_ago');
  });

  it('returns days ago for older dates', () => {
    const date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
    const hass = makeHass({ 'sensor.wateringhub_last_run': { state: date.toISOString() } });
    expect(formatRelative(hass, 'sensor.wateringhub_last_run', mockT)).toBe('time.days_ago');
  });

  it('returns today_at for future within 24h', () => {
    const date = new Date(Date.now() + 3 * 60 * 60 * 1000);
    const hass = makeHass({ 'sensor.wateringhub_next_run': { state: date.toISOString() } });
    expect(formatRelative(hass, 'sensor.wateringhub_next_run', mockT)).toContain('time.today_at');
  });

  it('returns in_days for future beyond tomorrow', () => {
    const date = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
    const hass = makeHass({ 'sensor.wateringhub_next_run': { state: date.toISOString() } });
    expect(formatRelative(hass, 'sensor.wateringhub_next_run', mockT)).toBe('time.in_days');
  });
});

// ── formatNextRun ────────────────────────────────────────

describe('formatNextRun', () => {
  it('returns no_schedule for missing entity', () => {
    const hass = makeHass({});
    expect(formatNextRun(hass, mockT)).toBe('time.no_schedule');
  });

  it('returns no_schedule for unknown state', () => {
    const hass = makeHass({ 'sensor.wateringhub_next_run': { state: 'unknown' } });
    expect(formatNextRun(hass, mockT)).toBe('time.no_schedule');
  });

  it('returns formatted date for valid state', () => {
    const date = new Date(Date.now() + 3 * 60 * 60 * 1000);
    const hass = makeHass({ 'sensor.wateringhub_next_run': { state: date.toISOString() } });
    expect(formatNextRun(hass, mockT)).toContain('time.today_at');
  });
});
