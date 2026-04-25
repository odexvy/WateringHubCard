import { LitElement, html, nothing, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import type {
  Hass,
  CardConfig,
  Translator,
  ZoneConfig,
  WaterSupply,
  WaterSupplyFormState,
  ZoneFormState,
} from '../shared/types';
import { getTranslator } from '../shared/i18n/index';
import { sharedStyles } from '../shared/shared-styles';
import { editorStyles } from './editor-styles';
import {
  getAvailableValves,
  getZones,
  getWaterSupplies,
  valvesToAssignments,
  generateId,
  type ValveAssignment,
} from './config-helpers';
import {
  renderButton,
  renderAddButton,
  renderIconButton,
  renderConfirmDialog,
  renderFormRow,
  renderFormActions,
} from '../shared/shared-templates';

interface SectionState {
  supplies: boolean;
  zones: boolean;
  unassigned: boolean;
  addValve: boolean;
}

@customElement('wateringhub-config-editor')
export class WateringHubConfigEditor extends LitElement {
  @state() private _config!: CardConfig;
  @state() private _hass!: Hass;
  // Add-valve form
  @state() private _newEntityId = '';
  @state() private _newZoneId = '';
  @state() private _newWaterSupplyId = '';
  // Inline edits
  @state() private _editingSupply: WaterSupplyFormState | null = null;
  @state() private _editingZone: ZoneFormState | null = null;
  @state() private _editingValves: ValveAssignment[] | null = null;
  @state() private _expandedZones: Set<string> = new Set();
  @state() private _sections: SectionState = {
    supplies: true,
    zones: true,
    unassigned: true,
    addValve: false,
  };
  // Confirm
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

  // ── Helpers ────────────────────────────────────────────

  private _toggleSection(key: keyof SectionState): void {
    this._sections = { ...this._sections, [key]: !this._sections[key] };
  }

  private _toggleZone(zoneId: string): void {
    const next = new Set(this._expandedZones);
    if (next.has(zoneId)) next.delete(zoneId);
    else next.add(zoneId);
    this._expandedZones = next;
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

  // ── Supply CRUD ────────────────────────────────────────

  private _newSupply(): void {
    this._editingSupply = { id: '', name: '', isNew: true };
  }

  private _editSupply(s: WaterSupply): void {
    this._editingSupply = { ...s, isNew: false };
  }

  private _cancelSupply(): void {
    this._editingSupply = null;
  }

  private _updateSupplyForm(form: WaterSupplyFormState): void {
    this._editingSupply = form;
  }

  private async _saveSupply(form: WaterSupplyFormState): Promise<void> {
    const id = form.isNew ? generateId(form.name) : form.id;
    const service = form.isNew ? 'create_water_supply' : 'update_water_supply';
    await this._hass.callService('wateringhub', service, { id, name: form.name });
    this._editingSupply = null;
  }

  private _deleteSupply(supplyId: string): void {
    this._requestConfirm(
      this._t('config.confirm_delete_water_supply'),
      this._t('config.delete'),
      async () => {
        try {
          await this._hass.callService('wateringhub', 'delete_water_supply', { id: supplyId });
        } catch {
          // Backend refuses if assigned valves exist — silently ignore (UI shows error nowhere here).
        }
      },
    );
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
    await this._hass.callService('wateringhub', service, { id, name: form.name });
    this._editingZone = null;
  }

  private _deleteZone(zoneId: string): void {
    this._requestConfirm(
      this._t('config.confirm_delete_zone'),
      this._t('config.delete'),
      async () => {
        try {
          await this._hass.callService('wateringhub', 'delete_zone', { id: zoneId });
        } catch {
          // ignore
        }
      },
    );
  }

  // ── Valve assignment ────────────────────────────────────

  private _startEditValves(): void {
    if (this._editingValves) return;
    this._editingValves = valvesToAssignments(getAvailableValves(this._hass));
  }

  private _updateValves(valves: ValveAssignment[]): void {
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
  }

  private _cancelEditValves(): void {
    this._editingValves = null;
  }

  private _deleteValve(entityId: string): void {
    this._requestConfirm(
      this._t('config.confirm_delete_valve'),
      this._t('config.delete'),
      async () => {
        const valves = (this._editingValves ?? valvesToAssignments(getAvailableValves(this._hass)))
          .filter((v) => v.entity_id !== entityId)
          .map((v) => ({
            entity_id: v.entity_id,
            name: v.name,
            water_supply_id: v.water_supply_id,
            zone_id: v.zone_id,
          }));
        await this._hass.callService('wateringhub', 'set_valves', { valves });
        this._editingValves = null;
      },
    );
  }

  // ── Add valve form ─────────────────────────────────────

  private _onEntityPicked(e: CustomEvent): void {
    this._newEntityId = e.detail.value as string;
  }

  private _getFriendlyName(entityId: string): string {
    const entity = this._hass?.states[entityId];
    const friendly = entity?.attributes.friendly_name;
    return typeof friendly === 'string' ? friendly : entityId;
  }

  private async _confirmAddValve(): Promise<void> {
    if (!this._newEntityId || !this._newZoneId || !this._newWaterSupplyId) return;
    const name = this._getFriendlyName(this._newEntityId);
    const valves = [
      ...getAvailableValves(this._hass).map((v) => ({
        entity_id: v.entity_id,
        name: v.name,
        water_supply_id: v.water_supply_id,
        zone_id: v.zone_id,
      })),
      {
        entity_id: this._newEntityId,
        name,
        water_supply_id: this._newWaterSupplyId,
        zone_id: this._newZoneId,
      },
    ];
    await this._hass.callService('wateringhub', 'set_valves', { valves });
    this._resetAddValve();
  }

  private _resetAddValve(): void {
    this._newEntityId = '';
    this._newZoneId = '';
    this._newWaterSupplyId = '';
    this._sections = { ...this._sections, addValve: false };
  }

  // ── Render ─────────────────────────────────────────────

  render(): TemplateResult {
    if (!this._hass) return html``;
    const supplies = getWaterSupplies(this._hass);
    const zones = getZones(this._hass);
    const valves = getAvailableValves(this._hass);
    const valveView: ValveAssignment[] = this._editingValves ?? valvesToAssignments(valves);
    const isEditingValves = this._editingValves !== null;
    const allValid = isEditingValves
      ? valveView.every((v) => v.zone_id && v.water_supply_id)
      : false;
    const unassigned = valveView.filter((v) => !v.zone_id);

    return html`
      <div class="editor-root">
        ${this._renderSection(
          'supplies',
          this._t('config.editor_section_supplies'),
          supplies.length,
          this._renderSuppliesBody(supplies),
        )}
        ${this._renderSection(
          'zones',
          this._t('config.editor_section_zones'),
          zones.length,
          this._renderZonesBody(zones, valveView, supplies),
        )}
        ${unassigned.length > 0
          ? this._renderSection(
              'unassigned',
              this._t('config.editor_section_unassigned'),
              unassigned.length,
              this._renderUnassignedBody(unassigned, zones, supplies),
              true,
            )
          : nothing}
        ${this._renderSection(
          'addValve',
          this._t('config.editor_section_add_valve'),
          null,
          this._renderAddValveBody(zones, supplies),
        )}
        ${isEditingValves
          ? html`
              <div class="form-actions editor-global-actions">
                <button class="btn btn-cancel" @click=${() => this._cancelEditValves()}>
                  ${this._t('config.cancel')}
                </button>
                <button
                  class="btn btn-primary"
                  ?disabled=${!allValid}
                  @click=${() => this._saveValves()}
                >
                  ${this._t('config.save')}
                </button>
              </div>
            `
          : nothing}
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

  // ── Section header ──────────────────────────────────────

  private _renderSection(
    key: keyof SectionState,
    label: string,
    count: number | null,
    body: TemplateResult,
    warn = false,
  ): TemplateResult {
    const expanded = this._sections[key];
    return html`
      <div class="editor-section ${warn ? 'warn' : ''}">
        <div class="editor-section-header" @click=${() => this._toggleSection(key)}>
          <ha-icon class="chevron ${expanded ? 'open' : ''}" icon="mdi:chevron-down"></ha-icon>
          <span class="editor-section-label">${label}</span>
          ${count !== null ? html`<span class="editor-section-count">${count}</span>` : nothing}
        </div>
        ${expanded ? html`<div class="editor-section-body">${body}</div>` : nothing}
      </div>
    `;
  }

  // ── Supplies body ──────────────────────────────────────

  private _renderSuppliesBody(supplies: WaterSupply[]): TemplateResult {
    if (this._editingSupply) {
      return this._renderNameForm(
        this._editingSupply.name,
        (name) => this._updateSupplyForm({ ...this._editingSupply!, name }),
        () => this._saveSupply(this._editingSupply!),
        () => this._cancelSupply(),
      );
    }
    return html`
      <div class="supply-chips">
        ${supplies.map(
          (s) => html`
            <span class="supply-chip" @click=${() => this._editSupply(s)}>
              <ha-icon icon="mdi:water-pump"></ha-icon>
              ${s.name}
              <span
                class="chip-close"
                @click=${(e: Event) => {
                  e.stopPropagation();
                  this._deleteSupply(s.id);
                }}
              >
                <ha-icon icon="mdi:close"></ha-icon>
              </span>
            </span>
          `,
        )}
        <span class="supply-chip chip-add" @click=${() => this._newSupply()}>
          + ${this._t('config.new_water_supply')}
        </span>
      </div>
    `;
  }

  // ── Zones body ─────────────────────────────────────────

  private _renderZonesBody(
    zones: ZoneConfig[],
    valveView: ValveAssignment[],
    supplies: WaterSupply[],
  ): TemplateResult {
    return html`
      ${zones.length === 0 && !this._editingZone?.isNew
        ? html`<div class="empty-state">${this._t('config.no_zones')}</div>`
        : nothing}
      ${zones.map((zone) =>
        this._editingZone?.id === zone.id
          ? this._renderNameForm(
              this._editingZone.name,
              (name) => this._updateZoneForm({ ...this._editingZone!, name }),
              () => this._saveZone(this._editingZone!),
              () => this._cancelZone(),
            )
          : this._renderZoneCard(zone, valveView, zones, supplies),
      )}
      ${this._editingZone?.isNew
        ? this._renderNameForm(
            this._editingZone.name,
            (name) => this._updateZoneForm({ ...this._editingZone!, name }),
            () => this._saveZone(this._editingZone!),
            () => this._cancelZone(),
          )
        : nothing}
      ${this._editingZone
        ? nothing
        : renderAddButton(`+ ${this._t('config.new_zone')}`, () => this._newZone())}
    `;
  }

  private _renderZoneCard(
    zone: ZoneConfig,
    valveView: ValveAssignment[],
    zones: ZoneConfig[],
    supplies: WaterSupply[],
  ): TemplateResult {
    const zoneValves = valveView.filter((v) => v.zone_id === zone.id);
    const expanded = this._expandedZones.has(zone.id);
    return html`
      <div class="zone-card">
        <div class="zone-card-header" @click=${() => this._toggleZone(zone.id)}>
          <ha-icon class="chevron ${expanded ? 'open' : ''}" icon="mdi:chevron-down"></ha-icon>
          <span class="zone-card-name">${zone.name}</span>
          <span class="info-sm">(${zoneValves.length})</span>
          <div class="list-item-actions" @click=${(e: Event) => e.stopPropagation()}>
            ${renderIconButton('mdi:pencil', () => this._editZone(zone), {
              className: 'action-btn',
              title: this._t('config.edit'),
            })}
            ${renderIconButton('mdi:delete', () => this._deleteZone(zone.id), {
              className: 'action-btn delete',
              title: this._t('config.delete'),
            })}
          </div>
        </div>
        ${expanded
          ? html`
              <div class="zone-card-body">
                ${zoneValves.length === 0
                  ? html`<div class="info-sm" style="padding:6px 0;">
                      ${this._t('config.no_valves_in_zone')}
                    </div>`
                  : zoneValves.map((v) => this._renderValveRow(v, zones, supplies, false))}
              </div>
            `
          : nothing}
      </div>
    `;
  }

  // ── Unassigned body ────────────────────────────────────

  private _renderUnassignedBody(
    unassigned: ValveAssignment[],
    zones: ZoneConfig[],
    supplies: WaterSupply[],
  ): TemplateResult {
    return html` ${unassigned.map((v) => this._renderValveRow(v, zones, supplies, true))} `;
  }

  // ── Valve row (stacked layout) ────────────────────────

  private _renderValveRow(
    v: ValveAssignment,
    zones: ZoneConfig[],
    supplies: WaterSupply[],
    isUnassigned: boolean,
  ): TemplateResult {
    const zoneEmpty = !v.zone_id;
    const supplyEmpty = !v.water_supply_id;
    const errorBorder = 'border-color: var(--error-color);';
    const changeZone = (val: string) => {
      this._startEditValves();
      const updated = (this._editingValves ?? [v]).map((ev) =>
        ev.entity_id === v.entity_id ? { ...ev, zone_id: val || null } : ev,
      );
      this._updateValves(updated);
    };
    const changeSupply = (val: string) => {
      this._startEditValves();
      const updated = (this._editingValves ?? [v]).map((ev) =>
        ev.entity_id === v.entity_id ? { ...ev, water_supply_id: val || null } : ev,
      );
      this._updateValves(updated);
    };

    return html`
      <div class="valve-row-stacked ${isUnassigned ? 'valve-row-unassigned' : ''}">
        <div class="valve-row-head">
          <ha-icon
            class="valve-icon"
            icon=${isUnassigned ? 'mdi:alert-circle-outline' : 'mdi:valve'}
          ></ha-icon>
          <span class="valve-name">${v.name}</span>
          ${renderIconButton('mdi:delete', () => this._deleteValve(v.entity_id), {
            className: 'action-btn delete',
            title: this._t('config.delete'),
          })}
        </div>
        <div class="valve-row-field">
          <label>${this._t('config.tab_zones')}</label>
          <select
            class="form-select"
            style=${zoneEmpty ? errorBorder : ''}
            @change=${(e: Event) => changeZone((e.target as HTMLSelectElement).value)}
          >
            <option value="" ?selected=${!v.zone_id}>${this._t('config.none')}</option>
            ${zones.map(
              (z) => html`<option value=${z.id} ?selected=${z.id === v.zone_id}>${z.name}</option>`,
            )}
          </select>
        </div>
        <div class="valve-row-field">
          <label>${this._t('config.tab_water_supplies')}</label>
          <select
            class="form-select"
            style=${supplyEmpty ? errorBorder : ''}
            @change=${(e: Event) => changeSupply((e.target as HTMLSelectElement).value)}
          >
            <option value="" ?selected=${!v.water_supply_id}>${this._t('config.none')}</option>
            ${supplies.map(
              (s) =>
                html`<option value=${s.id} ?selected=${s.id === v.water_supply_id}>
                  ${s.name}
                </option>`,
            )}
          </select>
        </div>
      </div>
    `;
  }

  // ── Add valve body ──────────────────────────────────────

  private _renderAddValveBody(zones: ZoneConfig[], supplies: WaterSupply[]): TemplateResult {
    if (zones.length === 0 || supplies.length === 0) {
      return html`<div class="empty-state">${this._t('config.hint_valves_prereq')}</div>`;
    }
    return html`
      <div class="add-form">
        <ha-entity-picker
          .hass=${this._hass}
          .includeDomains=${['switch']}
          .value=${this._newEntityId}
          @value-changed=${this._onEntityPicked}
          allow-custom-entity
        ></ha-entity-picker>
        <div class="valve-row-field">
          <label>${this._t('config.tab_zones')}</label>
          <select
            class="form-select"
            .value=${this._newZoneId}
            @change=${(e: Event) => {
              this._newZoneId = (e.target as HTMLSelectElement).value;
            }}
          >
            <option value="">${this._t('config.none')}</option>
            ${zones.map(
              (z) =>
                html`<option value=${z.id} ?selected=${z.id === this._newZoneId}>
                  ${z.name}
                </option>`,
            )}
          </select>
        </div>
        <div class="valve-row-field">
          <label>${this._t('config.tab_water_supplies')}</label>
          <select
            class="form-select"
            .value=${this._newWaterSupplyId}
            @change=${(e: Event) => {
              this._newWaterSupplyId = (e.target as HTMLSelectElement).value;
            }}
          >
            <option value="">${this._t('config.none')}</option>
            ${supplies.map(
              (s) =>
                html`<option value=${s.id} ?selected=${s.id === this._newWaterSupplyId}>
                  ${s.name}
                </option>`,
            )}
          </select>
        </div>
        <div class="form-actions">
          ${renderButton(this._t('config.cancel'), () => this._resetAddValve(), 'cancel')}
          ${renderButton(this._t('config.save'), () => this._confirmAddValve(), 'primary')}
        </div>
      </div>
    `;
  }

  // ── Inline name form (supply / zone) ────────────────────

  private _renderNameForm(
    name: string,
    onChange: (name: string) => void,
    onSave: () => void,
    onCancel: () => void,
  ): TemplateResult {
    return html`
      <div class="inline-form">
        ${renderFormRow(
          this._t('config.name'),
          html`<input
            class="form-input"
            .value=${name}
            @input=${(e: InputEvent) => onChange((e.target as HTMLInputElement).value)}
          />`,
        )}
        ${renderFormActions(onCancel, onSave, this._t)}
      </div>
    `;
  }
}
