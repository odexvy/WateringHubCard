import { css } from 'lit';

export const cardStyles = css`
  ha-card {
    padding: 16px;
  }

  /* Header */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  /* Status badge */
  .status-row {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
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

  /* Programs */
  .program {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid var(--divider-color);
    gap: 12px;
  }
  .program:last-child {
    border-bottom: none;
  }
  .program-name {
    flex: 1;
    font-size: 15px;
    color: var(--primary-text-color);
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

  /* No programs */
  .no-programs {
    text-align: center;
    padding: 24px;
    color: var(--secondary-text-color);
    font-size: 14px;
  }

  /* Stop button */
  .stop-btn {
    background: var(--error-color);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 14px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
  .stop-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
