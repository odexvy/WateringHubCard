// SPDX-License-Identifier: MIT
// Copyright (c) 2026 WateringHub contributors

import { LitElement, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import type { Hass, CardConfig, Translator } from './types';
import { getTranslator } from './i18n/index';
import { cardStyles } from './styles';
import {
  discoverPrograms,
  getActiveProgramName,
  getGlobalStatus,
  statusLabel,
  formatRelative,
  formatNextRun,
} from './helpers';

@customElement('wateringhub-card')
export class WateringHubCard extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  @state() private _programEntities: string[] = [];

  private _t: Translator = (key: string) => key;

  static readonly styles = cardStyles;

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  set hass(hass: Hass) {
    const prevHass = this._hass;
    this._hass = hass;
    this._t = getTranslator(hass.language);
    if (prevHass?.states !== hass.states) {
      this._programEntities = discoverPrograms(hass);
    }
  }

  getCardSize(): number {
    return 3;
  }

  private _toggleProgram(entityId: string): void {
    const entity = this._hass.states[entityId];
    if (!entity) return;
    const service = entity.state === 'on' ? 'turn_off' : 'turn_on';
    this._hass.callService('switch', service, { entity_id: entityId });
  }

  private _stopAll(): void {
    if (confirm(this._t('stop_confirm'))) {
      this._hass.callService('wateringhub', 'stop_all', {});
    }
  }

  render() {
    if (!this._hass || !this._config) {
      return html`<ha-card>${this._t('loading')}</ha-card>`;
    }

    const status = getGlobalStatus(this._hass);
    const isRunning = status === 'running';
    const title = this._config.title ?? 'WateringHub';
    const activeName = getActiveProgramName(this._hass, this._programEntities);

    return html`
      <ha-card>
        <div class="header">
          <span class="title">${title}</span>
          ${isRunning
            ? html`<button class="stop-btn" @click=${this._stopAll}>${this._t('stop_all')}</button>`
            : nothing}
        </div>

        <div class="status-row">
          <span class="badge badge-${status}"> ${statusLabel(status, this._t, activeName)} </span>
          <span class="info-item">
            ${this._t('next')}: ${formatNextRun(this._hass, this._t, this._hass.language)}
          </span>
          <span class="info-item">
            ${this._t('last')}:
            ${formatRelative(
              this._hass,
              'sensor.wateringhub_last_run',
              this._t,
              this._hass.language,
            )}
          </span>
        </div>

        ${this._programEntities.length === 0
          ? html`<div class="no-programs">${this._t('no_programs')}</div>`
          : this._programEntities.map((entityId) => {
              const entity = this._hass.states[entityId];
              if (!entity) return nothing;
              const isOn = entity.state === 'on';
              const name =
                typeof entity.attributes.friendly_name === 'string'
                  ? entity.attributes.friendly_name
                  : entityId;
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

// Register in HA card picker
declare global {
  // eslint-disable-next-line no-var
  var customCards: Array<{ type: string; name: string; description: string }> | undefined;
}

globalThis.customCards = globalThis.customCards || [];
globalThis.customCards.push({
  type: 'wateringhub-card',
  name: 'WateringHub Card',
  description: 'Watering management card for WateringHub',
});
