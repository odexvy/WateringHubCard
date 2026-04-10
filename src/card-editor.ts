import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type { Hass, CardConfig, Translator } from './types';
import { getTranslator } from './i18n/index';
import { sharedStyles } from './shared-styles';
import { renderFormRow } from './shared-templates';

@customElement('wateringhub-card-editor')
export class WateringHubCardEditor extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;

  private _t: Translator = (key: string) => key;

  static readonly styles = [sharedStyles];

  set hass(hass: Hass) {
    this._hass = hass;
    this._t = getTranslator(hass.language);
  }

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  private _titleChanged(e: InputEvent): void {
    const title = (e.target as HTMLInputElement).value;
    this._config = { ...this._config, title };
    this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: this._config } }));
  }

  render() {
    return html`
      ${renderFormRow(
        this._t('config.name'),
        html`<input
          class="form-input"
          .value=${this._config?.title ?? ''}
          @input=${this._titleChanged}
        />`,
      )}
    `;
  }
}
