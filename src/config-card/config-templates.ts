import { html, TemplateResult } from 'lit';
import type { Translator } from '../shared/types';

export { renderValvesTab } from './config-valves-tab';
export { renderZonesTab } from './config-zones-tab';
export { renderProgramsTab } from './config-programs-tab';
export type { ProgramFormState, ZoneFormState } from '../shared/types';

export function renderTabs(
  activeTab: string,
  onTabChange: (tab: string) => void,
  t: Translator,
): TemplateResult {
  const tabs = [
    { id: 'programs', label: t('config.tab_programs') },
    { id: 'zones', label: t('config.tab_zones') },
    { id: 'valves', label: t('config.tab_valves') },
  ];
  return html`
    <div class="tabs">
      ${tabs.map(
        (tab) => html`
          <div
            class="tab ${activeTab === tab.id ? 'active' : ''}"
            @click=${() => onTabChange(tab.id)}
          >
            ${tab.label}
          </div>
        `,
      )}
    </div>
  `;
}
