import { css } from 'lit';

export const editorStyles = css`
  .editor-root {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Section accordion */
  .editor-section {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    overflow: hidden;
  }
  .editor-section.warn {
    border-color: var(--warning-color);
  }
  .editor-section-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    cursor: pointer;
    background: var(--secondary-background-color);
    user-select: none;
  }
  .editor-section-header:hover {
    background: var(--divider-color);
  }
  .editor-section-label {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .editor-section-count {
    font-size: 12px;
    color: var(--secondary-text-color);
    padding: 2px 8px;
    border-radius: 10px;
    background: var(--card-background-color);
  }
  .editor-section.warn .editor-section-count {
    color: var(--warning-color);
  }
  .editor-section-body {
    padding: 12px;
    background: var(--card-background-color);
  }
  .chevron {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    transition: transform 0.2s;
  }
  .chevron.open {
    transform: rotate(180deg);
  }

  /* Supply chips */
  .supply-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .supply-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 10px;
    border-radius: 16px;
    background: var(--secondary-background-color);
    color: var(--primary-text-color);
    font-size: 12px;
    cursor: pointer;
  }
  .supply-chip ha-icon {
    --mdc-icon-size: 14px;
  }
  .supply-chip.chip-add {
    background: transparent;
    border: 1px dashed var(--divider-color);
    color: var(--secondary-text-color);
  }
  .supply-chip:hover {
    background: var(--divider-color);
  }
  .chip-close {
    background: none;
    border: none;
    cursor: pointer;
    padding: 2px;
    display: inline-flex;
    align-items: center;
    border-radius: 50%;
    color: var(--secondary-text-color);
  }
  .chip-close ha-icon {
    --mdc-icon-size: 14px;
  }

  /* Zone card */
  .zone-card {
    border: 1px solid var(--divider-color);
    border-radius: 8px;
    margin-bottom: 8px;
  }
  .zone-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 10px;
    cursor: pointer;
  }
  .zone-card-name {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
  }
  .zone-card-body {
    padding: 0 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  /* Valve row — stacked layout (icon+name on row 1, dropdowns below) */
  .valve-row-stacked {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
  }
  .valve-row-stacked.valve-row-unassigned {
    border-color: var(--warning-color);
  }
  .valve-row-head {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .valve-icon {
    --mdc-icon-size: 16px;
    color: var(--primary-color);
    flex-shrink: 0;
  }
  .valve-row-unassigned .valve-icon {
    color: var(--warning-color);
  }
  .valve-name {
    flex: 1;
    font-size: 13px;
    color: var(--primary-text-color);
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .valve-row-field {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .valve-row-field label {
    font-size: 12px;
    color: var(--secondary-text-color);
    min-width: 56px;
  }
  .valve-row-field select {
    flex: 1;
    padding: 6px 10px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    font-size: 13px;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }

  /* Inline name form (supply / zone edit) */
  .inline-form {
    border: 2px solid var(--primary-color);
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
  }

  /* Add form (entity picker section) */
  .add-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .add-form ha-entity-picker {
    width: 100%;
  }

  /* Action button (delete icons) */
  .action-btn {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    color: var(--secondary-text-color);
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
  }
  .action-btn ha-icon {
    --mdc-icon-size: 18px;
  }
  .action-btn:hover {
    color: var(--primary-text-color);
  }
  .action-btn.delete:hover {
    color: var(--error-color);
  }
  .list-item-actions {
    display: flex;
    gap: 4px;
    flex-shrink: 0;
  }

  /* Empty state */
  .empty-state {
    padding: 12px;
    color: var(--secondary-text-color);
    font-size: 13px;
    font-style: italic;
    text-align: center;
  }

  /* Info text */
  .info-sm {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Form bits — buttons / hints */
  .form-row {
    margin-bottom: 8px;
  }
  .form-label {
    font-size: 12px;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
    display: block;
  }
  .form-input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 12px;
    border: 1px solid var(--divider-color);
    border-radius: 6px;
    font-size: 14px;
    color: var(--primary-text-color);
    background: var(--card-background-color);
  }
  .form-actions {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
    margin-top: 8px;
  }
  .editor-global-actions {
    margin-top: 4px;
    padding: 8px 0;
    border-top: 1px solid var(--divider-color);
  }
  .btn {
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
  .btn-primary {
    background: var(--primary-color);
    color: white;
  }
  .btn-primary:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .btn-cancel {
    background: transparent;
    color: var(--secondary-text-color);
  }
  .add-btn {
    width: 100%;
    padding: 8px;
    border: 1px dashed var(--divider-color);
    border-radius: 8px;
    background: transparent;
    color: var(--secondary-text-color);
    font-size: 13px;
    cursor: pointer;
  }
  .add-btn:hover {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
`;
