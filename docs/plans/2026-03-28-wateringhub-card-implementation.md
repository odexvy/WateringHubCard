# WateringHub Card Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a custom Home Assistant card (LitElement + TypeScript) that auto-discovers `wateringhub_*` entities and provides a complete watering management UI.

**Architecture:** LitElement custom element registered as `wateringhub-card`. Main card component orchestrates child components (program-row, running-view, emergency-stop). Entity discovery utility scans `hass.states` and groups entities by program/valve. i18n via JSON files with FR/EN support.

**Tech Stack:** LitElement (lit), TypeScript, esbuild (bundler), HACS-compatible packaging.

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `hacs.json`
- Create: `LICENSE`
- Create: `.gitignore`

**Step 1: Create `package.json`**

```json
{
  "name": "wateringhub-card",
  "version": "0.0.1",
  "description": "Custom Home Assistant card for WateringHub",
  "scripts": {
    "build": "esbuild src/wateringhub-card.ts --bundle --outfile=dist/wateringhub-card.js --format=esm",
    "watch": "esbuild src/wateringhub-card.ts --bundle --outfile=dist/wateringhub-card.js --format=esm --watch"
  },
  "devDependencies": {
    "esbuild": "latest",
    "lit": "latest"
  },
  "license": "MIT"
}
```

**Step 2: Create `tsconfig.json`**

```json
{
  "compilerOptions": {
    "target": "ES2021",
    "module": "ESNext",
    "moduleResolution": "node",
    "strict": true,
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "declaration": false,
    "sourceMap": false,
    "outDir": "./dist",
    "rootDir": "./src",
    "lib": ["ES2021", "DOM", "DOM.Iterable"]
  },
  "include": ["src/**/*.ts"]
}
```

Note: `useDefineForClassFields: false` is required for LitElement decorators to work correctly.

**Step 3: Create `hacs.json`**

```json
{
  "name": "WateringHub Card",
  "render_readme": true
}
```

**Step 4: Create `LICENSE`**

Standard MIT license text with "2026 WateringHub contributors".

**Step 5: Create `.gitignore`**

```
node_modules/
```

Note: Do NOT add `dist/` — HACS needs the built file committed.

**Step 6: Install dependencies**

Run: `npm install`
Expected: `node_modules/` created, `package-lock.json` generated.

**Step 7: Commit**

```bash
git add package.json tsconfig.json hacs.json LICENSE .gitignore package-lock.json
git commit -m "chore: project scaffolding with esbuild + lit"
```

---

### Task 2: i18n System

**Files:**
- Create: `src/i18n/en.json`
- Create: `src/i18n/fr.json`
- Create: `src/i18n/index.ts`

**Step 1: Create `src/i18n/en.json`**

```json
{
  "status": {
    "idle": "Waiting",
    "running": "Watering in progress",
    "disabled": "Disabled"
  },
  "program": {
    "next_run": "Next run",
    "last_run": "Last run",
    "no_programs": "No programs found",
    "enabled": "Enabled",
    "disabled": "Disabled"
  },
  "running": {
    "current_program": "Running program",
    "active_valve": "Active valve",
    "flow_rate": "Flow rate",
    "progress": "Progress",
    "valve_of": "of"
  },
  "emergency": {
    "stop_all": "Emergency Stop",
    "confirm": "Stop all watering?"
  },
  "time": {
    "today_at": "today at {time}",
    "tomorrow_at": "tomorrow at {time}",
    "in_days": "in {count} days",
    "ago_minutes": "{count} min ago",
    "ago_hours": "{count}h ago",
    "ago_days": "{count} days ago",
    "never": "Never",
    "now": "Now"
  }
}
```

**Step 2: Create `src/i18n/fr.json`**

```json
{
  "status": {
    "idle": "En attente",
    "running": "Arrosage en cours",
    "disabled": "Desactive"
  },
  "program": {
    "next_run": "Prochain arrosage",
    "last_run": "Dernier arrosage",
    "no_programs": "Aucun programme trouve",
    "enabled": "Active",
    "disabled": "Desactive"
  },
  "running": {
    "current_program": "Programme en cours",
    "active_valve": "Vanne active",
    "flow_rate": "Debit",
    "progress": "Progression",
    "valve_of": "sur"
  },
  "emergency": {
    "stop_all": "Arret d'urgence",
    "confirm": "Arreter tout l'arrosage ?"
  },
  "time": {
    "today_at": "aujourd'hui a {time}",
    "tomorrow_at": "demain a {time}",
    "in_days": "dans {count} jours",
    "ago_minutes": "il y a {count} min",
    "ago_hours": "il y a {count}h",
    "ago_days": "il y a {count} jours",
    "never": "Jamais",
    "now": "Maintenant"
  }
}
```

**Step 3: Create `src/i18n/index.ts`**

```typescript
import en from './en.json';
import fr from './fr.json';

type Translations = typeof en;

const translations: Record<string, Translations> = { en, fr };

export function getTranslator(hassLanguage: string): (key: string, params?: Record<string, string | number>) => string {
  const lang = hassLanguage?.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  const dict = translations[lang] ?? translations['en'];

  return (key: string, params?: Record<string, string | number>): string => {
    const keys = key.split('.');
    let value: unknown = dict;
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    if (typeof value !== 'string') return key;
    if (!params) return value;
    return value.replace(/\{(\w+)\}/g, (_, k) => String(params[k] ?? _));
  };
}
```

**Step 4: Commit**

```bash
git add src/i18n/
git commit -m "feat: add i18n system with FR/EN translations"
```

---

### Task 3: Utility — Entity Finder

**Files:**
- Create: `src/utils/entity-finder.ts`

**Step 1: Create `src/utils/entity-finder.ts`**

This utility scans `hass.states` and groups entities by program and valve.

```typescript
// Types for Home Assistant state objects
interface HassState {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

interface HassStates {
  [entity_id: string]: HassState;
}

export interface ProgramInfo {
  id: string;                          // e.g. "prog_quotidien"
  switchEntity: string;                // e.g. "switch.wateringhub_prog_quotidien"
  statusEntity: string | null;         // e.g. "sensor.wateringhub_prog_quotidien_status"
  nextRunEntity: string | null;        // e.g. "sensor.wateringhub_prog_quotidien_next_run"
  lastRunEntity: string | null;        // e.g. "sensor.wateringhub_prog_quotidien_last_run"
  name: string;                        // friendly_name from switch attributes
  isEnabled: boolean;                  // switch state === 'on'
  status: string;                      // 'idle' | 'running' | 'disabled'
  nextRun: string | null;             // ISO datetime string
  lastRun: string | null;             // ISO datetime string
}

export interface ValveInfo {
  id: string;                          // e.g. "valve_pelouse"
  statusEntity: string;                // e.g. "sensor.wateringhub_valve_pelouse_status"
  flowEntity: string | null;           // e.g. "sensor.wateringhub_valve_pelouse_flow"
  name: string;                        // friendly_name from status attributes
  status: string;                      // 'idle' | 'running'
  flow: number | null;                // L/min
}

export interface WateringHubEntities {
  programs: ProgramInfo[];
  valves: ValveInfo[];
  hasRunningProgram: boolean;
  runningProgram: ProgramInfo | null;
  activeValves: ValveInfo[];
}

export function findEntities(states: HassStates): WateringHubEntities {
  const entityIds = Object.keys(states);

  // Find program switches: switch.wateringhub_* (exclude known suffixes that aren't programs)
  const programSwitches = entityIds.filter(
    id => id.startsWith('switch.wateringhub_')
  );

  const programs: ProgramInfo[] = programSwitches.map(switchId => {
    const id = switchId.replace('switch.wateringhub_', '');
    const statusId = `sensor.wateringhub_${id}_status`;
    const nextRunId = `sensor.wateringhub_${id}_next_run`;
    const lastRunId = `sensor.wateringhub_${id}_last_run`;

    const switchState = states[switchId];
    const statusState = states[statusId];
    const nextRunState = states[nextRunId];
    const lastRunState = states[lastRunId];

    return {
      id,
      switchEntity: switchId,
      statusEntity: statusState ? statusId : null,
      nextRunEntity: nextRunState ? nextRunId : null,
      lastRunEntity: lastRunState ? lastRunId : null,
      name: String(switchState.attributes.friendly_name ?? id),
      isEnabled: switchState.state === 'on',
      status: statusState?.state ?? 'idle',
      nextRun: nextRunState?.state ?? null,
      lastRun: lastRunState?.state ?? null,
    };
  });

  // Find valves: sensor.wateringhub_*_status that are NOT program statuses
  const programIds = new Set(programs.map(p => p.id));
  const valveStatusEntities = entityIds.filter(id => {
    if (!id.startsWith('sensor.wateringhub_')) return false;
    if (!id.endsWith('_status')) return false;
    // Exclude program status sensors
    const inner = id.replace('sensor.wateringhub_', '').replace('_status', '');
    return !programIds.has(inner);
  });

  const valves: ValveInfo[] = valveStatusEntities.map(statusId => {
    const id = statusId.replace('sensor.wateringhub_', '').replace('_status', '');
    const flowId = `sensor.wateringhub_${id}_flow`;
    const statusState = states[statusId];
    const flowState = states[flowId];

    return {
      id,
      statusEntity: statusId,
      flowEntity: flowState ? flowId : null,
      name: String(statusState.attributes.friendly_name ?? id),
      status: statusState.state,
      flow: flowState ? parseFloat(flowState.state) || null : null,
    };
  });

  const runningProgram = programs.find(p => p.status === 'running') ?? null;
  const activeValves = valves.filter(v => v.status === 'running');

  return {
    programs,
    valves,
    hasRunningProgram: runningProgram !== null,
    runningProgram,
    activeValves,
  };
}
```

**Step 2: Commit**

```bash
git add src/utils/entity-finder.ts
git commit -m "feat: add entity finder utility for wateringhub_* discovery"
```

---

### Task 4: Utility — Time Formatting

**Files:**
- Create: `src/utils/time-format.ts`

**Step 1: Create `src/utils/time-format.ts`**

```typescript
type Translator = (key: string, params?: Record<string, string | number>) => string;

export function formatRelativeFuture(isoDate: string | null, t: Translator): string {
  if (!isoDate || isoDate === 'unknown' || isoDate === 'unavailable') return t('time.never');

  const target = new Date(isoDate);
  if (isNaN(target.getTime())) return t('time.never');

  const now = new Date();
  const diffMs = target.getTime() - now.getTime();

  if (diffMs < 0) return t('time.now');

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const timeStr = target.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  if (diffDays === 0) return t('time.today_at', { time: timeStr });
  if (diffDays === 1) return t('time.tomorrow_at', { time: timeStr });
  return t('time.in_days', { count: diffDays });
}

export function formatRelativePast(isoDate: string | null, t: Translator): string {
  if (!isoDate || isoDate === 'unknown' || isoDate === 'unavailable') return t('time.never');

  const target = new Date(isoDate);
  if (isNaN(target.getTime())) return t('time.never');

  const now = new Date();
  const diffMs = now.getTime() - target.getTime();

  if (diffMs < 0) return t('time.now');

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 1) return t('time.now');
  if (diffMinutes < 60) return t('time.ago_minutes', { count: diffMinutes });
  if (diffHours < 24) return t('time.ago_hours', { count: diffHours });
  return t('time.ago_days', { count: diffDays });
}
```

**Step 2: Commit**

```bash
git add src/utils/time-format.ts
git commit -m "feat: add relative time formatting utility"
```

---

### Task 5: Emergency Stop Component

**Files:**
- Create: `src/components/emergency-stop.ts`

**Step 1: Create `src/components/emergency-stop.ts`**

```typescript
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

// Minimal HA types
interface Hass {
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<void>;
}

type Translator = (key: string, params?: Record<string, string | number>) => string;

@customElement('wateringhub-emergency-stop')
export class EmergencyStop extends LitElement {
  @property({ attribute: false }) hass!: Hass;
  @property({ attribute: false }) t!: Translator;

  static styles = css`
    .emergency-btn {
      background: var(--error-color, #db4437);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
      transition: opacity 0.2s;
    }
    .emergency-btn:hover {
      opacity: 0.85;
    }
    .emergency-btn:active {
      opacity: 0.7;
    }
  `;

  private _handleStop(): void {
    if (confirm(this.t('emergency.confirm'))) {
      this.hass.callService('wateringhub', 'stop_all', {});
    }
  }

  render() {
    return html`
      <button class="emergency-btn" @click=${this._handleStop}>
        <span>&#x1F6D1;</span>
        ${this.t('emergency.stop_all')}
      </button>
    `;
  }
}
```

**Step 2: Commit**

```bash
git add src/components/emergency-stop.ts
git commit -m "feat: add emergency stop button component"
```

---

### Task 6: Program Row Component

**Files:**
- Create: `src/components/program-row.ts`

**Step 1: Create `src/components/program-row.ts`**

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ProgramInfo } from '../utils/entity-finder';
import { formatRelativeFuture, formatRelativePast } from '../utils/time-format';

interface Hass {
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<void>;
}

type Translator = (key: string, params?: Record<string, string | number>) => string;

@customElement('wateringhub-program-row')
export class ProgramRow extends LitElement {
  @property({ attribute: false }) hass!: Hass;
  @property({ attribute: false }) program!: ProgramInfo;
  @property({ attribute: false }) t!: Translator;
  @property({ type: Boolean }) disabled = false;

  static styles = css`
    .program-row {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      gap: 12px;
    }
    .program-row:last-child {
      border-bottom: none;
    }
    .program-row.disabled-row {
      opacity: 0.45;
    }
    .program-info {
      flex: 1;
      min-width: 0;
    }
    .program-name {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .program-meta {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-top: 2px;
    }
    .program-meta span {
      display: inline-block;
      margin-right: 12px;
    }
    .toggle-wrapper {
      flex-shrink: 0;
    }
    ha-switch {
      --switch-checked-color: var(--primary-color);
    }
  `;

  private _toggleProgram(): void {
    const service = this.program.isEnabled ? 'turn_off' : 'turn_on';
    this.hass.callService('switch', service, {
      entity_id: this.program.switchEntity,
    });
  }

  render() {
    const p = this.program;
    const isDisabled = this.disabled && !p.isEnabled;

    return html`
      <div class="program-row ${isDisabled ? 'disabled-row' : ''}">
        <div class="toggle-wrapper">
          <ha-switch
            .checked=${p.isEnabled}
            .disabled=${isDisabled}
            @change=${this._toggleProgram}
          ></ha-switch>
        </div>
        <div class="program-info">
          <div class="program-name">${p.name}</div>
          <div class="program-meta">
            <span>${this.t('program.next_run')}: ${formatRelativeFuture(p.nextRun, this.t)}</span>
            <span>${this.t('program.last_run')}: ${formatRelativePast(p.lastRun, this.t)}</span>
          </div>
        </div>
      </div>
    `;
  }
}
```

**Step 2: Commit**

```bash
git add src/components/program-row.ts
git commit -m "feat: add program row component with toggle and time display"
```

---

### Task 7: Running View Component

**Files:**
- Create: `src/components/running-view.ts`

**Step 1: Create `src/components/running-view.ts`**

```typescript
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ProgramInfo, ValveInfo } from '../utils/entity-finder';

type Translator = (key: string, params?: Record<string, string | number>) => string;

@customElement('wateringhub-running-view')
export class RunningView extends LitElement {
  @property({ attribute: false }) program!: ProgramInfo;
  @property({ attribute: false }) activeValves!: ValveInfo[];
  @property({ attribute: false }) totalValves!: number;
  @property({ attribute: false }) t!: Translator;

  static styles = css`
    .running-view {
      background: var(--primary-color);
      color: var(--text-primary-color, white);
      border-radius: 12px;
      padding: 16px;
      margin-bottom: 16px;
    }
    .running-header {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 12px;
      opacity: 0.9;
    }
    .running-program-name {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 12px;
    }
    .valve-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      font-size: 14px;
    }
    .flow-rate {
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      margin: 8px 0;
    }
    .flow-unit {
      font-size: 14px;
      font-weight: 400;
      opacity: 0.8;
    }
    .progress-bar {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      height: 8px;
      overflow: hidden;
      margin-top: 12px;
    }
    .progress-fill {
      background: white;
      height: 100%;
      border-radius: 4px;
      transition: width 0.5s ease;
    }
    .progress-label {
      font-size: 12px;
      opacity: 0.8;
      margin-top: 4px;
      text-align: right;
    }
  `;

  render() {
    const activeValve = this.activeValves[0];
    // Determine which valve index is active (rough heuristic: count active + idle behind it)
    const activeIndex = this.activeValves.length > 0
      ? this.totalValves - this.activeValves.length + 1
      : 0;
    const progressPct = this.totalValves > 0
      ? (activeIndex / this.totalValves) * 100
      : 0;

    return html`
      <div class="running-view">
        <div class="running-header">${this.t('running.current_program')}</div>
        <div class="running-program-name">${this.program.name}</div>

        ${activeValve ? html`
          <div class="valve-info">
            <span>${this.t('running.active_valve')}: ${activeValve.name}</span>
          </div>
          ${activeValve.flow !== null ? html`
            <div class="flow-rate">
              ${activeValve.flow.toFixed(1)} <span class="flow-unit">L/min</span>
            </div>
          ` : nothing}
        ` : nothing}

        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPct}%"></div>
        </div>
        <div class="progress-label">
          ${this.t('running.progress')}: ${activeIndex} ${this.t('running.valve_of')} ${this.totalValves}
        </div>
      </div>
    `;
  }
}
```

**Step 2: Commit**

```bash
git add src/components/running-view.ts
git commit -m "feat: add running view component with progress and flow display"
```

---

### Task 8: Main Card Component

**Files:**
- Create: `src/wateringhub-card.ts`

**Step 1: Create `src/wateringhub-card.ts`**

This is the main orchestrator. Analogies with React:
- `set hass()` = like a Redux store update triggering re-render
- `setConfig()` = like receiving initial props from parent
- `render()` = same as React's `render()`
- `static styles` = like StyleSheet.create() in React Native

```typescript
// SPDX-License-Identifier: MIT
// Copyright (c) 2026 WateringHub contributors

import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getTranslator } from './i18n/index';
import { findEntities, WateringHubEntities } from './utils/entity-finder';
import './components/program-row';
import './components/running-view';
import './components/emergency-stop';

interface CardConfig {
  type: string;
  title?: string;
}

interface Hass {
  states: Record<string, { entity_id: string; state: string; attributes: Record<string, unknown> }>;
  language: string;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<void>;
}

@customElement('wateringhub-card')
export class WateringHubCard extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  @state() private _entities!: WateringHubEntities;

  private _t!: ReturnType<typeof getTranslator>;

  // Called once by HA with the YAML config
  setConfig(config: CardConfig): void {
    this._config = config;
  }

  // Called by HA every time any entity state changes
  set hass(hass: Hass) {
    this._hass = hass;
    this._t = getTranslator(hass.language);
    this._entities = findEntities(hass.states);
  }

  // Tells HA how tall this card is (in units of 50px)
  getCardSize(): number {
    return 3;
  }

  static styles = css`
    ha-card {
      padding: 16px;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .header-left {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    .card-title {
      font-size: 20px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .global-status {
      font-size: 13px;
      color: var(--secondary-text-color);
    }
    .no-programs {
      text-align: center;
      padding: 24px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }
    .program-list {
      padding: 0 0 8px 0;
    }
  `;

  private _getGlobalStatus(): string {
    if (!this._entities || this._entities.programs.length === 0) {
      return '';
    }
    if (this._entities.hasRunningProgram) {
      return `🚿 ${this._t('status.running')}`;
    }
    const allDisabled = this._entities.programs.every(p => !p.isEnabled);
    if (allDisabled) {
      return `🔴 ${this._t('status.disabled')}`;
    }
    return `✅ ${this._t('status.idle')}`;
  }

  render() {
    if (!this._hass || !this._entities) {
      return html`<ha-card><div class="no-programs">Loading...</div></ha-card>`;
    }

    const title = this._config?.title ?? 'WateringHub';
    const entities = this._entities;
    const hasAnyEnabled = entities.programs.some(p => p.isEnabled);

    return html`
      <ha-card>
        <div class="card-header">
          <div class="header-left">
            <div class="card-title">${title}</div>
            <div class="global-status">${this._getGlobalStatus()}</div>
          </div>
          <wateringhub-emergency-stop
            .hass=${this._hass}
            .t=${this._t}
          ></wateringhub-emergency-stop>
        </div>

        ${entities.hasRunningProgram && entities.runningProgram ? html`
          <wateringhub-running-view
            .program=${entities.runningProgram}
            .activeValves=${entities.activeValves}
            .totalValves=${entities.valves.length}
            .t=${this._t}
          ></wateringhub-running-view>
        ` : nothing}

        ${entities.programs.length === 0 ? html`
          <div class="no-programs">${this._t('program.no_programs')}</div>
        ` : html`
          <div class="program-list">
            ${entities.programs.map(program => html`
              <wateringhub-program-row
                .hass=${this._hass}
                .program=${program}
                .t=${this._t}
                .disabled=${hasAnyEnabled}
              ></wateringhub-program-row>
            `)}
          </div>
        `}
      </ha-card>
    `;
  }
}

// Register card in HA card picker
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'wateringhub-card',
  name: 'WateringHub Card',
  description: 'Watering management card for WateringHub integration',
});
```

**Step 2: Build**

Run: `npm run build`
Expected: `dist/wateringhub-card.js` created without errors.

**Step 3: Commit**

```bash
git add src/wateringhub-card.ts dist/wateringhub-card.js
git commit -m "feat: add main wateringhub-card component with header, programs, and running view"
```

---

### Task 9: Build and Final Verification

**Step 1: Run build**

Run: `npm run build`
Expected: No errors, `dist/wateringhub-card.js` generated.

**Step 2: Verify dist file is not empty**

Run: `wc -c dist/wateringhub-card.js`
Expected: File should be several KB.

**Step 3: Final commit with all files**

```bash
git add -A
git commit -m "chore: build dist for v0.0.1-alpha release"
```

**Step 4: Create GitHub pre-release**

```bash
git tag v0.0.1-alpha
git push origin master --tags
gh release create v0.0.1-alpha --title "v0.0.1-alpha" --notes "Initial alpha: card renders, lists programs, emergency stop, mutex toggles, running view, i18n FR/EN" --prerelease
```

---

## Task Dependency Graph

```
Task 1 (scaffolding)
  ├── Task 2 (i18n)
  ├── Task 3 (entity-finder)
  └── Task 4 (time-format)
       ├── Task 5 (emergency-stop) — depends on Task 2
       ├── Task 6 (program-row) — depends on Tasks 2, 3, 4
       └── Task 7 (running-view) — depends on Tasks 2, 3
            └── Task 8 (main card) — depends on Tasks 5, 6, 7
                 └── Task 9 (build + release)
```

Tasks 2, 3, 4 can be done in parallel after Task 1.
Tasks 5, 6, 7 can be done in parallel after their deps.
