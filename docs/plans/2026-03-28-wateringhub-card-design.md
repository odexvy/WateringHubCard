# WateringHub Card — Design Document

**Date:** 2026-03-28
**Status:** Approved

## Overview

Custom Home Assistant card (LitElement) for the `wateringhub` custom component. Displays watering programs, allows toggling, shows running state, and provides emergency stop.

## Naming Conventions

- Entity prefix: `wateringhub_`
- Card custom element: `wateringhub-card` (`type: custom:wateringhub-card`)
- Service: `wateringhub.stop_all`
- Source files: TypeScript (`.ts`)
- Bundle: `dist/wateringhub-card.js`

## Entities (created by backend)

### Per program
- `switch.wateringhub_{program_id}` — toggle enabled/disabled
- `sensor.wateringhub_{program_id}_next_run` — next run (ISO datetime)
- `sensor.wateringhub_{program_id}_last_run` — last run (ISO datetime)
- `sensor.wateringhub_{program_id}_status` — `idle` | `running` | `disabled`

### Per valve (during execution)
- `sensor.wateringhub_{valve_id}_status` — `idle` | `running`
- `sensor.wateringhub_{valve_id}_flow` — flow rate L/min (if flow_sensor configured)

## Architecture

```
wateringhub-card/
├── src/
│   ├── wateringhub-card.ts          # Main component (LitElement)
│   ├── components/
│   │   ├── program-row.ts           # Program row
│   │   ├── running-view.ts          # Running state view
│   │   └── emergency-stop.ts        # Emergency stop button
│   ├── utils/
│   │   ├── entity-finder.ts         # Auto-discovery of wateringhub_* entities
│   │   └── time-format.ts           # Relative date formatting
│   └── i18n/
│       ├── index.ts                 # Translation loader
│       ├── fr.json                  # French translations
│       └── en.json                  # English translations (fallback)
├── dist/
│   └── wateringhub-card.js          # Final bundle (esbuild)
├── hacs.json
├── package.json
├── LICENSE
└── README.md
```

## UI Sections

### Header
- Configurable title
- Global status: "En attente" / "Arrosage en cours" / "Disabled"
- Emergency stop button — calls `wateringhub.stop_all`

### Program List
For each discovered program:
- Toggle on/off (switch entity)
- Program name
- Next run in relative time: "ce soir a 22h", "dans 2 jours"
- Last run: "il y a 3 jours"
- **Mutex**: when a program is `on`, all other toggles are **disabled** (not just greyed)

### Running View
Visible only when a program is running:
- Running program name
- Active valve + countdown timer
- Flow rate in L/min (if available)
- Sequence progress bar (valve 1/2, valve 2/2...)

## Data Flow

1. HA injects `hass` via setter -> card filters `hass.states` for `wateringhub_*` entities
2. `entity-finder.ts` groups entities by program (switch, sensors) and by valve (status, flow)
3. Each `program-row` receives its entities as properties
4. `running-view` renders only if a program has `status === 'running'`

## Mutex Logic

- UI-side only: when any `switch.wateringhub_*` is `on`, all other program toggles are `disabled`
- Backend handles actual business logic

## i18n

- Detect language via `hass.language`, normalize to lowercase
- `startsWith('fr')` -> load `fr.json`, otherwise -> `en.json` (fallback)
- Relative times: "il y a 3 jours" / "3 days ago"

## Error Handling

- No `wateringhub_*` entities found -> display clear message: "Aucun programme trouve" / "No programs found"

## CSS

- HA native CSS variables only (`--primary-color`, `--card-background-color`, etc.)
- Mobile first, responsive

## Card Config (YAML)

```yaml
type: custom:wateringhub-card
title: Mon Arrosage   # optional
```

Card auto-discovers all `wateringhub_*` entities from `hass.states`.

## HACS

- `dist/` committed to git (HACS requirement)
- `hacs.json` with `render_readme: true`

## License

MIT
