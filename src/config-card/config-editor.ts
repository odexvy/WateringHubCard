import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type { Hass, CardConfig, Translator } from '../shared/types';
import { getTranslator } from '../shared/i18n/index';
import { sharedStyles } from '../shared/shared-styles';
import { editorStyles } from './editor-styles';

@customElement('wateringhub-config-editor')
export class WateringHubConfigEditor extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;

  private _t: Translator = (key: string) => key;

  static readonly styles = [sharedStyles, editorStyles];

  set hass(hass: Hass) {
    this._hass = hass;
    this._t = getTranslator(hass.language);
  }

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  render() {
    return html`
      <div class="editor-root">
        <div class="empty-state">${this._t('config.editor_managed_in_card')}</div>
      </div>
    `;
  }
}
