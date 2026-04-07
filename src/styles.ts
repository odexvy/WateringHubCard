import { css } from 'lit';

export const cardStyles = css`
  /* Status badge */
  .status-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 12px;
    font-size: 13px;
    font-weight: 500;
    color: white;
  }
  .badge-idle {
    background: var(--success-color);
  }
  .badge-running {
    background: var(--warning-color);
    animation: pulse 2s ease-in-out infinite;
  }
  .badge-error {
    background: var(--error-color);
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  .info-item {
    font-size: 13px;
    color: var(--secondary-text-color);
  }

  /* Error view */
  .error-view {
    border: 1px solid var(--error-color);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 20px;
  }
  .error-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: var(--error-color);
    margin-bottom: 8px;
  }
  .error-title ha-icon {
    --mdc-icon-size: 20px;
    color: var(--error-color);
  }
  .error-message {
    font-size: 13px;
    color: var(--primary-text-color);
    padding: 8px 12px;
    background: var(--secondary-background-color);
    border-radius: 8px;
    margin-bottom: 8px;
    font-family: monospace;
  }
  .error-auto-stopped {
    font-size: 12px;
    color: var(--secondary-text-color);
    font-style: italic;
  }

  /* Running view */
  .running-view {
    border: 1px solid var(--divider-color);
    border-radius: 12px;
    padding: 16px;
    margin-bottom: 20px;
  }
  .running-zone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    margin-bottom: 12px;
  }
  .running-zone ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }
  .running-valve-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: var(--primary-text-color);
    margin-bottom: 8px;
  }
  .running-valve-row ha-icon {
    --mdc-icon-size: 18px;
    color: var(--primary-color);
  }
  .running-valve-name {
    flex: 1;
  }
  .running-valve-time {
    font-size: 13px;
    font-weight: 600;
    color: var(--primary-color);
    white-space: nowrap;
  }
  .running-bar-section {
    margin-bottom: 16px;
  }
  .running-bar {
    height: 8px;
    border-radius: 4px;
    background: var(--divider-color);
    overflow: hidden;
  }
  .running-bar-fill {
    height: 100%;
    border-radius: 4px;
    background: var(--primary-color);
  }
  .running-bar-fill.global {
    background: var(--warning-color);
  }
  .running-global {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .running-global-label {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Dry run badge */
  .badge-dry-run {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 12px;
    font-weight: 500;
    background: var(--secondary-background-color);
    color: var(--secondary-text-color);
    border: 1px dashed var(--divider-color);
    margin-bottom: 12px;
  }

  /* Valve sequence */
  .valve-sequence {
    margin-bottom: 12px;
  }
  .seq-zone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    padding: 8px 0 4px;
  }
  .seq-zone ha-icon {
    --mdc-icon-size: 16px;
    color: var(--secondary-text-color);
  }
  .seq-valve {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 0 6px 24px;
    font-size: 13px;
  }
  .seq-valve ha-icon {
    --mdc-icon-size: 18px;
    flex-shrink: 0;
  }
  .seq-valve-name {
    flex: 1;
  }
  .seq-valve-info {
    font-size: 12px;
    white-space: nowrap;
  }
  .seq-done {
    color: var(--secondary-text-color);
  }
  .seq-done ha-icon {
    color: var(--success-color);
  }
  .seq-running {
    color: var(--primary-text-color);
    font-weight: 500;
  }
  .seq-running ha-icon {
    color: var(--primary-color);
  }
  .seq-running .seq-valve-info {
    font-weight: 600;
    color: var(--primary-color);
  }
  .seq-pending {
    color: var(--secondary-text-color);
  }
  .seq-pending ha-icon {
    color: var(--disabled-text-color);
  }

  /* Programs */
  .program-wrapper {
    border-bottom: 1px solid var(--divider-color);
    padding: 4px 0;
  }
  .program-wrapper:last-child {
    border-bottom: none;
  }
  .program {
    display: flex;
    align-items: center;
    padding: 12px 0;
    gap: 12px;
  }
  .program-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 12px;
    flex: 1;
    min-width: 0;
  }
  .program-name {
    flex: 1;
    font-size: 15px;
    color: var(--primary-text-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .program-name.active {
    font-weight: 600;
  }
  .active-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--primary-color);
    flex-shrink: 0;
  }
  .chevron {
    transition: transform 0.2s;
    color: var(--secondary-text-color);
    flex-shrink: 0;
    --mdc-icon-size: 20px;
  }
  .chevron.open {
    transform: rotate(180deg);
  }

  /* Program recap (accordion content) */
  .program-recap {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    padding-left: 32px;
  }
  .program-recap.open {
    max-height: 500px;
    padding-bottom: 12px;
  }
  .recap-schedule {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--secondary-text-color);
    padding: 10px 0 6px;
  }
  .recap-zone {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--primary-text-color);
    font-weight: 500;
    padding: 8px 0 4px;
  }
  .recap-valve {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: var(--secondary-text-color);
    padding: 4px 0 4px 28px;
  }
  .recap-total {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: var(--primary-text-color);
    font-weight: 500;
    padding: 10px 0 4px;
    border-top: 1px solid var(--divider-color);
    margin-top: 6px;
  }
  .recap-schedule ha-icon,
  .recap-zone ha-icon,
  .recap-valve ha-icon,
  .recap-total ha-icon {
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
  }

  /* Stop button */
  .stop-btn {
    background: var(--error-color);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .stop-btn:hover {
    opacity: 0.85;
  }
  .stop-btn:active {
    opacity: 0.7;
  }
  .stop-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
