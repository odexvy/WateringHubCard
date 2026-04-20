# Frontend Spec — set_valves centralise zone + arrivée (v0.0.23)

**Date:** 2026-04-13
**Backend:** WateringHub v0.0.23
**Statut:** Contrat API validé, prêt à implémenter

---

## Breaking Changes depuis v0.0.22

| Avant | Après |
|-------|-------|
| `set_valves [{ entity_id, name, water_supply_id }]` | `set_valves [{ entity_id, name, water_supply_id?, zone_id? }]` |
| `create_zone { id, name, valves[] }` | `create_zone { id, name }` (valves supprimé) |
| `update_zone { id, name?, valves?[] }` | `update_zone { id, name? }` (valves supprimé) |
| `delete_water_supply` erreur si vannes | Réassigne à null |
| `delete_zone` erreur si programmes | Réassigne zone_id à null sur vannes |
| `zones[].valves` dans sensor | Supprimé — dérivé de available_valves |
| `water_supply_id` obligatoire | Optionnel (null = pas d'arrivée) |

---

## Types modifiés

### `AvailableValve` — ajout zone_id, water_supply_id optionnel

```typescript
export interface AvailableValve {
  id: string;
  name: string;
  entity_id: string;
  water_supply_id: string | null;
  zone_id: string | null;
}
```

### `ZoneConfig` — suppression valves[]

```typescript
export interface ZoneConfig {
  id: string;
  name: string;
  // PAS de valves[] — dérivé de available_valves
}
```

---

## Nouveau helper

```typescript
function getValvesForZone(zoneId: string, valves: AvailableValve[]): AvailableValve[] {
  return valves.filter(v => v.zone_id === zoneId);
}
```

Remplace l'ancien accès à `zone.valves[]` dans les programmes.

---

## Config Card — 4 onglets

### Onglet Programmes (modifié)

Quand l'utilisateur sélectionne une zone dans le formulaire programme, les vannes disponibles = `available_valves.filter(v => v.zone_id === selectedZoneId)` au lieu de `zone.valves[]`.

### Onglet Zones (simplifié)

- CRUD : juste nom (id + name)
- Plus de checkboxes vannes
- Sous-texte de chaque zone : liste des vannes assignées (dérivé de available_valves)
- Delete : toujours réussit (vannes passent à zone_id: null)

### Onglet Arrivées d'eau (simplifié)

- CRUD : juste nom (id + name)
- Sous-texte : liste des vannes assignées
- Delete : toujours réussit (vannes passent à water_supply_id: null)
- Plus de try/catch ni toast erreur sur delete

### Onglet Vannes (enrichi — centre d'assignation)

Chaque vanne affiche :
- Nom + entity_id
- Dropdown zone (liste des zones + option "Aucune")
- Dropdown arrivée d'eau (liste des arrivées + option "Aucune")
- Bouton delete

Changement de zone/arrivée → appelle `set_valves` immédiatement avec toute la liste mise à jour.

---

## Texte descriptif par onglet

Chaque onglet a un petit texte d'aide en haut :

| Onglet | FR | EN |
|--------|----|----|
| Programmes | Créez des programmes d'arrosage avec un horaire et des zones. | Create watering programs with a schedule and zones. |
| Zones | Regroupez vos vannes par zone logique. | Group your valves by logical zone. |
| Arrivées d'eau | Définissez vos arrivées d'eau pour activer le parallélisme. | Define your water supplies to enable parallel execution. |
| Vannes | Configurez vos vannes et assignez-les à une zone et une arrivée d'eau. | Configure your valves and assign them to a zone and water supply. |

Clés i18n : `config.hint_programs`, `config.hint_zones`, `config.hint_water_supplies`, `config.hint_valves`

---

## Dashboard Card

Inchangé par rapport à l'implémentation v0.0.22 (active_valves, parallel timeline, etc.). Le seul impact est que `total_duration` est déjà calculé comme max par arrivée côté backend.

---

## Fichiers impactés

| Fichier | Modification |
|---------|-------------|
| `src/shared/types.ts` | AvailableValve: +zone_id, water_supply_id nullable. ZoneConfig: -valves[] |
| `src/shared/i18n/en.json` + `fr.json` | Ajouter 4 clés config.hint_* |
| `src/config-card/config-helpers.ts` | Ajouter getValvesForZone() |
| `src/config-card/config-zones-tab.ts` | Simplifier : CRUD nom only, sous-texte dérivé, plus de checkboxes |
| `src/config-card/config-water-supplies-tab.ts` | Simplifier delete (plus de try/catch), sous-texte dérivé |
| `src/config-card/config-valves-tab.ts` | Enrichir : dropdowns zone + arrivée par vanne |
| `src/config-card/config-programs-tab.ts` | Utiliser getValvesForZone() au lieu de zone.valves[] |
| `src/config-card/config-editor.ts` | Simplifier : retirer dropdown water_supply (assignation dans Vannes tab) |
| `src/config-card/wateringhub-config-card.ts` | Simplifier zone CRUD, simplifier water supply delete |
| `src/config-card/config-templates.ts` | Passer hint text aux tabs |
| `mockup/index.html` | Mettre à jour toutes les maquettes config |

---

## Verification

1. `yarn typecheck && yarn test && yarn build`
2. Test HA : CRUD zones (nom only), CRUD arrivées (nom only)
3. Test HA : onglet Vannes — dropdowns zone + arrivée fonctionnels
4. Test HA : programmes — vannes par zone dérivées correctement
5. Test HA : delete zone/arrivée → vannes passent à null, pas d'erreur
