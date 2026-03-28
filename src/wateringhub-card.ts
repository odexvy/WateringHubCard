// SPDX-License-Identifier: MIT
// Copyright (c) 2026 WateringHub contributors

import { LitElement, html, css, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

// ── HA types ──────────────────────────────────────────────

interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
}

interface Hass {
  states: Record<string, HassEntity>;
  language: string;
  callService(domain: string, service: string, data?: Record<string, unknown>): Promise<void>;
}

interface CardConfig {
  type: string;
  title?: string;
}

// ── Card ──────────────────────────────────────────────────

@customElement('wateringhub-card')
export class WateringHubCard extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;

  // Auto-discovered entities
  private _programEntities: string[] = [];

  // -- HA lifecycle (think: props from parent in React) ----

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  set hass(hass: Hass) {
    this._hass = hass;
    // Auto-discover wateringhub switch entities
    this._programEntities = Object.keys(hass.states).filter((id) =>
      id.startsWith('switch.wateringhub_'),
    );
  }

  getCardSize(): number {
    return 3;
  }

  // -- Helpers ---------------------------------------------

  private _getState(entityId: string): HassEntity | undefined {
    return this._hass?.states[entityId];
  }

  private _getGlobalStatus(): string {
    const entity = this._getState('sensor.wateringhub_status');
    return entity?.state ?? 'idle';
  }

  private _statusColor(status: string): string {
    switch (status) {
      case 'running':
        return 'var(--warning-color, #ffa600)';
      case 'error':
        return 'var(--error-color, #db4437)';
      default:
        return 'var(--success-color, #43a047)';
    }
  }

  private _statusLabel(status: string): string {
    switch (status) {
      case 'running':
        return 'Running';
      case 'error':
        return 'Error';
      default:
        return 'Idle';
    }
  }

  private _formatRelative(entityId: string): string {
    const entity = this._hass?.states[entityId];
    if (
      !entity ||
      entity.state === 'None' ||
      entity.state === 'unknown' ||
      entity.state === 'unavailable'
    ) {
      return '—';
    }
    const date = new Date(entity.state);
    if (isNaN(date.getTime())) return entity.state;

    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    // Future date
    if (diffMs < 0) {
      const futureDiff = -diffMs;
      const hours = Math.floor(futureDiff / (1000 * 60 * 60));
      if (hours < 24) return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const days = Math.floor(hours / 24);
      return `in ${days}d`;
    }

    // Past date
    const minutes = Math.floor(diffMs / (1000 * 60));
    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  }

  // -- Actions ---------------------------------------------

  private _toggleProgram(entityId: string): void {
    const entity = this._getState(entityId);
    if (!entity) return;
    const service = entity.state === 'on' ? 'turn_off' : 'turn_on';
    this._hass.callService('switch', service, { entity_id: entityId });
  }

  private _stopAll(): void {
    this._hass.callService('wateringhub', 'stop_all', {});
  }

  // -- Styles (think: StyleSheet.create in RN) -------------

  static styles = css`
    ha-card {
      padding: 16px;
    }

    /* Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .title {
      font-size: 18px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    /* Status badge */
    .status-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
      flex-wrap: wrap;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 500;
      color: white;
    }
    .info-item {
      font-size: 13px;
      color: var(--secondary-text-color);
    }

    /* Programs */
    .program {
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      gap: 12px;
    }
    .program:last-child {
      border-bottom: none;
    }
    .program-name {
      flex: 1;
      font-size: 15px;
      color: var(--primary-text-color);
    }
    .program-name.active {
      font-weight: 600;
    }
    .active-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--primary-color);
      flex-shrink: 0;
    }

    /* No programs */
    .no-programs {
      text-align: center;
      padding: 24px;
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    /* Stop button */
    .stop-btn {
      background: var(--error-color, #db4437);
      color: white;
      border: none;
      border-radius: 8px;
      padding: 6px 14px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
    .stop-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  `;

  // -- Render (think: return <View> in RN) -----------------

  render() {
    if (!this._hass || !this._config) {
      return html`<ha-card>Loading...</ha-card>`;
    }

    const status = this._getGlobalStatus();
    const isIdle = status === 'idle';
    const title = this._config?.title ?? 'WateringHub';

    return html`
      <ha-card>
        <div class="header">
          <span class="title">${title}</span>
          <button class="stop-btn" ?disabled=${isIdle} @click=${this._stopAll}>Stop All</button>
        </div>

        <div class="status-row">
          <span class="badge" style="background:${this._statusColor(status)}">
            ${this._statusLabel(status)}
          </span>
          <span class="info-item">
            Next: ${this._formatRelative('sensor.wateringhub_next_run')}
          </span>
          <span class="info-item">
            Last: ${this._formatRelative('sensor.wateringhub_last_run')}
          </span>
        </div>

        ${this._programEntities.length === 0
          ? html`<div class="no-programs">No programs found</div>`
          : this._programEntities.map((entityId) => {
              const entity = this._getState(entityId);
              if (!entity) return nothing;
              const isOn = entity.state === 'on';
              const name = String(entity.attributes.friendly_name ?? entityId);
              return html`
                <div class="program">
                  ${isOn ? html`<div class="active-dot"></div>` : nothing}
                  <span class="program-name ${isOn ? 'active' : ''}">${name}</span>
                  <ha-switch
                    .checked=${isOn}
                    @change=${() => this._toggleProgram(entityId)}
                  ></ha-switch>
                </div>
              `;
            })}
      </ha-card>
    `;
  }
}

// ── Register in HA card picker ────────────────────────────

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'wateringhub-card',
  name: 'WateringHub Card',
  description: 'Watering management card for WateringHub',
});
