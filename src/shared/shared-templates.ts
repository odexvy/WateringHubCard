import { html, TemplateResult } from 'lit';
import type { Translator } from './types';

// ── Badge Component ─────────────────────────────────────

export type BadgeType = 'idle' | 'disabled' | 'skipped' | 'running' | 'dry-run';

export function renderBadge(type: BadgeType, label: string): TemplateResult {
  return html`<span class="badge-sm badge-${type}">${label}</span>`;
}

// ── Button Components ───────────────────────────────────

export function renderButton(
  label: string,
  onClick: () => void,
  variant: 'primary' | 'cancel' = 'primary',
): TemplateResult {
  return html`<button class="btn btn-${variant}" @click=${onClick}>${label}</button>`;
}

export function renderIconButton(
  icon: string,
  onClick: () => void,
  options?: { title?: string; className?: string },
): TemplateResult {
  return html`
    <button
      class=${options?.className ?? 'action-btn'}
      @click=${onClick}
      title=${options?.title ?? ''}
    >
      <ha-icon icon=${icon}></ha-icon>
    </button>
  `;
}

export function renderAddButton(label: string, onClick: () => void): TemplateResult {
  return html`<button class="add-btn" @click=${onClick}>${label}</button>`;
}

export function renderFormActions(
  onCancel: () => void,
  onSave: () => void,
  t: Translator,
): TemplateResult {
  return html`
    <div class="form-actions">
      ${renderButton(t('config.cancel'), onCancel, 'cancel')}
      ${renderButton(t('config.save'), onSave, 'primary')}
    </div>
  `;
}

// ── Form Components ─────────────────────────────────────

export function renderFormRow(label: string, input: TemplateResult): TemplateResult {
  return html`
    <div class="form-row">
      <label class="form-label">${label}</label>
      ${input}
    </div>
  `;
}

// ── List Item Component ─────────────────────────────────

export function renderReadOnlyListItem(
  name: string | TemplateResult,
  sub: string | TemplateResult,
): TemplateResult {
  return html`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${name}</div>
          <div class="list-item-sub">${sub}</div>
        </div>
      </div>
    </div>
  `;
}

export function renderListItem(
  name: string | TemplateResult,
  sub: string | TemplateResult,
  onEdit: () => void,
  onDelete: () => void,
  t: Translator,
): TemplateResult {
  return html`
    <div class="list-item">
      <div class="list-item-header">
        <div>
          <div class="list-item-name">${name}</div>
          <div class="list-item-sub">${sub}</div>
        </div>
        <div class="list-item-actions">
          ${renderIconButton('mdi:pencil', onEdit, { title: t('config.edit') })}
          ${renderIconButton('mdi:delete', onDelete, {
            title: t('config.delete'),
            className: 'action-btn delete',
          })}
        </div>
      </div>
    </div>
  `;
}

// ── Confirm Dialog Component ────────────────────────────

export function renderConfirmDialog(
  open: boolean,
  message: string,
  confirmLabel: string,
  onConfirm: () => void,
  onCancel: () => void,
  t: Translator,
): TemplateResult {
  if (!open) return html``;
  return html`
    <div class="confirm-overlay" @click=${onCancel}>
      <div class="confirm-dialog" @click=${(e: Event) => e.stopPropagation()}>
        <div class="confirm-message">${message}</div>
        <div class="confirm-actions">
          <button class="btn btn-cancel" @click=${onCancel}>${t('config.cancel')}</button>
          <button class="btn btn-danger" @click=${onConfirm}>${confirmLabel}</button>
        </div>
      </div>
    </div>
  `;
}
