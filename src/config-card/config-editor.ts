import { LitElement, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type { Hass, CardConfig, Translator, AvailableValve } from '../shared/types';
import { getTranslator } from '../shared/i18n/index';
import { sharedStyles } from '../shared/shared-styles';
import { editorStyles } from './editor-styles';
import { getAvailableValves, getWaterSupplies } from './config-helpers';
import {
  renderButton,
  renderAddButton,
  renderIconButton,
  renderConfirmDialog,
} from '../shared/shared-templates';

interface ValveFormEntry {
  entity_id: string;
  name: string;
  water_supply_id: string;
}

@customElement('wateringhub-config-editor')
export class WateringHubConfigEditor extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  @state() private _adding = false;
  @state() private _newEntityId = '';
  @state() private _newWaterSupplyId = '';
  @state() private _confirmMessage = '';
  @state() private _confirmLabel = '';
  @state() private _confirmAction: (() => void) | null = null;

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

  private _requestConfirm(message: string, label: string, action: () => void): void {
    this._confirmMessage = message;
    this._confirmLabel = label;
    this._confirmAction = action;
  }

  private _executeConfirm(): void {
    this._confirmAction?.();
    this._confirmAction = null;
    this._confirmMessage = '';
    this._confirmLabel = '';
  }

  private _cancelConfirm(): void {
    this._confirmAction = null;
    this._confirmMessage = '';
    this._confirmLabel = '';
  }

  private async _changeValveSupply(entityId: string, newSupplyId: string): Promise<void> {
    const valves = this._getValves().map((v) => ({
      entity_id: v.entity_id,
      name: v.name,
      water_supply_id: v.entity_id === entityId ? newSupplyId : v.water_supply_id,
    }));
    await this._setValves(valves);
  }

  private _deleteValve(entityId: string): void {
    this._requestConfirm(
      this._t('config.confirm_delete_valve'),
      this._t('config.delete'),
      async () => {
        const valves = this._getValves()
          .filter((v) => v.entity_id !== entityId)
          .map((v) => ({
            entity_id: v.entity_id,
            name: v.name,
            water_supply_id: v.water_supply_id,
          }));
        await this._setValves(valves);
      },
    );
  }

  private _startAdd(): void {
    this._adding = true;
    this._newEntityId = '';
    this._newWaterSupplyId = '';
  }

  private _onEntityPicked(e: CustomEvent): void {
    this._newEntityId = e.detail.value as string;
  }

  private _getFriendlyName(entityId: string): string {
    const entity = this._hass?.states[entityId];
    const friendly = entity?.attributes.friendly_name;
    return typeof friendly === 'string' ? friendly : entityId;
  }

  private async _confirmAdd(): Promise<void> {
    if (!this._newEntityId || !this._newWaterSupplyId) return;
    const name = this._getFriendlyName(this._newEntityId);
    const valves = [
      ...this._getValves().map((v) => ({
        entity_id: v.entity_id,
        name: v.name,
        water_supply_id: v.water_supply_id,
      })),
      { entity_id: this._newEntityId, name, water_supply_id: this._newWaterSupplyId },
    ];
    await this._setValves(valves);
    this._adding = false;
    this._newEntityId = '';
    this._newWaterSupplyId = '';
  }

  private _cancelAdd(): void {
    this._adding = false;
    this._newEntityId = '';
    this._newWaterSupplyId = '';
  }

  render() {
    const valves = this._getValves();
    const hasWaterSupplies = getWaterSupplies(this._hass).length > 0;
    const addValveButton = hasWaterSupplies
      ? renderAddButton(`+ ${this._t('config.add_valve')}`, () => this._startAdd())
      : html`<div class="empty-state">${this._t('config.no_water_supply_hint')}</div>`;

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
              <select
                class="form-select"
                style="width: auto; min-width: 120px;"
                .value=${v.water_supply_id}
                @change=${(e: Event) =>
                  this._changeValveSupply(v.entity_id, (e.target as HTMLSelectElement).value)}
              >
                ${getWaterSupplies(this._hass).map(
                  (s) => html`<option value=${s.id}>${s.name}</option>`,
                )}
              </select>
              ${renderIconButton('mdi:delete', () => this._deleteValve(v.entity_id), {
                title: this._t('config.delete'),
                className: 'action-btn delete',
              })}
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
                <div class="form-row">
                  <label class="form-label">${this._t('config.water_supply')}</label>
                  <select
                    class="form-select"
                    .value=${this._newWaterSupplyId}
                    @change=${(e: Event) => {
                      this._newWaterSupplyId = (e.target as HTMLSelectElement).value;
                    }}
                  >
                    <option value="">—</option>
                    ${getWaterSupplies(this._hass).map(
                      (s) => html`<option value=${s.id}>${s.name}</option>`,
                    )}
                  </select>
                </div>
                <div class="form-actions">
                  ${renderButton(this._t('config.cancel'), () => this._cancelAdd(), 'cancel')}
                  ${renderButton(this._t('config.save'), () => this._confirmAdd(), 'primary')}
                </div>
              </div>
            `
          : addValveButton}
        ${renderConfirmDialog(
          !!this._confirmAction,
          this._confirmMessage,
          this._confirmLabel,
          () => this._executeConfirm(),
          () => this._cancelConfirm(),
          this._t,
        )}
      </div>
    `;
  }
}
