# set_valves Zone Assignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Centralize valve→zone and valve→water_supply assignment in the Valves tab. Simplify Zones and Water Supplies tabs to name-only CRUD. Add hint text per tab. Adapt to backend v0.0.23.

**Architecture:** Modify types (AvailableValve +zone_id, ZoneConfig -valves, ZoneFormState -valves, water_supply_id nullable). Rewrite valves tab with dropdowns. Simplify zones tab (remove checkboxes). Simplify editor (remove water_supply dropdown). Add getValvesForZone helper for programs tab. Add hint text to all tabs.

**Tech Stack:** LitElement, TypeScript, tagged template literals

---

## File Structure

| File | Action | Change |
|------|--------|--------|
| `src/shared/types.ts` | Modify | AvailableValve: +zone_id nullable, water_supply_id nullable. ZoneConfig: -valves[]. ZoneFormState: -valves[] |
| `src/shared/i18n/en.json` | Modify | Add 4 hint keys + config.none key |
| `src/shared/i18n/fr.json` | Modify | Same |
| `src/config-card/config-helpers.ts` | Modify | Add getValvesForZone() |
| `src/config-card/config-zones-tab.ts` | Rewrite | Name-only CRUD, derive valve list from available_valves |
| `src/config-card/config-water-supplies-tab.ts` | Modify | Derive valve list, simplify delete |
| `src/config-card/config-valves-tab.ts` | Rewrite | Dropdowns zone + water_supply per valve |
| `src/config-card/config-editor.ts` | Simplify | Remove water_supply dropdown, remove _changeValveSupply |
| `src/config-card/config-programs-tab.ts` | Modify | Use getValvesForZone instead of zone.valves |
| `src/config-card/config-templates.ts` | Modify | Add hint text support |
| `src/config-card/wateringhub-config-card.ts` | Modify | Simplify zone CRUD (-valves), simplify water supply delete |
| `mockup/index.html` | Rewrite config sections | Updated mockups |

---

### Task 1: Types + i18n + helpers

**Files:**
- Modify: `src/shared/types.ts`
- Modify: `src/shared/i18n/en.json`, `src/shared/i18n/fr.json`
- Modify: `src/config-card/config-helpers.ts`

- [ ] **Step 1: Modify AvailableValve — add zone_id, make both nullable**

In `src/shared/types.ts`:

```typescript
export interface AvailableValve {
  id: string;
  name: string;
  entity_id: string;
  water_supply_id: string | null;
  zone_id: string | null;
}
```

- [ ] **Step 2: Modify ZoneConfig — remove valves[]**

```typescript
export interface ZoneConfig {
  id: string;
  name: string;
}
```

- [ ] **Step 3: Modify ZoneFormState — remove valves[]**

```typescript
export interface ZoneFormState {
  id: string;
  name: string;
  isNew: boolean;
}
```

- [ ] **Step 4: Add i18n keys**

In `en.json`:
```json
"config.hint_programs": "Create watering programs with a schedule and zones.",
"config.hint_zones": "Group your valves by logical zone.",
"config.hint_water_supplies": "Define your water supplies to enable parallel execution.",
"config.hint_valves": "Configure your valves and assign them to a zone and water supply.",
"config.none": "None"
```

In `fr.json`:
```json
"config.hint_programs": "Créez des programmes d'arrosage avec un horaire et des zones.",
"config.hint_zones": "Regroupez vos vannes par zone logique.",
"config.hint_water_supplies": "Définissez vos arrivées d'eau pour activer le parallélisme.",
"config.hint_valves": "Configurez vos vannes et assignez-les à une zone et une arrivée d'eau.",
"config.none": "Aucun"
```

- [ ] **Step 5: Add getValvesForZone helper**

In `src/config-card/config-helpers.ts`:

```typescript
export function getValvesForZone(zoneId: string, valves: AvailableValve[]): AvailableValve[] {
  return valves.filter((v) => v.zone_id === zoneId);
}
```

- [ ] **Step 6: Verify**

Run: `yarn typecheck` — will have errors in zones-tab, programs-tab (expected, fixed in later tasks).

---

### Task 2: Simplify zones tab — name-only CRUD

**Files:**
- Rewrite: `src/config-card/config-zones-tab.ts`

- [ ] **Step 1: Rewrite zones tab**

Remove checkboxes, derive valve names from available_valves:

```typescript
import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, ZoneConfig, ZoneFormState } from '../shared/types';
import { getAvailableValves, getZones } from './config-helpers';
import {
  renderListItem,
  renderFormRow,
  renderFormActions,
  renderAddButton,
} from '../shared/shared-templates';

export function renderZonesTab(
  hass: Hass,
  editingZone: ZoneFormState | null,
  onEdit: (zone: ZoneConfig) => void,
  onDelete: (zoneId: string) => void,
  onNew: () => void,
  onSave: (form: ZoneFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ZoneFormState) => void,
  t: Translator,
): TemplateResult {
  const zones = getZones(hass);
  const valves = getAvailableValves(hass);

  return html`
    <div class="form-hint">${t('config.hint_zones')}</div>
    ${zones.map((zone) =>
      editingZone?.id === zone.id
        ? renderZoneForm(editingZone, onSave, onCancel, onFormUpdate, t)
        : renderZoneItem(zone, valves, onEdit, onDelete, t),
    )}
    ${editingZone?.isNew
      ? renderZoneForm(editingZone, onSave, onCancel, onFormUpdate, t)
      : nothing}
    ${editingZone ? nothing : renderAddButton(`+ ${t('config.new_zone')}`, onNew)}
    ${zones.length === 0 && !editingZone
      ? html`<div class="empty-state">${t('config.no_zones')}</div>`
      : nothing}
  `;
}

function renderZoneItem(
  zone: ZoneConfig,
  valves: { id: string; name: string; zone_id: string | null }[],
  onEdit: (zone: ZoneConfig) => void,
  onDelete: (zoneId: string) => void,
  t: Translator,
): TemplateResult {
  const zoneValves = valves.filter((v) => v.zone_id === zone.id);
  const valveNames = zoneValves.map((v) => v.name).join(', ') || '—';

  return renderListItem(
    zone.name,
    valveNames,
    () => onEdit(zone),
    () => onDelete(zone.id),
    t,
  );
}

function renderZoneForm(
  form: ZoneFormState,
  onSave: (form: ZoneFormState) => void,
  onCancel: () => void,
  onFormUpdate: (form: ZoneFormState) => void,
  t: Translator,
): TemplateResult {
  return html`
    <div class="inline-form">
      ${renderFormRow(
        t('config.name'),
        html`<input
          class="form-input"
          .value=${form.name}
          @input=${(e: InputEvent) =>
            onFormUpdate({ ...form, name: (e.target as HTMLInputElement).value })}
        />`,
      )}
      ${renderFormActions(onCancel, () => onSave(form), t)}
    </div>
  `;
}
```

- [ ] **Step 2: Verify**

Run: `yarn typecheck`

---

### Task 3: Simplify wateringhub-config-card zone CRUD

**Files:**
- Modify: `src/config-card/wateringhub-config-card.ts`

- [ ] **Step 1: Simplify zone CRUD handlers**

Remove `valves` from zone operations:

`_newZone`: `{ id: '', name: '', isNew: true }` (no valves)
`_editZone`: `{ id: zone.id, name: zone.name, isNew: false }` (no valves)
`_saveZone`: remove `valves: form.valves` from service call params

`_deleteZone`: remove try/catch, delete always succeeds now.

`_deleteWaterSupply`: same — remove try/catch, delete always succeeds.

- [ ] **Step 2: Verify**

Run: `yarn typecheck`

---

### Task 4: Rewrite valves tab — dropdowns zone + water_supply

**Files:**
- Rewrite: `src/config-card/config-valves-tab.ts`

- [ ] **Step 1: Rewrite with dropdowns**

```typescript
import { html, nothing, TemplateResult } from 'lit';
import type { Hass, Translator, AvailableValve } from '../shared/types';
import { getAvailableValves, getZones, getWaterSupplies } from './config-helpers';
import { renderIconButton } from '../shared/shared-templates';

export function renderValvesTab(
  hass: Hass,
  onChangeValve: (entityId: string, field: 'zone_id' | 'water_supply_id', value: string | null) => void,
  onDeleteValve: (entityId: string) => void,
  t: Translator,
): TemplateResult {
  const valves = getAvailableValves(hass);
  const zones = getZones(hass);
  const supplies = getWaterSupplies(hass);

  if (valves.length === 0) {
    return html`
      <div class="form-hint">${t('config.hint_valves')}</div>
      <div class="empty-state">${t('config.no_valves')}</div>
    `;
  }

  return html`
    <div class="form-hint">${t('config.hint_valves')}</div>
    ${valves.map((v) => {
      const zoneName = zones.find((z) => z.id === v.zone_id)?.name ?? t('config.none');
      const supplyName = supplies.find((s) => s.id === v.water_supply_id)?.name ?? t('config.none');

      return html`
        <div class="list-item">
          <div class="list-item-header">
            <div style="flex:1">
              <div class="list-item-name">${v.name}</div>
              <div class="list-item-sub">${v.entity_id}</div>
              <div style="display:flex; gap:8px; margin-top:8px; flex-wrap:wrap;">
                <select
                  class="form-select"
                  style="flex:1; min-width:120px;"
                  .value=${v.zone_id ?? ''}
                  @change=${(e: Event) => {
                    const val = (e.target as HTMLSelectElement).value;
                    onChangeValve(v.entity_id, 'zone_id', val || null);
                  }}
                >
                  <option value="">${t('config.none')}</option>
                  ${zones.map((z) => html`<option value=${z.id}>${z.name}</option>`)}
                </select>
                <select
                  class="form-select"
                  style="flex:1; min-width:120px;"
                  .value=${v.water_supply_id ?? ''}
                  @change=${(e: Event) => {
                    const val = (e.target as HTMLSelectElement).value;
                    onChangeValve(v.entity_id, 'water_supply_id', val || null);
                  }}
                >
                  <option value="">${t('config.none')}</option>
                  ${supplies.map((s) => html`<option value=${s.id}>${s.name}</option>`)}
                </select>
              </div>
            </div>
            ${renderIconButton('mdi:delete', () => onDeleteValve(v.entity_id), {
              title: t('config.delete'),
              className: 'action-btn delete',
            })}
          </div>
        </div>
      `;
    })}
  `;
}
```

- [ ] **Step 2: Wire valves tab into config card**

In `wateringhub-config-card.ts`:

Add handler:
```typescript
private async _changeValve(entityId: string, field: 'zone_id' | 'water_supply_id', value: string | null): Promise<void> {
  const valves = getAvailableValves(this._hass).map((v) => ({
    entity_id: v.entity_id,
    name: v.name,
    water_supply_id: v.entity_id === entityId && field === 'water_supply_id' ? value : v.water_supply_id,
    zone_id: v.entity_id === entityId && field === 'zone_id' ? value : v.zone_id,
  }));
  await this._hass.callService('wateringhub', 'set_valves', { valves });
}

private _deleteValveFromTab(entityId: string): void {
  this._requestConfirm(
    this._t('config.confirm_delete_valve'),
    this._t('config.delete'),
    async () => {
      const valves = getAvailableValves(this._hass)
        .filter((v) => v.entity_id !== entityId)
        .map((v) => ({
          entity_id: v.entity_id,
          name: v.name,
          water_supply_id: v.water_supply_id,
          zone_id: v.zone_id,
        }));
      await this._hass.callService('wateringhub', 'set_valves', { valves });
      this._showToast(this._t('config.deleted'));
    },
  );
}
```

Update render — replace `renderValvesTab(this._hass, this._t)` with:
```typescript
renderValvesTab(
  this._hass,
  (id, field, val) => this._changeValve(id, field, val),
  (id) => this._deleteValveFromTab(id),
  this._t,
)
```

Update import: add `getAvailableValves` from `./config-helpers`.

- [ ] **Step 3: Update config-templates.ts re-export**

The `renderValvesTab` signature changed — no re-export changes needed since it's already re-exported.

- [ ] **Step 4: Verify**

Run: `yarn typecheck && yarn build`

---

### Task 5: Simplify config editor

**Files:**
- Rewrite: `src/config-card/config-editor.ts`

- [ ] **Step 1: Remove water_supply dropdown and _changeValveSupply**

Revert config-editor to simple mode:
- Remove `getWaterSupplies` import
- Remove `_newWaterSupplyId` state
- Remove `_changeValveSupply` method
- Remove water_supply dropdown from add form
- Remove water_supply select from valve list items
- Remove `hasWaterSupplies` / `addValveButton` logic
- `_confirmAdd`: set `water_supply_id: null, zone_id: null` for new valves
- `_deleteValve`: preserve both `water_supply_id` and `zone_id`

The `ValveFormEntry` interface becomes:
```typescript
interface ValveFormEntry {
  entity_id: string;
  name: string;
  water_supply_id: string | null;
  zone_id: string | null;
}
```

- [ ] **Step 2: Verify**

Run: `yarn typecheck && yarn build`

---

### Task 6: Update programs tab — use getValvesForZone

**Files:**
- Modify: `src/config-card/config-programs-tab.ts`

- [ ] **Step 1: Import getValvesForZone**

Add to imports from `./config-helpers`:
```typescript
import { getZones, getAvailableValves, getValvesForZone } from './config-helpers';
```

- [ ] **Step 2: Replace zone.valves references**

In `renderProgramForm`, where the zone checkbox section maps over `zone.valves` to build the initial valve list when selecting a zone, replace with `getValvesForZone(zone.id, valves)`:

The zone selection `@change` handler currently does:
```typescript
valves: zone.valves.map((vid) => ({ valve_id: vid, duration: 10 }))
```

Change to:
```typescript
valves: getValvesForZone(zone.id, valves).map((v) => ({ valve_id: v.id, duration: 10 }))
```

Where `valves` is the `getAvailableValves(hass)` result already available in scope.

- [ ] **Step 3: Verify**

Run: `yarn typecheck && yarn test && yarn build`

---

### Task 7: Add hint text to all tabs

**Files:**
- Modify: `src/config-card/config-water-supplies-tab.ts`
- Modify: `src/config-card/config-programs-tab.ts`

- [ ] **Step 1: Add hint to water supplies tab**

At the top of the return html in `renderWaterSuppliesTab`, add:
```html
<div class="form-hint">${t('config.hint_water_supplies')}</div>
```

- [ ] **Step 2: Add hint to programs tab**

At the top of the return html in `renderProgramsTab`, add:
```html
<div class="form-hint">${t('config.hint_programs')}</div>
```

Note: Zones tab and Valves tab already have hints from Tasks 2 and 4.

- [ ] **Step 3: Verify**

Run: `yarn typecheck && yarn test && yarn build`

---

### Task 8: Update mockup + docs + verify

**Files:**
- Modify: `mockup/index.html`
- Modify: `docs/PROJECT_STATUS.md`
- Modify: `CLAUDE.md`

- [ ] **Step 1: Update mockup**

Update config card mockups:
- Onglet Zones: name-only list, no checkboxes in form, hint text
- Onglet Vannes: dropdowns zone + arrivée per valve, hint text
- Onglet Arrivées d'eau: hint text
- Onglet Programmes: hint text
- All tabs show 4 tabs: Programmes | Zones | Arrivées d'eau | Vannes

- [ ] **Step 2: Update PROJECT_STATUS.md**

- Update services table (zones simplified, set_valves with zone_id)
- Update entities table (zones without valves, available_valves with zone_id)
- Add decision #29: valve-centric assignment

- [ ] **Step 3: Full verification**

Run: `yarn typecheck && yarn test && yarn build`

Expected: 77 tests pass, bundle builds.
