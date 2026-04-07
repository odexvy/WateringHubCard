import { LitElement, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type { Hass, CardConfig, Translator, AvailableValve } from '../types';
import { getTranslator } from '../i18n/index';
import { sharedStyles } from '../shared-styles';
import { editorStyles } from './editor-styles';
import { getAvailableValves } from './config-helpers';

interface ValveFormEntry {
  entity_id: string;
  name: string;
}

@customElement('wateringhub-config-editor')
export class WateringHubConfigEditor extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  @state() private _adding = false;
  @state() private _newEntityId = '';
  @state() private _newName = '';

  private _t: Translator = (key: string) => key;

  static readonly styles = [sharedStyles, editorStyles];

  set hass(hass: Hass) {
    this._hass = hass;
    this._t = getTranslator(hass.language);
  }

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  private _getValves(): AvailableValve[] {
    if (!this._hass) return [];
    return getAvailableValves(this._hass);
  }

  private async _setValves(valves: ValveFormEntry[]): Promise<void> {
    await this._hass.callService('wateringhub', 'set_valves', { valves });
  }

  private async _deleteValve(entityId: string): Promise<void> {
    if (!confirm(this._t('config.confirm_delete_valve'))) return;
    const valves = this._getValves()
      .filter((v) => v.entity_id !== entityId)
      .map((v) => ({ entity_id: v.entity_id, name: v.name }));
    await this._setValves(valves);
  }

  private _startAdd(): void {
    this._adding = true;
    this._newEntityId = '';
    this._newName = '';
  }

  private _onEntityPicked(e: CustomEvent): void {
    const entityId = e.detail.value as string;
    this._newEntityId = entityId;
    if (entityId && this._hass.states[entityId]) {
      const friendly = this._hass.states[entityId].attributes.friendly_name;
      this._newName = typeof friendly === 'string' ? friendly : entityId;
    }
  }

  private async _confirmAdd(): Promise<void> {
    if (!this._newEntityId || !this._newName) return;
    const valves = [
      ...this._getValves().map((v) => ({ entity_id: v.entity_id, name: v.name })),
      { entity_id: this._newEntityId, name: this._newName },
    ];
    await this._setValves(valves);
    this._adding = false;
    this._newEntityId = '';
    this._newName = '';
  }

  private _cancelAdd(): void {
    this._adding = false;
  }

  render() {
    const valves = this._getValves();

    return html`
      <div class="editor-section">
        <span class="editor-label">${this._t('config.editor_valves')}</span>

        ${valves.length === 0 && !this._adding
          ? html`<div class="empty-state">${this._t('config.no_valves')}</div>`
          : nothing}
        ${valves.map(
          (v) => html`
            <div class="valve-item">
              <div class="valve-item-info">
                <div class="valve-item-name">${v.name}</div>
                <div class="valve-item-entity">${v.entity_id}</div>
              </div>
              <button
                class="delete-btn"
                @click=${() => this._deleteValve(v.entity_id)}
                title="${this._t('config.delete')}"
              >
                <ha-icon icon="mdi:delete"></ha-icon>
              </button>
            </div>
          `,
        )}
        ${this._adding
          ? html`
              <div class="add-form">
                <ha-entity-picker
                  .hass=${this._hass}
                  .includeDomains=${['switch']}
                  .value=${this._newEntityId}
                  @value-changed=${this._onEntityPicked}
                  allow-custom-entity
                ></ha-entity-picker>
                <input
                  class="form-input"
                  type="text"
                  .value=${this._newName}
                  placeholder="${this._t('config.valve_name')}"
                  @input=${(e: InputEvent) => {
                    this._newName = (e.target as HTMLInputElement).value;
                  }}
                />
                <div class="add-form-actions">
                  <button class="btn btn-cancel" @click=${() => this._cancelAdd()}>
                    ${this._t('config.cancel')}
                  </button>
                  <button class="btn btn-primary" @click=${() => this._confirmAdd()}>
                    ${this._t('config.save')}
                  </button>
                </div>
              </div>
            `
          : html`
              <button class="add-btn" @click=${() => this._startAdd()}>
                + ${this._t('config.add_valve')}
              </button>
            `}
      </div>
    `;
  }
}
