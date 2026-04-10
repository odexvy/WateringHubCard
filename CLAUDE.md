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

- `switch.wateringhub_*` — per-program toggles (auto-discovered, attrs: schedule, zones, total_duration, dry_run, skip_until)
- `sensor.wateringhub_status` — global: idle / running / error (running attrs: valves_sequence, dry_run)
- `sensor.wateringhub_next_run` — global: ISO datetime
- `sensor.wateringhub_last_run` — global: ISO datetime
- Service: `wateringhub.skip_program` — `{ id, days }` (days=0 to cancel)

## File Structure

```
src/
├── wateringhub-card.ts   # Main LitElement component (state + lifecycle)
├── card-editor.ts        # Visual editor for dashboard card (title)
├── templates.ts          # HTML render functions (header, running block, programs, recap)
├── shared-templates.ts   # Shared components (renderBadge, renderButton, renderListItem, renderFormRow)
├── types.ts              # All interfaces (Hass, CardConfig, Schedule, Zone, Valve, ErrorInfo, SkipInfo, FormState)
├── helpers.ts            # Shared helpers (discovery, status, friendly name, running/error/skip info, formatting)
├── shared-styles.ts      # Shared CSS (ha-card, header, badges, buttons, list-items, form)
├── styles.ts             # Dashboard CSS (HA native variables only)
├── config-card/
│   ├── wateringhub-config-card.ts  # Config card (state, tabs, CRUD)
│   ├── config-editor.ts            # Visual editor (valve picker via set_valves)
│   ├── config-templates.ts         # Tab orchestrator (renderTabs + re-exports)
│   ├── config-programs-tab.ts      # Programs tab (list, CRUD form)
│   ├── config-zones-tab.ts         # Zones tab (list, CRUD form)
│   ├── config-valves-tab.ts        # Valves tab (read-only list)
│   ├── config-styles.ts            # Config CSS
│   ├── editor-styles.ts            # Editor CSS
│   └── config-helpers.ts           # Config helpers (getAvailableValves, getZones, generateId)
└── i18n/
    ├── index.ts          # Translation loader
    ├── en.json           # English (fallback)
    └── fr.json           # French
```

## Code Rules

- **Styles in separate files** — never inline `css\`...\`` in components. Use dedicated `*-styles.ts` files (shared-styles.ts, styles.ts, config-styles.ts, editor-styles.ts)
- **Shared styles** — common CSS (badges, buttons, list-items, form-row, form-label, form-input, header, empty-state) goes in `shared-styles.ts`, imported by all components
- **Shared templates** — reusable render functions (renderBadge, renderButton, renderListItem, renderFormRow) in `shared-templates.ts`, used by both cards
- **No unsafeCSS** — all CSS uses tagged template literals, no `unsafeCSS()`
- **No React analogies** — no comments referencing React/RN patterns
- **HA CSS variables only** — no hardcoded colors, use `var(--primary-color)` etc.
- **i18n everything** — all user-visible strings use translation keys, never hardcoded text
- **yarn only** — never npm

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
