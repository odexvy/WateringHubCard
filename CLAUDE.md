# CLAUDE.md — WateringHub Card

## Git Permissions

- **Developer**: has full git write access (commit, push, tag, release, branch)
- **Claude**: read-only git access. Do NOT run `git commit`, `git push`, `git tag`, `git branch`, or any destructive git command. Claude can use `git status`, `git log`, `git diff` for context.

## Repositories

- **Frontend (this repo):** https://github.com/odexvy/WateringHubCard
- **Backend (HA integration):** https://github.com/odexvy/WateringHub

## Project

Custom Home Assistant card (LitElement + TypeScript) for the `wateringhub` integration.

## Naming

- Entity prefix: `wateringhub_`
- Card element: `wateringhub-card`
- Service: `wateringhub.stop_all`
- Never use `testwatering` anywhere

## Entities

- `switch.wateringhub_*` — per-program toggles (auto-discovered)
- `sensor.wateringhub_status` — global: idle / running / error
- `sensor.wateringhub_next_run` — global: ISO datetime
- `sensor.wateringhub_last_run` — global: ISO datetime

## File Structure

```
src/
├── wateringhub-card.ts   # Main LitElement component (state + lifecycle)
├── templates.ts          # HTML render functions (header, running block, programs, recap)
├── types.ts              # Interfaces (Hass, CardConfig, Schedule, Zone, Valve, ValveStep)
├── helpers.ts            # Shared helpers (discovery, status, friendly name, running/error info, formatting)
├── shared-styles.ts      # Shared CSS (ha-card, header, empty-state)
├── styles.ts             # Dashboard CSS (HA native variables only)
├── config-card/
│   ├── wateringhub-config-card.ts  # Config card (state, tabs, CRUD)
│   ├── config-templates.ts         # Config templates (valves, zones, programs, inline forms)
│   ├── config-styles.ts            # Config CSS
│   └── config-helpers.ts           # Config helpers (getAvailableValves, getZones, generateId)
└── i18n/
    ├── index.ts          # Translation loader
    ├── en.json           # English (fallback)
    └── fr.json           # French
```

## Build

```bash
yarn build    # esbuild → dist/wateringhub-card.js (minified)
yarn watch    # dev mode with watch
```

`dist/` is committed to git (HACS requirement).

## Language

- Source: TypeScript (`.ts`, not `.tsx`)
- i18n: FR + EN, fallback EN
- LitElement uses tagged template literals, not JSX
