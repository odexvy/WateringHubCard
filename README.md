# WateringHub Card

Custom [Home Assistant](https://www.home-assistant.io/) dashboard card for the **WateringHub** integration.

Automatically discovers all `wateringhub_*` entities and provides a complete watering management UI.

## Features

- Auto-discovery of watering programs
- Toggle programs on/off with mutex logic (one active at a time)
- Real-time running view with active valve, flow rate, and progress
- Emergency stop button
- Relative time display (next run, last run)
- i18n support (French, English)
- Mobile-first responsive design
- HA native CSS variables (dark/light theme compatible)

## Installation (HACS)

1. Open HACS in Home Assistant
2. Go to **Frontend** > **Custom repositories**
3. Add this repository URL
4. Install **WateringHub Card**
5. Restart Home Assistant

## Configuration

```yaml
type: custom:wateringhub-card
title: Mon Arrosage   # optional
```

No entity configuration needed — the card auto-discovers all `wateringhub_*` entities.

## Requirements

This card requires the **WateringHub** custom component to be installed and configured. The component creates the following entities:

| Entity | Description |
|--------|-------------|
| `switch.wateringhub_{program_id}` | Toggle program on/off |
| `sensor.wateringhub_{program_id}_status` | `idle` / `running` / `disabled` |
| `sensor.wateringhub_{program_id}_next_run` | Next scheduled run (ISO datetime) |
| `sensor.wateringhub_{program_id}_last_run` | Last run (ISO datetime) |
| `sensor.wateringhub_{valve_id}_status` | Valve status: `idle` / `running` |
| `sensor.wateringhub_{valve_id}_flow` | Flow rate in L/min |

## Development

```bash
yarn install
yarn build       # build dist/wateringhub-card.js
yarn watch       # dev mode with auto-rebuild
```

## License

MIT
