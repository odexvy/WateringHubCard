import { LitElement, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type {
  Hass,
  CardConfig,
  Translator,
  ZoneConfig,
  WaterSupply,
  ProgramSchedule,
  ValveFrequency,
} from '../shared/types';
import { getTranslator } from '../shared/i18n/index';
import { sharedStyles } from '../shared/shared-styles';
import { configStyles } from './config-styles';
import { generateId, getAvailableValves } from './config-helpers';
import {
  renderTabs,
  renderValvesTab,
  renderZonesTab,
  renderProgramsTab,
  renderWaterSuppliesTab,
  type ZoneFormState,
  type ProgramFormState,
  type WaterSupplyFormState,
} from './config-templates';
import { renderConfirmDialog } from '../shared/shared-templates';
import type { ValveAssignment } from './config-valves-tab';
import { valvesToAssignments } from './config-valves-tab';
import './config-editor';

@customElement('wateringhub-config-card')
export class WateringHubConfigCard extends LitElement {
  static getConfigElement(): HTMLElement {
    return document.createElement('wateringhub-config-editor');
  }
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  @state() private _activeTab = 'water_supplies';
  @state() private _editingZone: ZoneFormState | null = null;
  @state() private _toast = '';
  @state() private _confirmMessage = '';
  @state() private _confirmLabel = '';
  @state() private _confirmAction: (() => void) | null = null;
  @state() private _editingProgram: ProgramFormState | null = null;
  @state() private _editingWaterSupply: WaterSupplyFormState | null = null;
  @state() private _editingValves: import('./config-valves-tab').ValveAssignment[] | null = null;

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

  // ── Tab ────────────────────────────────────────────────

  private _setTab(tab: string): void {
    this._activeTab = tab;
    this._editingZone = null;
    this._editingProgram = null;
    this._editingWaterSupply = null;
  }

  // ── Zone CRUD ──────────────────────────────────────────

  private _newZone(): void {
    this._editingZone = { id: '', name: '', isNew: true };
  }

  private _editZone(zone: ZoneConfig): void {
    this._editingZone = { id: zone.id, name: zone.name, isNew: false };
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
    });
    this._editingZone = null;
    this._showToast(this._t('config.saved'));
  }

  private _deleteZone(zoneId: string): void {
    this._requestConfirm(
      this._t('config.confirm_delete_zone'),
      this._t('config.delete'),
      async () => {
        try {
          await this._hass.callService('wateringhub', 'delete_zone', { id: zoneId });
          this._showToast(this._t('config.deleted'));
        } catch {
          this._showToast(this._t('config.error_water_supply_in_use'));
        }
      },
    );
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

  private _deleteProgram(entityId: string): void {
    this._requestConfirm(
      this._t('config.confirm_delete_program'),
      this._t('config.delete'),
      async () => {
        const entity = this._hass.states[entityId];
        const programId = (entity?.attributes.program_id as string) ?? '';
        await this._hass.callService('wateringhub', 'delete_program', { id: programId });
        this._showToast(this._t('config.deleted'));
      },
    );
  }

  // ── Water Supply CRUD ────────────────────────────────────

  private _newWaterSupply(): void {
    this._editingWaterSupply = { id: '', name: '', isNew: true };
  }

  private _editWaterSupply(supply: WaterSupply): void {
    this._editingWaterSupply = { ...supply, isNew: false };
  }

  private _cancelWaterSupply(): void {
    this._editingWaterSupply = null;
  }

  private _updateWaterSupplyForm(form: WaterSupplyFormState): void {
    this._editingWaterSupply = form;
  }

  private async _saveWaterSupply(form: WaterSupplyFormState): Promise<void> {
    const id = form.isNew ? generateId(form.name) : form.id;
    const service = form.isNew ? 'create_water_supply' : 'update_water_supply';
    await this._hass.callService('wateringhub', service, { id, name: form.name });
    this._editingWaterSupply = null;
    this._showToast(this._t('config.saved'));
  }

  private _deleteWaterSupply(supplyId: string): void {
    this._requestConfirm(
      this._t('config.confirm_delete_water_supply'),
      this._t('config.delete'),
      async () => {
        try {
          await this._hass.callService('wateringhub', 'delete_water_supply', { id: supplyId });
          this._showToast(this._t('config.deleted'));
        } catch {
          this._showToast(this._t('config.error_water_supply_in_use'));
        }
      },
    );
  }

  // ── Valve assignment ────────────────────────────────────

  private _startEditValves(): void {
    this._editingValves = valvesToAssignments(getAvailableValves(this._hass));
  }

  private _updateValvesForm(valves: ValveAssignment[]): void {
    this._editingValves = valves;
  }

  private async _saveValves(): Promise<void> {
    if (!this._editingValves) return;
    await this._hass.callService('wateringhub', 'set_valves', {
      valves: this._editingValves.map((v) => ({
        entity_id: v.entity_id,
        name: v.name,
        water_supply_id: v.water_supply_id || null,
        zone_id: v.zone_id || null,
      })),
    });
    this._editingValves = null;
    this._showToast(this._t('config.saved'));
  }

  private _cancelEditValves(): void {
    this._editingValves = null;
  }

  private _deleteValveFromTab(entityId: string): void {
    this._requestConfirm(
      this._t('config.confirm_delete_valve'),
      this._t('config.delete'),
      async () => {
        const valves = getAvailableValves(this._hass)
          .filter((v) => v.entity_id !== entityId)
          .map((v) => ({
            entity_id: v.entity_id,
            name: v.name,
            water_supply_id: v.water_supply_id,
            zone_id: v.zone_id,
          }));
        await this._hass.callService('wateringhub', 'set_valves', { valves });
        this._showToast(this._t('config.deleted'));
      },
    );
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
        ${this._activeTab === 'valves'
          ? renderValvesTab(
              this._hass,
              this._editingValves,
              () => this._startEditValves(),
              (v) => this._updateValvesForm(v),
              () => this._saveValves(),
              () => this._cancelEditValves(),
              (id) => this._deleteValveFromTab(id),
              this._t,
            )
          : ''}
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
        ${this._activeTab === 'water_supplies'
          ? renderWaterSuppliesTab(
              this._hass,
              this._editingWaterSupply,
              (s) => this._editWaterSupply(s),
              (id) => this._deleteWaterSupply(id),
              () => this._newWaterSupply(),
              (f) => this._saveWaterSupply(f),
              () => this._cancelWaterSupply(),
              (f) => this._updateWaterSupplyForm(f),
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
        ${renderConfirmDialog(
          !!this._confirmAction,
          this._confirmMessage,
          this._confirmLabel,
          () => this._executeConfirm(),
          () => this._cancelConfirm(),
          this._t,
        )}
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
