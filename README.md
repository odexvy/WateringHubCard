# WateringHub Card

<img src="https://raw.githubusercontent.com/odexvy/WateringHubCard/master/images/icon.png" alt="WateringHub" width="128">

Custom [Home Assistant](https://www.home-assistant.io/) dashboard card for the **WateringHub** integration.

> **Requires [WateringHub](https://github.com/odexvy/WateringHub)** custom component (backend integration). Install it first via HACS (Integration) or manually.

| Repository | Role |
|------------|------|
| [WateringHubCard](https://github.com/odexvy/WateringHubCard) | Frontend — this repo (HA custom card) |
| [WateringHub](https://github.com/odexvy/WateringHub) | Backend — HA custom integration |

Auto-discovers watering programs and provides a management UI.

## Features

### Dashboard Card (`wateringhub-card`)

- **Visual editor**: configure card title from HA card picker (no YAML needed)
- Auto-discovery of `switch.wateringhub_*` programs
- Toggle programs on/off (backend mutex: one active at a time)
- Per-program status: idle badge + next/last run (active program), disabled badge (inactive)
- Program recap (accordion): schedule, zones, valves, total duration
- Running block: SVG circular progress with total remaining time, valve timeline grouped by zone (done / running / pending)
- Dry run mode: "Test mode" badge when running without activating physical valves
- Error view: program name, error message, auto-stop notice
- Emergency stop button inside running block

### Config Card (`wateringhub-config-card`)

- **Visual editor**: configure valves with native HA entity picker (autocomplete, search, icons — no YAML, no reboot)
- Manage programs: create, edit, delete (trigger time, zones, per-valve durations and frequency override, dry run toggle)
- Manage zones: create, edit, delete (name, valve selection)
- View available valves (read-only tab)
- Inline forms with live validation

### Shared

- i18n support (French, English — auto-detected from HA language)
- Mobile-first responsive design
- HA native CSS variables (dark/light theme compatible)

## Installation (HACS)

1. Open HACS in Home Assistant
2. Go to **Frontend** > **Custom repositories**
3. Add this repository URL, category **Plugin**
4. Install **WateringHub Card**
5. Restart Home Assistant

## Configuration

```yaml
# Dashboard card
type: custom:wateringhub-card
title: Mon Arrosage   # optional

# Config card (zones & programs management)
type: custom:wateringhub-config-card
```

No entity configuration needed — both cards auto-discover all `wateringhub_*` entities.

## Entities

The WateringHub component creates the following entities:

| Entity | Description |
|--------|-------------|
| `switch.wateringhub_{program_id}` | Toggle program on/off (attributes: schedule, zones, total_duration, dry_run) |
| `sensor.wateringhub_status` | Global status: `idle` / `running` / `error` |
| `sensor.wateringhub_next_run` | Next scheduled run (ISO datetime) |
| `sensor.wateringhub_last_run` | Last run (ISO datetime) |

The card also uses the `wateringhub.stop_all` service for the emergency stop button.

## Development

```bash
yarn install
yarn build       # build dist/wateringhub-card.js (minified)
yarn watch       # dev mode with auto-rebuild
yarn format      # run prettier
```

## License

MIT
