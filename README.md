# WateringHub Card

**Version:** 0.0.50

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub Release](https://img.shields.io/github/v/release/odexvy/WateringHubCard)](https://github.com/odexvy/WateringHubCard/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Custom [Home Assistant](https://www.home-assistant.io/) dashboard cards for the **WateringHub** integration.

| Repository                                                   | Role                                   |
| ------------------------------------------------------------ | -------------------------------------- |
| [WateringHub](https://github.com/odexvy/WateringHub)         | Backend — HA custom integration        |
| [WateringHubCard](https://github.com/odexvy/WateringHubCard) | Frontend — this repo (HA custom cards) |

## Introduction

WateringHub Card provides two custom Lovelace cards for managing your irrigation system entirely from the Home Assistant UI. Configure valves, zones, programs, and monitor execution in real time. No YAML needed — everything is configured via visual editors and stored in HA's `.storage`.

> **Requires [WateringHub](https://github.com/odexvy/WateringHub)** backend integration. Install it first via HACS (Integration) or manually.

## Features

### Dashboard Card (`wateringhub-card`)

- **Visual editor** — configure card title from HA card picker
- **Auto-discovery** — finds all `switch.wateringhub_*` programs automatically
- **Per-program status** — idle badge + next run, disabled badge, running badge for active program
- **Pause program** — skip 1-7 days without disabling (orange outline badge with countdown, cancel button)
- **Program recap** — accordion with trigger time, last run, zone badges, valves, per-valve frequency, total duration
- **Running block** — SVG circular progress (blue), valve timeline grouped by zone (done / running / pending)
- **Dry run mode** — "Test mode" badge when running without activating physical valves
- **Error view** — program name, error message, auto-stop notice
- **Emergency stop** — button inside the running block

### Config Card (`wateringhub-config-card`)

- **Visual editor** — configure valves with native HA entity picker (autocomplete, search, icons)
- **Programs** — create, edit, delete (trigger time, zones, per-valve durations and frequency, dry run toggle, drag & drop valve reorder)
- **Zones** — create, edit, delete (name only, valves assigned in Valves tab)
- **Water Supplies** — create, edit, delete (enables parallel execution)
- **Valves** — assign zone + water supply per valve with labeled dropdowns, global save button
- **Toast notifications** — visual confirmation on save/delete actions
- **Confirm dialogs** — custom overlay dialog for all destructive actions

### Shared

- **i18n** — French + English, auto-detected from HA language
- **Mobile-first** — responsive design
- **Theming** — HA native CSS variables (dark/light compatible)
- **Accessibility** — focus-visible states on all interactive elements

## Installation

### HACS (recommended)

1. Open HACS in Home Assistant
2. Go to **Frontend** > **Custom repositories**
3. Add `https://github.com/odexvy/WateringHubCard`, category **Plugin**
4. Install **WateringHub Card**
5. Restart Home Assistant

### Manual

Copy `dist/wateringhub-card.js` into your HA `www/` directory, then add it as a resource in your Lovelace config.

## Getting started

Add the cards to your dashboard:

```yaml
# Dashboard card — displays programs, status, running view
type: custom:wateringhub-card
title: Mon Arrosage   # optional

# Config card — manages zones & programs
type: custom:wateringhub-config-card
```

No entity configuration needed — both cards auto-discover all `wateringhub_*` entities.

## Entities

| Entity                            | Description                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------- |
| `switch.wateringhub_{program_id}` | Toggle program on/off (attributes: schedule, zones, total_duration, dry_run, skip_until) |
| `sensor.wateringhub_status`       | Global status: `idle` / `running` / `error`                                  |
| `sensor.wateringhub_next_run`     | Next scheduled run (ISO datetime)                                            |
| `sensor.wateringhub_last_run`     | Last run (ISO datetime)                                                      |

<details>
<summary>Status sensor attributes</summary>

**Always available:**

- `available_valves` — list of configured valves
- `zones` — list of configured zones

**When running:**

- `current_program`, `current_zone_name`, `current_valve_name`
- `current_valve_start`, `current_valve_duration`
- `valves_done`, `valves_total`, `progress_percent`
- `dry_run` — `true` if running in test mode
- `valves_sequence` — ordered list of today's eligible valves with `status: done/running/pending`

**When error:**

- `current_program`, `error_message`

</details>

## Development

```bash
yarn install
yarn build       # esbuild → dist/wateringhub-card.js (minified)
yarn watch       # dev mode with auto-rebuild
yarn test        # jest tests
yarn typecheck   # tsc --noEmit
yarn format      # prettier
```

## License

MIT — see [LICENSE](LICENSE).
