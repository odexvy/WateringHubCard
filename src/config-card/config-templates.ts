import { html, TemplateResult } from 'lit';
import type { Translator } from '../shared/types';

export { renderZonesTab, type ZonesTabCallbacks } from './config-zones-tab';
export { renderProgramsTab } from './config-programs-tab';
export type { ProgramFormState, ZoneFormState, WaterSupplyFormState } from '../shared/types';

export function renderTabs(
  activeTab: string,
  onTabChange: (tab: string) => void,
  t: Translator,
): TemplateResult {
  const tabs = [
    { id: 'programs', label: t('config.tab_programs') },
    { id: 'zones', label: t('config.tab_config') },
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
