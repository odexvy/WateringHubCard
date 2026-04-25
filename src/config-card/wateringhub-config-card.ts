import { LitElement, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type {
  Hass,
  CardConfig,
  Translator,
  ZoneConfig,
  WaterSupply,
  ZoneFormState,
  ProgramFormState,
  WaterSupplyFormState,
} from '../shared/types';
import {
  programFormFromEntity,
  programToServicePayload,
  hasEmptyCustomTimes,
} from './config-program-state';
import { getTranslator } from '../shared/i18n/index';
import { sharedStyles } from '../shared/shared-styles';
import { configStyles } from './config-styles';
import {
  generateId,
  getAvailableValves,
  valvesToAssignments,
  type ValveAssignment,
} from './config-helpers';
import {
  renderTabs,
  renderZonesTab,
  renderProgramsTab,
  type ZonesTabCallbacks,
} from './config-templates';
import { renderConfirmDialog } from '../shared/shared-templates';
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
  @state() private _confirmMessage = '';
  @state() private _confirmLabel = '';
  @state() private _confirmAction: (() => void) | null = null;
  @state() private _editingProgram: ProgramFormState | null = null;
  @state() private _editingWaterSupply: WaterSupplyFormState | null = null;
  @state() private _editingValves: ValveAssignment[] | null = null;
  @state() private _addingValve = false;
  @state() private _newValveEntityId = '';
  @state() private _newValveZoneId = '';
  @state() private _newValveSupplyId = '';

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
    this._addingValve = false;
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
      schedule: { times: ['06:00'] },
      zones: [],
      dry_run: false,
      isNew: true,
    };
  }

  private _editProgram(entityId: string): void {
    const entity = this._hass.states[entityId];
    if (!entity) return;
    this._editingProgram = programFormFromEntity(entity);
  }

  private _cancelProgram(): void {
    this._editingProgram = null;
  }

  private _updateProgramForm(form: ProgramFormState): void {
    this._editingProgram = form;
  }

  private async _saveProgram(form: ProgramFormState): Promise<void> {
    if (hasEmptyCustomTimes(form)) {
      this._showToast(this._t('config.valve_times_required'));
      return;
    }
    const id = form.isNew ? generateId(form.name) : form.id;
    const service = form.isNew ? 'create_program' : 'update_program';
    await this._hass.callService('wateringhub', service, {
      ...programToServicePayload(form, id),
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
        water_supply_id: v.water_supply_id,
        zone_id: v.zone_id,
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

  // ── Add new valve ───────────────────────────────────────

  private _startAddValve(): void {
    this._addingValve = true;
    this._newValveEntityId = '';
    this._newValveZoneId = '';
    this._newValveSupplyId = '';
  }

  private _cancelAddValve(): void {
    this._addingValve = false;
    this._newValveEntityId = '';
    this._newValveZoneId = '';
    this._newValveSupplyId = '';
  }

  private _updateNewValveEntity(id: string): void {
    this._newValveEntityId = id;
  }

  private _updateNewValveZone(id: string): void {
    this._newValveZoneId = id;
  }

  private _updateNewValveSupply(id: string): void {
    this._newValveSupplyId = id;
  }

  private async _saveNewValve(): Promise<void> {
    if (!this._newValveEntityId) {
      this._showToast(this._t('config.add_valve_pick_entity'));
      return;
    }
    const friendly = this._hass.states[this._newValveEntityId]?.attributes.friendly_name;
    const name = typeof friendly === 'string' ? friendly : this._newValveEntityId;
    const valves = [
      ...getAvailableValves(this._hass).map((v) => ({
        entity_id: v.entity_id,
        name: v.name,
        water_supply_id: v.water_supply_id,
        zone_id: v.zone_id,
      })),
      {
        entity_id: this._newValveEntityId,
        name,
        water_supply_id: this._newValveSupplyId || null,
        zone_id: this._newValveZoneId || null,
      },
    ];
    await this._hass.callService('wateringhub', 'set_valves', { valves });
    this._showToast(this._t('config.saved'));
    this._cancelAddValve();
  }

  private _zonesTabCallbacks(): ZonesTabCallbacks {
    return {
      editingSupply: this._editingWaterSupply,
      onNewSupply: () => this._newWaterSupply(),
      onEditSupply: (s) => this._editWaterSupply(s),
      onSaveSupply: (f) => this._saveWaterSupply(f),
      onCancelSupply: () => this._cancelWaterSupply(),
      onUpdateSupplyForm: (f) => this._updateWaterSupplyForm(f),
      onDeleteSupply: (id) => this._deleteWaterSupply(id),
      editingZone: this._editingZone,
      onNewZone: () => this._newZone(),
      onEditZone: (z) => this._editZone(z),
      onSaveZone: (f) => this._saveZone(f),
      onCancelZone: () => this._cancelZone(),
      onUpdateZoneForm: (f) => this._updateZoneForm(f),
      onDeleteZone: (id) => this._deleteZone(id),
      editingValves: this._editingValves,
      onStartEditValves: () => this._startEditValves(),
      onUpdateValves: (v) => this._updateValvesForm(v),
      onSaveValves: () => this._saveValves(),
      onCancelValves: () => this._cancelEditValves(),
      onDeleteValve: (id) => this._deleteValveFromTab(id),
      addingValve: this._addingValve,
      newValveEntityId: this._newValveEntityId,
      newValveZoneId: this._newValveZoneId,
      newValveSupplyId: this._newValveSupplyId,
      onStartAddValve: () => this._startAddValve(),
      onCancelAddValve: () => this._cancelAddValve(),
      onUpdateNewValveEntity: (id) => this._updateNewValveEntity(id),
      onUpdateNewValveZone: (id) => this._updateNewValveZone(id),
      onUpdateNewValveSupply: (id) => this._updateNewValveSupply(id),
      onSaveNewValve: () => this._saveNewValve(),
    };
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
        ${this._activeTab === 'zones'
          ? renderZonesTab(this._hass, this._zonesTabCallbacks(), this._t)
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
