# WateringHub Card — Project Status

**Date:** 2026-04-11
**Version:** 0.0.33
**Branch:** master

---

## The Two Cards

The repo contains **two custom cards** in a single bundle:

| Card                      | Usage                                                    | YAML Config                            |
| ------------------------- | -------------------------------------------------------- | -------------------------------------- |
| `wateringhub-card`        | Dashboard: displays programs, status, running view       | `type: custom:wateringhub-card`        |
| `wateringhub-config-card` | Management: CRUD zones and programs via HA services      | `type: custom:wateringhub-config-card` |

---

## Dashboard Card (`wateringhub-card`)

### Features

- **Auto-discovery** — scans `hass.states` for `switch.wateringhub_*` entities, no config needed
- **Program list** — displays each program with its name + toggle switch
- **Per-program status** — below each program:
  - Active program (toggle ON): green "Idle" badge + pause button + next run
  - Paused program: orange outline "Paused (Xd)" badge + cancel button + next run
  - Inactive program (toggle OFF): gray "Disabled" badge
  - When running: blue "Running" badge on the active program
- **Program recap (accordion)** — chevron to expand/collapse:
  - Schedule: "Every day at 22:00" / "Mon, Wed, Fri at 07:00" (translated)
  - Zones with colored badge (primary-color)
  - Valves per zone with `mdi:water` icon + duration
  - Total duration with `mdi:timer-outline` icon
- **Running block** — dedicated block shown when status=running:
  - Blue SVG circular progress with total remaining time in center
  - Program name + "Valve X of Y"
  - Vertical valve timeline grouped by zone (check/filled dot/empty circle)
  - Real-time countdown on active valve
  - "Stop All" button in top-right corner
  - "Test mode" badge if dry_run is active
- **Dry run** — test mode: runs the sequence without activating physical valves
- **Pause program** — pause button with dropdown (1d, 2d, 3d, 7d) without disabling the program:
  - `mdi:pause-circle-outline` icon next to idle badge
  - Orange outline "Paused (Xd)" badge with countdown
  - `mdi:close-circle-outline` cancel button to resume
  - `wateringhub.skip_program` service with `skip_until` attribute on switch
- **Error view** — dedicated block shown when status=error:
  - Error program name (resolved via switch friendly_name)
  - Backend error message (displayed in monospace)
  - "All valves have been automatically closed" message
- **i18n** — French + English, auto-detected from `hass.language`, fallback EN

### The 3 States

| Status  | Display                                                                              |
| ------- | ------------------------------------------------------------------------------------ |
| idle    | Green "Idle" badge + pause button + next run (active), gray badge (inactive), orange outline "Paused" badge (skipped) |
| running | Running block: blue SVG circle, valve timeline, stop button, dry run badge. Blue "Running" badge in list |
| error   | Error view: program name, error message, auto-stopped                                |

---

## Config Card (`wateringhub-config-card`)

### Features

- **Visual editor** — `getConfigElement()` to configure valves from HA card picker:
  - Entity selection via native HA `ha-entity-picker` (autocomplete, icons, search, filtered on switch)
  - Automatic name from the selected switch's friendly_name
  - Calls `wateringhub.set_valves` on each add/remove (no reboot)
- **Title** — header "WateringHub Config"
- **3 tabs**: Programs | Zones | Valves (valves last, read-only)
- **Programs tab** (default) — inline CRUD:
  - Create: name + trigger time + zone selection + duration and frequency per valve
  - Per-valve frequency: "Every day" (default) / "Every N days" / "Specific days"
  - Edit: pre-filled inline form
  - Delete: confirmation → `wateringhub.delete_program`
- **Zones tab** — inline CRUD:
  - Create: name + valve selection (checkboxes)
  - Edit: pre-filled inline form
  - Delete: confirmation → `wateringhub.delete_zone`
- **Valves tab** — read-only, list of available valves (from `available_valves` on status sensor)
- **Inline forms**: open in place within the list, only one open at a time
- **Reorder**: reorder valves in a program via arrow buttons
- **Toast notifications**: visual confirmation after each save/delete (zone, program)
- **i18n**: FR + EN, same files as the dashboard card

### Data Model

- **Zone** = logical grouping (name + list of valve IDs, NO duration)
- **Program** = schedule + selected zones + duration per valve per program
- A single valve can have different durations depending on the program

### Backend Services

| Service                      | Params                                       | Usage                                                        |
| ---------------------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `wateringhub.create_zone`    | `{ id, name, valves }`                       | Create a zone                                                |
| `wateringhub.update_zone`    | `{ id, name?, valves? }`                     | Update a zone                                                |
| `wateringhub.delete_zone`    | `{ id }`                                     | Delete a zone                                                |
| `wateringhub.create_program` | `{ id, name, schedule, zones, dry_run? }`    | Create a program (zones[].valves[].frequency optional)       |
| `wateringhub.update_program` | `{ id, name?, schedule?, zones?, dry_run? }` | Update a program (zones[].valves[].frequency optional)       |
| `wateringhub.delete_program` | `{ id }`                                     | Delete a program                                             |
| `wateringhub.set_valves`     | `{ valves: [{ entity_id, name }] }`          | Configure valves (replaces the entire list)                  |
| `wateringhub.stop_all`       | `{}`                                         | Emergency stop                                               |
| `wateringhub.skip_program`   | `{ id, days }`                               | Skip N days (days=0 cancels). `skip_until` attribute on switch |

---

## Backend Entities

| Entity                                             | Usage                                                                                                                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `switch.wateringhub_*`                             | Program toggles (attributes: schedule, zones with frequency per valve, total_duration, dry_run, skip_until)                                                                |
| `sensor.wateringhub_status`                        | Global status: idle / running / error                                                                                                                                      |
| `sensor.wateringhub_status` (permanent attributes) | available_valves, zones                                                                                                                                                    |
| `sensor.wateringhub_status` (running attributes)   | current_program, current_zone_name, current_valve_name, current_valve_start, current_valve_duration, valves_done, valves_total, progress_percent, valves_sequence, dry_run  |
| `sensor.wateringhub_status` (error attributes)     | current_program, error_message                                                                                                                                             |
| `sensor.wateringhub_next_run`                      | Next scheduled watering (ISO datetime)                                                                                                                                     |
| `sensor.wateringhub_last_run`                      | Last watering (ISO datetime)                                                                                                                                               |

---

## Repository Structure

```
WateringHubCard/
├── src/
│   ├── index.ts                       # Entry point (imports both cards)
│   ├── wateringhub-card.ts            # Dashboard card (state, lifecycle)
│   ├── card-editor.ts                 # Dashboard visual editor (title)
│   ├── templates.ts                   # Dashboard templates (header, status, error, running, programs, recap)
│   ├── shared-templates.ts            # Shared components (renderBadge, renderButton, renderListItem, renderFormRow)
│   ├── helpers.ts                     # Shared helpers (discovery, status, friendly name, error/running info, formatting)
│   ├── shared-styles.ts               # Shared CSS (ha-card, header, badges, buttons, list-items, form)
│   ├── styles.ts                      # Dashboard CSS
│   ├── types.ts                       # Shared types (Hass, CardConfig, Schedule, Zone, Valve, ErrorInfo, SkipInfo, FormState)
│   ├── config-card/
│   │   ├── wateringhub-config-card.ts # Config card (state, tabs, CRUD)
│   │   ├── config-editor.ts           # HA visual editor (valve picker via set_valves)
│   │   ├── config-templates.ts        # Tab orchestrator (renderTabs + re-exports)
│   │   ├── config-programs-tab.ts     # Programs tab (list, CRUD form)
│   │   ├── config-zones-tab.ts        # Zones tab (list, CRUD form)
│   │   ├── config-valves-tab.ts       # Valves tab (read-only)
│   │   ├── config-styles.ts           # Config CSS
│   │   ├── editor-styles.ts           # Editor CSS
│   │   └── config-helpers.ts          # Config helpers (getAvailableValves, getZones, generateId)
│   ├── i18n/
│   │   ├── index.ts                   # Translation loader
│   │   ├── en.json                    # English (fallback) — dashboard + config
│   │   └── fr.json                    # French — dashboard + config
│   └── __tests__/
│       ├── helpers.test.ts            # Dashboard helper tests
│       └── config-helpers.test.ts     # Config helper tests
├── dist/
│   └── wateringhub-card.js            # Single bundle (68.5kb minified, both cards + editors)
├── .github/workflows/ci.yml           # CI: typecheck + tests
├── .husky/pre-commit                  # lint-staged (eslint --fix + prettier --write)
├── package.json                       # esbuild points to src/index.ts
├── tsconfig.json
├── jest.config.ts
├── eslint.config.mjs
├── .prettierrc
├── .gitignore                         # node_modules/, .claude/, .superpowers/
├── hacs.json
├── CLAUDE.md
├── README.md
└── LICENSE
```

---

## Tooling

| Tool       | Command             | Purpose                                               |
| ---------- | ------------------- | ----------------------------------------------------- |
| Build      | `yarn build`        | esbuild → dist/wateringhub-card.js (minified, 2 cards)|
| Watch      | `yarn watch`        | Dev mode with auto-rebuild                            |
| Tests      | `yarn test`         | 63 Jest tests on helpers                              |
| Typecheck  | `yarn typecheck`    | tsc --noEmit                                          |
| Format     | `yarn format`       | Prettier on src/**/*.ts                               |
| CI         | Push/PR on master   | Typecheck + tests (GitHub Actions)                    |
| Pre-commit | Automatic (husky)   | eslint --fix + prettier --write on staged .ts files   |

---

## Release Flow

```
yarn build → commit dist/ → push → git tag v0.0.X-alpha → gh release create --prerelease
```

HACS: Frontend > Custom repositories > https://github.com/odexvy/WateringHubCard (Plugin)
HACS: Backend > Custom repositories > https://github.com/odexvy/WateringHub (Plugin)
Update: HACS shows "update available" → install → Ctrl+Shift+R (hard refresh)

---

## Roadmap

### Short term (frontend only)

- [x] **UI polish** — spacing, transitions, dark mode
- [x] **Running view** — active valve, countdown, progress bars
- [x] **Error view** — error message, auto-stop
- [x] **Config card** — CRUD zones + programs via HA services
- [x] **Visual editor** — `getConfigElement()` on both cards (config: valve picker via set_valves, dashboard: title)
- [ ] Tests for i18n (`getTranslator`)
- [x] Tests for config-helpers (`getAvailableValves`, `getZones`, `generateId`)

### Medium term (requires backend)

- [x] **Improved valve progress** — vertical valve timeline with icons (done/running/pending)
- [x] **Event listener** — `hass.connection.subscribeEvents('wateringhub_event')` for instant updates
- [x] **Pause program** — pause button 1-7d with dropdown, orange outline badge, `skip_program` backend service
- [ ] **Flow rate** — display flow rate in L/min in running view

### Long term

- [ ] **Notifications** — display errors in a toast or history section
- [ ] **History / statistics** — execution graph with water consumption
- [ ] **Multi-language** — add ES, DE, IT, PT
- [ ] **Official HACS repo** — submit to official HACS repo
- [x] **Preview image** — icon in README (images/icon.png) for HACS and HA

---

## Decisions Made

1. **Lit bundled** — HA doesn't expose Lit as importable ESM, cards must bundle it
2. **No unsafeCSS** — all CSS uses pure tagged template literals
3. **No React analogies** — no comments referencing React/RN patterns
4. **yarn** — not npm
5. **Auto-discovery** — dashboard card scans hass.states, no explicit entity listing
6. **Global sensors** — status/next_run/last_run are global (not per-program)
7. **Backend mutex** — the card doesn't disable toggles
8. **HA CSS variables only** — no hardcoded colors
9. **Computed running view** — countdown computed client-side from `current_valve_start` + `current_valve_duration`
10. **No stop on error** — the backend shuts everything down automatically
11. **Two cards, one bundle** — `index.ts` imports both, esbuild produces a single file
12. **Zone ≠ duration** — zones are logical groupings, durations are per-valve per-program
13. **Separate config card** — independent card, no gear button in the dashboard card
14. **Inline forms** — CRUD forms open in place within the list
15. **Shared styles** — `shared-styles.ts` for common CSS (ha-card, header, badges, buttons, list-items, form), imported by all components
16. **getFriendlyName()** — shared helper to resolve entity friendly_name with fallback
17. **Running block SVG** — SVG progress circle with `stroke-dashoffset`, updated by `_tick` (1s) without CSS transition
18. **Per-program status** — idle/disabled badge under each program (no more global status-row)
19. **Dry run** — `dry_run` flag per program, "Test mode" badge in running block and config list
20. **Single active program** — global next_run/last_run sensors are displayed under the active program only
21. **Per-valve frequency** — each valve can override program frequency (every_n_days or weekdays), time stays global, ineligible valves are skipped server-side
22. **HA visual editor** — `getConfigElement()` on config card, HA switch entity picker to configure valves via `set_valves` (no config.yaml, no reboot)
23. **Simplified schedule** — program only has `{ time }`, frequency is 100% per-valve
24. **Skip = temporary state** — skip is managed via a dedicated `skip_program` service (not via `update_program`), because it's runtime control, not configuration
25. **Shared components** — `shared-templates.ts` (renderBadge, renderButton, renderListItem, renderFormRow) and `shared-styles.ts` mutualize CSS + HTML between dashboard and config cards
