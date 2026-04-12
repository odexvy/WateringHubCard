import { LitElement, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type {
  Hass,
  CardConfig,
  Translator,
  ZoneConfig,
  ProgramSchedule,
  ValveFrequency,
} from '../shared/types';
import { getTranslator } from '../shared/i18n/index';
import { sharedStyles } from '../shared/shared-styles';
import { configStyles } from './config-styles';
import { generateId } from './config-helpers';
import {
  renderTabs,
  renderValvesTab,
  renderZonesTab,
  renderProgramsTab,
  type ZoneFormState,
  type ProgramFormState,
} from './config-templates';
import './config-editor';

@customElement('wateringhub-config-card')
export class WateringHubConfigCard extends LitElement {
  static getConfigElement(): HTMLElement {
    return document.createElement('wateringhub-config-editor');
  }
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  @state() private _activeTab = 'programs';
  @state() private _editingZone: ZoneFormState | null = null;
  @state() private _toast = '';
  @state() private _editingProgram: ProgramFormState | null = null;

  private _t: Translator = (key: string) => key;

  static readonly styles = [sharedStyles, configStyles];

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  set hass(hass: Hass) {
    this._hass = hass;
    this._t = getTranslator(hass.language);
  }

  getCardSize(): number {
    return 5;
  }

  private _showToast(msg: string): void {
    this._toast = msg;
    setTimeout(() => {
      this._toast = '';
    }, 3000);
  }

  // ── Tab ────────────────────────────────────────────────

  private _setTab(tab: string): void {
    this._activeTab = tab;
    this._editingZone = null;
    this._editingProgram = null;
  }

  // ── Zone CRUD ──────────────────────────────────────────

  private _newZone(): void {
    this._editingZone = { id: '', name: '', valves: [], isNew: true };
  }

  private _editZone(zone: ZoneConfig): void {
    this._editingZone = { id: zone.id, name: zone.name, valves: [...zone.valves], isNew: false };
  }

  private _cancelZone(): void {
    this._editingZone = null;
  }

  private _updateZoneForm(form: ZoneFormState): void {
    this._editingZone = form;
  }

  private async _saveZone(form: ZoneFormState): Promise<void> {
    const id = form.isNew ? generateId(form.name) : form.id;
    const service = form.isNew ? 'create_zone' : 'update_zone';
    await this._hass.callService('wateringhub', service, {
      id,
      name: form.name,
      valves: form.valves,
    });
    this._editingZone = null;
    this._showToast(this._t('config.saved'));
  }

  private async _deleteZone(zoneId: string): Promise<void> {
    if (confirm(this._t('config.confirm_delete_zone'))) {
      await this._hass.callService('wateringhub', 'delete_zone', { id: zoneId });
      this._showToast(this._t('config.deleted'));
    }
  }

  // ── Program CRUD ───────────────────────────────────────

  private _newProgram(): void {
    this._editingProgram = {
      id: '',
      name: '',
      schedule: { time: '06:00' },
      zones: [],
      dry_run: false,
      isNew: true,
    };
  }

  private _editProgram(entityId: string): void {
    const entity = this._hass.states[entityId];
    if (!entity) return;
    const attrs = entity.attributes;
    const programId = (attrs.program_id as string) ?? '';
    const schedule = (attrs.schedule as ProgramSchedule) ?? { time: '06:00' };
    const zones = (
      (attrs.zones as Array<{
        zone_id: string;
        valves: Array<{ valve_id: string; duration: number; frequency?: ValveFrequency }>;
      }>) ?? []
    ).map((z) => ({
      zone_id: z.zone_id,
      valves: z.valves.map((v) => ({
        valve_id: v.valve_id,
        duration: v.duration,
        frequency: v.frequency,
      })),
    }));

    this._editingProgram = {
      id: programId,
      name: typeof attrs.friendly_name === 'string' ? attrs.friendly_name : programId,
      schedule,
      zones,
      dry_run: attrs.dry_run === true,
      isNew: false,
    };
  }

  private _cancelProgram(): void {
    this._editingProgram = null;
  }

  private _updateProgramForm(form: ProgramFormState): void {
    this._editingProgram = form;
  }

  private async _saveProgram(form: ProgramFormState): Promise<void> {
    const id = form.isNew ? generateId(form.name) : form.id;
    const service = form.isNew ? 'create_program' : 'update_program';
    await this._hass.callService('wateringhub', service, {
      id,
      name: form.name,
      schedule: form.schedule,
      dry_run: form.dry_run,
      zones: form.zones.map((z) => ({
        zone_id: z.zone_id,
        valves: z.valves.map((v) => ({
          valve_id: v.valve_id,
          duration: v.duration,
          ...(v.frequency ? { frequency: v.frequency } : {}),
        })),
      })),
    });
    this._editingProgram = null;
    this._showToast(this._t('config.saved'));
  }

  private async _deleteProgram(entityId: string): Promise<void> {
    if (confirm(this._t('config.confirm_delete_program'))) {
      const entity = this._hass.states[entityId];
      const programId = (entity?.attributes.program_id as string) ?? '';
      await this._hass.callService('wateringhub', 'delete_program', { id: programId });
      this._showToast(this._t('config.deleted'));
    }
  }

  // ── Render ─────────────────────────────────────────────

  render() {
    if (!this._hass || !this._config) {
      return html`<ha-card>${this._t('loading')}</ha-card>`;
    }

    return html`
      <ha-card>
        <div class="header"><span class="title">${this._t('config.title')}</span></div>
        ${renderTabs(this._activeTab, (tab) => this._setTab(tab), this._t)}
        ${this._activeTab === 'valves' ? renderValvesTab(this._hass, this._t) : ''}
        ${this._activeTab === 'zones'
          ? renderZonesTab(
              this._hass,
              this._editingZone,
              (z) => this._editZone(z),
              (id) => this._deleteZone(id),
              () => this._newZone(),
              (f) => this._saveZone(f),
              () => this._cancelZone(),
              (f) => this._updateZoneForm(f),
              this._t,
            )
          : ''}
        ${this._activeTab === 'programs'
          ? renderProgramsTab(
              this._hass,
              this._editingProgram,
              (id) => this._editProgram(id),
              (id) => this._deleteProgram(id),
              () => this._newProgram(),
              (f) => this._saveProgram(f),
              () => this._cancelProgram(),
              (f) => this._updateProgramForm(f),
              this._t,
            )
          : ''}
        ${this._toast ? html`<div class="toast">${this._toast}</div>` : nothing}
      </ha-card>
    `;
  }
}

// Register in HA card picker
globalThis.customCards = globalThis.customCards || [];
globalThis.customCards.push({
  type: 'wateringhub-config-card',
  name: 'WateringHub Config Card',
  description: 'Configuration card for WateringHub zones and programs',
});
