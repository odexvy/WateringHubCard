# WateringHub Card

Custom [Home Assistant](https://www.home-assistant.io/) dashboard card for the **WateringHub** integration.

> **Requires [WateringHub](https://github.com/odexvy/WateringHub)** custom component. Install it first via HACS (Integration) or manually.

Auto-discovers watering programs and provides a management UI.

## Features

- Auto-discovery of `switch.wateringhub_*` programs
- Toggle programs on/off (backend mutex: one active at a time)
- Global status badge (idle / running / error) with animation
- Active program name displayed when running
- Program recap (accordion): schedule, zones, valves, total duration
- Emergency stop button with confirmation (visible when running)
- Relative time display (next run, last run)
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
type: custom:wateringhub-card
title: Mon Arrosage   # optional
```

No entity configuration needed — the card auto-discovers all `wateringhub_*` entities.

## Entities

The WateringHub component creates the following entities:

| Entity | Description |
|--------|-------------|
| `switch.wateringhub_{program_id}` | Toggle program on/off (attributes: schedule, zones, total_duration) |
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
