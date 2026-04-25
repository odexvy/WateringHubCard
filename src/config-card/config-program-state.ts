import type {
  AvailableValve,
  HassEntity,
  ProgramFormState,
  ProgramSchedule,
  ProgramValveForm,
  ValveFrequency,
} from '../shared/types';

// ── Hydrate / serialize ───────────────────────────────────

export function programFormFromEntity(entity: HassEntity): ProgramFormState {
  const attrs = entity.attributes;
  const programId = (attrs.program_id as string) ?? '';
  const rawSchedule = attrs.schedule as ProgramSchedule | undefined;
  const zones = (
    (attrs.zones as Array<{
      zone_id: string;
      valves: Array<{
        valve_id: string;
        duration: number;
        frequency?: ValveFrequency;
        times?: string[];
      }>;
    }>) ?? []
  ).map((z) => ({
    zone_id: z.zone_id,
    valves: z.valves.map((v) => ({
      valve_id: v.valve_id,
      duration: v.duration,
      frequency: v.frequency,
      times: v.times,
    })),
  }));
  return {
    id: programId,
    name: typeof attrs.friendly_name === 'string' ? attrs.friendly_name : programId,
    schedule: { times: rawSchedule?.times ?? ['06:00'] },
    zones,
    dry_run: attrs.dry_run === true,
    isNew: false,
  };
}

export interface ProgramServicePayload {
  id: string;
  name: string;
  schedule: ProgramSchedule;
  dry_run: boolean;
  zones: Array<{
    zone_id: string;
    valves: Array<{
      valve_id: string;
      duration: number;
      frequency?: ValveFrequency;
      times?: string[];
    }>;
  }>;
}

export function programToServicePayload(form: ProgramFormState, id: string): ProgramServicePayload {
  const sortedTimes = [...form.schedule.times].sort((a, b) => a.localeCompare(b));
  return {
    id,
    name: form.name,
    schedule: { times: sortedTimes },
    dry_run: form.dry_run,
    zones: form.zones.map((z) => ({
      zone_id: z.zone_id,
      valves: z.valves.map((v) => ({
        valve_id: v.valve_id,
        duration: v.duration,
        ...(v.frequency ? { frequency: v.frequency } : {}),
        ...(v.times && v.times.length > 0 && v.times.length < sortedTimes.length
          ? { times: [...v.times].sort((a, b) => a.localeCompare(b)) }
          : {}),
      })),
    })),
  };
}

export function hasEmptyCustomTimes(form: ProgramFormState): boolean {
  return form.zones.some((z) => z.valves.some((v) => v.times?.length === 0));
}

// ── In-form transitions ───────────────────────────────────

// Pure state-transition helpers for the program form.
// All return new ProgramFormState; never mutate the input.

export function countActiveValvesAtSlot(form: ProgramFormState, slot: string): number {
  return form.zones.reduce(
    (acc, z) =>
      acc + z.valves.filter((v) => v.times === undefined || v.times.includes(slot)).length,
    0,
  );
}

export function applyScheduleTimes(form: ProgramFormState, newTimes: string[]): ProgramFormState {
  const allowed = new Set(newTimes);
  const zones = form.zones
    .map((z) => ({
      ...z,
      valves: z.valves
        .map((v) => {
          if (v.times === undefined) return v;
          return { ...v, times: v.times.filter((t) => allowed.has(t)) };
        })
        .filter((v) => v.times === undefined || v.times.length > 0),
    }))
    .filter((z) => z.valves.length > 0);
  return { ...form, schedule: { times: newTimes }, zones };
}

export function toggleValveAtSlot(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
  slot: string,
  defaultDuration = 10,
): ProgramFormState {
  const scheduleTimes = form.schedule.times;
  const formZone = form.zones.find((z) => z.zone_id === zoneId);
  const formValve = formZone?.valves.find((v) => v.valve_id === valveId);
  const isActiveAtSlot = !!(
    formValve &&
    (formValve.times === undefined || formValve.times.includes(slot))
  );

  if (isActiveAtSlot && formValve) {
    const currentTimes = formValve.times ?? [...scheduleTimes];
    const newTimes = currentTimes.filter((t) => t !== slot);
    if (newTimes.length === 0) return removeValve(form, zoneId, valveId);
    return updateValve(form, zoneId, valveId, { times: newTimes });
  }
  if (!formValve) {
    return addValve(form, zoneId, {
      valve_id: valveId,
      duration: defaultDuration,
      times: [slot],
    });
  }
  const newTimes = [...(formValve.times ?? []), slot];
  if (newTimes.length >= scheduleTimes.length) {
    return updateValve(form, zoneId, valveId, { times: undefined });
  }
  return updateValve(form, zoneId, valveId, { times: newTimes });
}

export function setValveDuration(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
  duration: number,
): ProgramFormState {
  return updateValve(form, zoneId, valveId, { duration });
}

export function updateValve(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
  patch: Partial<ProgramValveForm>,
): ProgramFormState {
  return {
    ...form,
    zones: form.zones.map((z) =>
      z.zone_id === zoneId
        ? { ...z, valves: z.valves.map((v) => (v.valve_id === valveId ? { ...v, ...patch } : v)) }
        : z,
    ),
  };
}

export function addValve(
  form: ProgramFormState,
  zoneId: string,
  valve: ProgramValveForm,
): ProgramFormState {
  const hasZone = form.zones.some((z) => z.zone_id === zoneId);
  const zones = hasZone
    ? form.zones.map((z) => (z.zone_id === zoneId ? { ...z, valves: [...z.valves, valve] } : z))
    : [...form.zones, { zone_id: zoneId, valves: [valve] }];
  return { ...form, zones };
}

export function removeValve(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
): ProgramFormState {
  const zones = form.zones
    .map((z) =>
      z.zone_id === zoneId ? { ...z, valves: z.valves.filter((v) => v.valve_id !== valveId) } : z,
    )
    .filter((z) => z.valves.length > 0);
  return { ...form, zones };
}

export function moveValveInZone(
  form: ProgramFormState,
  zoneId: string,
  valveId: string,
  dir: -1 | 1,
): ProgramFormState {
  return {
    ...form,
    zones: form.zones.map((z) => {
      if (z.zone_id !== zoneId) return z;
      const idx = z.valves.findIndex((v) => v.valve_id === valveId);
      const newIdx = idx + dir;
      if (idx < 0 || newIdx < 0 || newIdx >= z.valves.length) return z;
      const arr = [...z.valves];
      [arr[idx], arr[newIdx]] = [arr[newIdx], arr[idx]];
      return { ...z, valves: arr };
    }),
  };
}

// Order: valves in form.zones (active, in program order) first, inactive after.
export function orderZoneValves(
  zoneId: string,
  valves: AvailableValve[],
  form: ProgramFormState,
): AvailableValve[] {
  const zoneValves = valves.filter((v) => v.zone_id === zoneId);
  const formZone = form.zones.find((z) => z.zone_id === zoneId);
  if (!formZone) return zoneValves;
  const formOrder = formZone.valves
    .map((fv) => zoneValves.find((v) => v.id === fv.valve_id))
    .filter((v): v is AvailableValve => !!v);
  const activeIds = new Set(formOrder.map((v) => v.id));
  const inactive = zoneValves.filter((v) => !activeIds.has(v.id));
  return [...formOrder, ...inactive];
}
