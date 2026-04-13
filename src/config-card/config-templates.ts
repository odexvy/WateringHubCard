import { html, TemplateResult } from 'lit';
import type { Translator } from '../shared/types';

export { renderValvesTab } from './config-valves-tab';
export { renderZonesTab } from './config-zones-tab';
export { renderProgramsTab } from './config-programs-tab';
export { renderWaterSuppliesTab } from './config-water-supplies-tab';
export type { ProgramFormState, ZoneFormState, WaterSupplyFormState } from '../shared/types';

export function renderTabs(
  activeTab: string,
  onTabChange: (tab: string) => void,
  t: Translator,
): TemplateResult {
  const tabs = [
    { id: 'water_supplies', label: t('config.tab_water_supplies') },
    { id: 'zones', label: t('config.tab_zones') },
    { id: 'valves', label: t('config.tab_valves') },
    { id: 'programs', label: t('config.tab_programs') },
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
