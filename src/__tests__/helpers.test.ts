import type { Hass, Translator, ProgramSchedule } from '../shared/types';
import {
  discoverPrograms,
  getActiveProgramName,
  getGlobalStatus,
  getErrorInfo,
  getRunningInfo,
  formatRemainingTime,
  statusLabel,
  formatSchedule,
  formatRelative,
  formatNextRun,
  getSkipInfo,
  formatSkipBadge,
} from '../shared/helpers';

// ── Mock helpers ─────────────────────────────────────────

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
  it('renders a single time via schedule.at_one', () => {
    const schedule: ProgramSchedule = { times: ['22:00'] };
    expect(formatSchedule(schedule, mockT)).toBe('schedule.at_one');
  });

  it('renders multiple times sorted via schedule.at_many', () => {
    const schedule: ProgramSchedule = { times: ['18:00', '06:00', '12:00'] };
    expect(formatSchedule(schedule, mockT)).toBe('schedule.at_many');
  });

  it('returns empty string for undefined', () => {
    expect(formatSchedule(undefined, mockT)).toBe('');
  });

  it('returns empty string for empty times', () => {
    const schedule: ProgramSchedule = { times: [] };
    expect(formatSchedule(schedule, mockT)).toBe('');
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

  it('returns today_at for future same day', () => {
    // Create a date later today (set to 23:59 today)
    const date = new Date();
    date.setHours(23, 59, 0, 0);
    if (date.getTime() <= Date.now()) {
      // If it's already past 23:59, skip gracefully
      return;
    }
    const hass = makeHass({ 'sensor.wateringhub_next_run': { state: date.toISOString() } });
    expect(formatRelative(hass, 'sensor.wateringhub_next_run', mockT)).toContain('time.today_at');
  });

  it('returns tomorrow_at for future next day', () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(12, 0, 0, 0);
    const hass = makeHass({ 'sensor.wateringhub_next_run': { state: date.toISOString() } });
    expect(formatRelative(hass, 'sensor.wateringhub_next_run', mockT)).toContain(
      'time.tomorrow_at',
    );
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

  it('returns formatted date for valid future state', () => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(12, 0, 0, 0);
    const hass = makeHass({ 'sensor.wateringhub_next_run': { state: date.toISOString() } });
    expect(formatNextRun(hass, mockT)).toContain('time.tomorrow_at');
  });
});

// ── formatRemainingTime ──────────────────────────────────

describe('formatRemainingTime', () => {
  it('formats 90 seconds as 1:30', () => {
    expect(formatRemainingTime(90)).toBe('1:30');
  });

  it('formats 3661 seconds as 1:01:01', () => {
    expect(formatRemainingTime(3661)).toBe('1:01:01');
  });

  it('formats 0 as 0:00', () => {
    expect(formatRemainingTime(0)).toBe('0:00');
  });

  it('formats negative value as 0:00', () => {
    expect(formatRemainingTime(-10)).toBe('0:00');
  });

  it('formats 59 seconds as 0:59', () => {
    expect(formatRemainingTime(59)).toBe('0:59');
  });

  it('formats 3600 seconds as 1:00:00', () => {
    expect(formatRemainingTime(3600)).toBe('1:00:00');
  });
});

// ── getRunningInfo ───────────────────────────────────────

describe('getRunningInfo', () => {
  it('returns null when status is idle', () => {
    const hass = makeHass({ 'sensor.wateringhub_status': { state: 'idle' } });
    expect(getRunningInfo(hass)).toBeNull();
  });

  it('returns null when status entity missing', () => {
    const hass = makeHass({});
    expect(getRunningInfo(hass)).toBeNull();
  });

  it('returns running info when status is running', () => {
    const hass = makeHass({
      'sensor.wateringhub_status': {
        state: 'running',
        attributes: {
          current_program: 'prog_quotidien',
          valves_done: 0,
          valves_total: 2,
          progress_percent: 0,
          active_valves: [
            {
              water_supply_id: 'supply_a',
              valve_id: 'v1',
              valve_name: 'Oscillant Cedre',
              valve_start: new Date(Date.now() - 60 * 1000).toISOString(),
              valve_duration: 900,
            },
          ],
          valves_sequence: [
            {
              valve_id: 'v1',
              valve_name: 'Oscillant Cedre',
              zone_id: 'z1',
              zone_name: 'Jardin',
              duration: 900,
              status: 'running',
              water_supply_id: 'supply_a',
              start: new Date(Date.now() - 60 * 1000).toISOString(),
            },
            {
              valve_id: 'v2',
              valve_name: 'Goutteur',
              zone_id: 'z1',
              zone_name: 'Jardin',
              duration: 600,
              status: 'pending',
              water_supply_id: 'supply_a',
            },
          ],
        },
      },
    });
    const info = getRunningInfo(hass);
    expect(info).not.toBeNull();
    expect(info!.programName).toBe('prog_quotidien');
    expect(info!.valvesDone).toBe(0);
    expect(info!.valvesTotal).toBe(2);
    expect(info!.activeValves).toHaveLength(1);
    expect(info!.activeValves[0].valve_name).toBe('Oscillant Cedre');
    expect(info!.totalRemaining).toBeGreaterThan(0);
  });

  it('handles missing attributes gracefully', () => {
    const hass = makeHass({
      'sensor.wateringhub_status': {
        state: 'running',
        attributes: {
          active_valves: [],
          valves_sequence: [],
        },
      },
    });
    const info = getRunningInfo(hass);
    expect(info).not.toBeNull();
    expect(info!.programName).toBe('');
    expect(info!.totalRemaining).toBe(0);
    expect(info!.valvesTotal).toBe(1);
    expect(info!.activeValves).toHaveLength(0);
  });
});

// ── getErrorInfo ─────────────────────────────────────────

describe('getErrorInfo', () => {
  it('returns null when status is idle', () => {
    const hass = makeHass({ 'sensor.wateringhub_status': { state: 'idle' } });
    expect(getErrorInfo(hass)).toBeNull();
  });

  it('returns null when status is running', () => {
    const hass = makeHass({ 'sensor.wateringhub_status': { state: 'running' } });
    expect(getErrorInfo(hass)).toBeNull();
  });

  it('returns error info with program friendly name', () => {
    const hass = makeHass({
      'sensor.wateringhub_status': {
        state: 'error',
        attributes: {
          current_program: 'prog_quotidien',
          error_message: 'Device unavailable: switch.fake_valve_1',
        },
      },
      'switch.wateringhub_prog_quotidien': {
        state: 'off',
        attributes: { friendly_name: 'Arrosage quotidien' },
      },
    });
    const info = getErrorInfo(hass);
    expect(info).not.toBeNull();
    expect(info!.programName).toBe('Arrosage quotidien');
    expect(info!.errorMessage).toBe('Device unavailable: switch.fake_valve_1');
  });

  it('falls back to program id when switch not found', () => {
    const hass = makeHass({
      'sensor.wateringhub_status': {
        state: 'error',
        attributes: {
          current_program: 'prog_unknown',
          error_message: 'Some error',
        },
      },
    });
    const info = getErrorInfo(hass);
    expect(info).not.toBeNull();
    expect(info!.programName).toBe('prog_unknown');
  });

  it('handles missing attributes gracefully', () => {
    const hass = makeHass({
      'sensor.wateringhub_status': {
        state: 'error',
        attributes: {},
      },
    });
    const info = getErrorInfo(hass);
    expect(info).not.toBeNull();
    expect(info!.programName).toBe('');
    expect(info!.errorMessage).toBe('');
  });
});

// ── getSkipInfo ─────────────────────────────────────────

describe('getSkipInfo', () => {
  function makeEntity(skipUntil: unknown) {
    return {
      entity_id: 'switch.wateringhub_test',
      state: 'on',
      attributes: { skip_until: skipUntil },
    };
  }

  function toLocalDateStr(d: Date): string {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  it('returns null when skip_until is not set', () => {
    const entity = { entity_id: 'switch.wateringhub_test', state: 'on', attributes: {} };
    expect(getSkipInfo(entity)).toBeNull();
  });

  it('returns null when skip_until is null', () => {
    expect(getSkipInfo(makeEntity(null))).toBeNull();
  });

  it('returns null when skip_until is an invalid date', () => {
    expect(getSkipInfo(makeEntity('not-a-date'))).toBeNull();
  });

  it('returns null when skip_until is in the past', () => {
    const past = new Date();
    past.setDate(past.getDate() - 2);
    expect(getSkipInfo(makeEntity(toLocalDateStr(past)))).toBeNull();
  });

  it('returns skip info for a future date', () => {
    const future = new Date();
    future.setDate(future.getDate() + 3);
    const dateStr = toLocalDateStr(future);
    const info = getSkipInfo(makeEntity(dateStr));
    expect(info).not.toBeNull();
    expect(info!.isSkipped).toBe(true);
    expect(info!.daysRemaining).toBe(3);
    expect(info!.skipUntil).toBe(dateStr);
  });

  it('returns daysRemaining=1 for tomorrow', () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const info = getSkipInfo(makeEntity(toLocalDateStr(tomorrow)));
    expect(info).not.toBeNull();
    expect(info!.daysRemaining).toBe(1);
  });

  it('returns skip info for today (valid until end of day)', () => {
    const today = new Date();
    const info = getSkipInfo(makeEntity(toLocalDateStr(today)));
    expect(info).not.toBeNull();
    expect(info!.daysRemaining).toBeGreaterThanOrEqual(1);
  });
});

// ── formatSkipBadge ─────────────────────────────────────

describe('formatSkipBadge', () => {
  it('formats 1 day', () => {
    expect(formatSkipBadge(1, mockT)).toBe('skip.active');
  });

  it('formats multiple days', () => {
    expect(formatSkipBadge(3, mockT)).toBe('skip.active');
  });
});
