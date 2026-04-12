// SPDX-License-Identifier: MIT
// Copyright (c) 2026 WateringHub contributors

import { LitElement, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type { Hass, CardConfig, Translator } from '../shared/types';
import { getTranslator } from '../shared/i18n/index';
import { sharedStyles } from '../shared/shared-styles';
import { cardStyles } from './styles';
import { discoverPrograms, getGlobalStatus } from '../shared/helpers';
import { renderHeader, renderErrorView, renderRunningView, renderProgramList } from './templates';
import { renderConfirmDialog } from '../shared/shared-templates';
import './card-editor';

@customElement('wateringhub-card')
export class WateringHubCard extends LitElement {
  static getConfigElement(): HTMLElement {
    return document.createElement('wateringhub-card-editor');
  }
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  @state() private _programEntities: string[] = [];
  @state() private _expandedProgram: string | null = null;
  @state() private _skipDropdownOpen: string | null = null;
  @state() private _toast = '';
  @state() private _confirmMessage = '';
  @state() private _confirmAction: (() => void) | null = null;
  @state() private _tick = 0;

  private _t: Translator = (key: string) => key;
  private _timerInterval: ReturnType<typeof setInterval> | null = null;
  private _unsubEvents: (() => void) | null = null;
  private readonly _boundCloseDropdown = this._closeSkipDropdown.bind(this);

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
    this._updateTimer(getGlobalStatus(hass));
    this._subscribeEvents();
  }

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this._boundCloseDropdown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._clearTimer();
    this._unsubscribeEvents();
    document.removeEventListener('click', this._boundCloseDropdown);
  }

  private _subscribeEvents(): void {
    if (this._unsubEvents || !this._hass?.connection) return;
    this._hass.connection
      .subscribeEvents(() => {
        // Force re-render on any wateringhub event
        this._tick++;
      }, 'wateringhub_event')
      .then((unsub) => {
        this._unsubEvents = unsub;
      });
  }

  private _unsubscribeEvents(): void {
    if (this._unsubEvents) {
      this._unsubEvents();
      this._unsubEvents = null;
    }
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

  private _requestConfirm(message: string, action: () => void): void {
    this._confirmMessage = message;
    this._confirmAction = action;
  }

  private _executeConfirm(): void {
    this._confirmAction?.();
    this._confirmAction = null;
    this._confirmMessage = '';
  }

  private _cancelConfirm(): void {
    this._confirmAction = null;
    this._confirmMessage = '';
  }

  private _stopAll(): void {
    this._requestConfirm(this._t('stop_confirm'), () => {
      this._hass.callService('wateringhub', 'stop_all', {});
    });
  }

  private _toggleSkipDropdown(entityId: string): void {
    this._skipDropdownOpen = this._skipDropdownOpen === entityId ? null : entityId;
  }

  private _showToast(msg: string): void {
    this._toast = msg;
    setTimeout(() => {
      this._toast = '';
    }, 3000);
  }

  private _handleSkip(entityId: string, days: number): void {
    const programId = entityId.replace('switch.wateringhub_', '');
    this._hass.callService('wateringhub', 'skip_program', { id: programId, days });
    this._skipDropdownOpen = null;
    this._showToast(this._t('skip.toast_paused', { count: days }));
  }

  private _handleCancelSkip(entityId: string): void {
    const programId = entityId.replace('switch.wateringhub_', '');
    this._hass.callService('wateringhub', 'skip_program', { id: programId, days: 0 });
    this._showToast(this._t('skip.toast_resumed'));
  }

  private _closeSkipDropdown(e: Event): void {
    if (!this._skipDropdownOpen) return;
    const path = e.composedPath();
    const isInside = path.some(
      (el) => el instanceof HTMLElement && el.classList?.contains('skip-dropdown-wrapper'),
    );
    if (!isInside) {
      this._skipDropdownOpen = null;
    }
  }

  render() {
    if (!this._hass || !this._config) {
      return html`<ha-card>${this._t('loading')}</ha-card>`;
    }

    const title = this._config.title ?? 'WateringHub';

    return html`
      <ha-card>
        ${renderHeader(title)} ${renderErrorView(this._hass, this._t)}
        ${renderRunningView(this._hass, () => this._stopAll(), this._t)}
        ${renderProgramList(
          this._hass,
          this._programEntities,
          this._expandedProgram,
          this._skipDropdownOpen,
          (id) => this._toggleExpand(id),
          (id) => this._toggleProgram(id),
          (id) => this._toggleSkipDropdown(id),
          (id, days) => this._handleSkip(id, days),
          (id) => this._handleCancelSkip(id),
          this._t,
        )}
        ${this._toast ? html`<div class="toast">${this._toast}</div>` : nothing}
        ${renderConfirmDialog(
          !!this._confirmAction,
          this._confirmMessage,
          () => this._executeConfirm(),
          () => this._cancelConfirm(),
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
