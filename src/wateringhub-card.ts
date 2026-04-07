// SPDX-License-Identifier: MIT
// Copyright (c) 2026 WateringHub contributors

import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type { Hass, CardConfig, Translator } from './types';
import { getTranslator } from './i18n/index';
import { sharedStyles } from './shared-styles';
import { cardStyles } from './styles';
import { discoverPrograms, getGlobalStatus, getRunningInfo } from './helpers';
import {
  renderHeader,
  renderStatusRow,
  renderErrorView,
  renderRunningView,
  renderProgramList,
} from './templates';

@customElement('wateringhub-card')
export class WateringHubCard extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  @state() private _programEntities: string[] = [];
  @state() private _expandedProgram: string | null = null;
  @state() private _tick = 0;
  @state() private _valveKey = '';

  private _t: Translator = (key: string) => key;
  private _timerInterval: ReturnType<typeof setInterval> | null = null;

  static readonly styles = [sharedStyles, cardStyles];

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
    const status = getGlobalStatus(hass);
    this._updateTimer(status);

    // Track valve changes to reset progress bars
    const info = status === 'running' ? getRunningInfo(hass) : null;
    const newKey = info ? `${info.valveStart}` : '';
    if (newKey !== this._valveKey) {
      this._valveKey = newKey;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._clearTimer();
  }

  private _updateTimer(status: string): void {
    if (status === 'running' && !this._timerInterval) {
      this._timerInterval = setInterval(() => {
        this._tick++;
      }, 1000);
    } else if (status !== 'running' && this._timerInterval) {
      this._clearTimer();
    }
  }

  private _clearTimer(): void {
    if (this._timerInterval) {
      clearInterval(this._timerInterval);
      this._timerInterval = null;
    }
  }

  getCardSize(): number {
    return 3;
  }

  private _toggleExpand(entityId: string): void {
    this._expandedProgram = this._expandedProgram === entityId ? null : entityId;
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
    const title = this._config.title ?? 'WateringHub';

    return html`
      <ha-card>
        ${renderHeader(title, status === 'running', () => this._stopAll(), this._t)}
        ${renderStatusRow(this._hass, this._programEntities, this._t)}
        ${renderErrorView(this._hass, this._t)}
        ${renderRunningView(this._hass, this._valveKey, this._t)}
        ${renderProgramList(
          this._hass,
          this._programEntities,
          this._expandedProgram,
          (id) => this._toggleExpand(id),
          (id) => this._toggleProgram(id),
          this._t,
        )}
      </ha-card>
    `;
  }
}

// Register in HA card picker
declare global {
  var customCards: Array<{ type: string; name: string; description: string }> | undefined;
}

globalThis.customCards = globalThis.customCards || [];
globalThis.customCards.push({
  type: 'wateringhub-card',
  name: 'WateringHub Card',
  description: 'Watering management card for WateringHub',
});
