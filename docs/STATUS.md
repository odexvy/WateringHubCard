# WateringHub Card — Statut du projet

**Date :** 2026-04-07
**Version :** 0.0.12
**Branche :** master

---

## Les deux cards

Le repo contient **deux custom cards** dans un seul bundle :

| Card                      | Usage                                                    | Config YAML                            |
| ------------------------- | -------------------------------------------------------- | -------------------------------------- |
| `wateringhub-card`        | Dashboard : affiche les programmes, statut, running view | `type: custom:wateringhub-card`        |
| `wateringhub-config-card` | Gestion : CRUD zones et programmes via services HA       | `type: custom:wateringhub-config-card` |

---

## Dashboard Card (`wateringhub-card`)

### Fonctionnalités

- **Auto-discovery** — scanne `hass.states` pour les entités `switch.wateringhub_*`, aucune config nécessaire
- **Liste des programmes** — affiche chaque programme avec son nom + toggle switch
- **Recap programme (accordéon)** — chevron à gauche pour déplier/replier, un seul ouvert à la fois :
  - Schedule : daily / every_n_days / weekdays avec l'heure
  - Zones avec icône HA `mdi:map-marker`
  - Vannes par zone avec icône `mdi:water` + durée
  - Durée totale avec icône `mdi:timer-outline`
- **Running view** — bloc dédié affiché quand status=running :
  - Zone en cours (icône map-marker)
  - Vanne active + countdown temps restant (calculé depuis `current_valve_start`)
  - Barre de progression de la vanne courante (couleur primary)
  - Progression globale "Vanne X sur Y" (barre couleur warning)
- **Error view** — bloc dédié affiché quand status=error :
  - Nom du programme en erreur (résolu via friendly_name du switch)
  - Message d'erreur du backend (affiché en monospace)
  - Message "Toutes les vannes ont été fermées automatiquement"
- **Badge de statut global** — idle (vert) / running (orange, animation pulse) / error (rouge)
- **Arrêt d'urgence** — bouton Stop All visible uniquement quand running, avec dialogue de confirmation
- **i18n** — Français + Anglais, détecté automatiquement depuis `hass.language`, fallback EN

### Les 3 états

| Status  | Affichage                                                                      |
| ------- | ------------------------------------------------------------------------------ |
| idle    | Badge vert "En attente", next_run, last_run, liste des programmes              |
| running | Badge orange animé "En cours : [nom]", running view, bouton Stop All           |
| error   | Badge rouge "Erreur", error view (nom programme, message erreur, auto-stopped) |

---

## Config Card (`wateringhub-config-card`)

### Fonctionnalités

- **Titre** — header "WateringHub" harmonisé avec la dashboard card
- **3 onglets** : Programmes | Zones | Vannes (vannes en dernier, lecture seule)
- **Onglet Programmes** (défaut) — CRUD inline :
  - Créer : nom + schedule (type/heure/options) + sélection zones + durée par vanne
  - Modifier : formulaire inline pré-rempli
  - Supprimer : confirmation → `wateringhub.delete_program`
- **Onglet Zones** — CRUD inline :
  - Créer : nom + sélection de vanves (checkboxes)
  - Modifier : formulaire inline pré-rempli
  - Supprimer : confirmation → `wateringhub.delete_zone`
- **Onglet Vannes** — lecture seule, liste des valves disponibles (depuis `available_valves` sur sensor status)
- **Formulaires inline** : s'ouvrent en place dans la liste, un seul ouvert à la fois
- **i18n** : FR + EN, mêmes fichiers que la dashboard card

### Modèle de données

- **Zone** = groupement logique (nom + liste de valve IDs, PAS de durée)
- **Programme** = schedule + zones sélectionnées + durée par vanne par programme
- Une même vanne peut avoir des durées différentes selon le programme

### Services backend utilisés

| Service                      | Params                             | Usage                  |
| ---------------------------- | ---------------------------------- | ---------------------- |
| `wateringhub.create_zone`    | `{ id, name, valves }`             | Créer une zone         |
| `wateringhub.update_zone`    | `{ id, name?, valves? }`           | Modifier une zone      |
| `wateringhub.delete_zone`    | `{ id }`                           | Supprimer une zone     |
| `wateringhub.create_program` | `{ id, name, schedule, zones }`    | Créer un programme     |
| `wateringhub.update_program` | `{ id, name?, schedule?, zones? }` | Modifier un programme  |
| `wateringhub.delete_program` | `{ id }`                           | Supprimer un programme |
| `wateringhub.stop_all`       | `{}`                               | Arrêt d'urgence        |

---

## Entités backend

| Entité                                             | Usage                                                                                                                                            |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `switch.wateringhub_*`                             | Toggles programmes (attributs : schedule, zones, total_duration)                                                                                 |
| `sensor.wateringhub_status`                        | Statut global : idle / running / error                                                                                                           |
| `sensor.wateringhub_status` (attributs permanents) | available_valves, zones                                                                                                                          |
| `sensor.wateringhub_status` (attributs running)    | current_program, current_zone_name, current_valve_name, current_valve_start, current_valve_duration, valves_done, valves_total, progress_percent |
| `sensor.wateringhub_status` (attributs error)      | current_program, error_message                                                                                                                   |
| `sensor.wateringhub_next_run`                      | Prochain arrosage prévu (datetime ISO)                                                                                                           |
| `sensor.wateringhub_last_run`                      | Dernier arrosage (datetime ISO)                                                                                                                  |

---

## Structure du repo

```
WateringHubCard/
├── src/
│   ├── index.ts                       # Point d'entrée (importe les 2 cards)
│   ├── wateringhub-card.ts            # Dashboard card (state, lifecycle)
│   ├── templates.ts                   # Templates dashboard (header, status, error, running, programmes, recap)
│   ├── helpers.ts                     # Helpers partagés (discovery, statut, friendly name, error/running info, formatage)
│   ├── shared-styles.ts               # CSS partagé (ha-card, header, empty-state)
│   ├── styles.ts                      # CSS dashboard
│   ├── types.ts                       # Types partagés (Hass, CardConfig, Schedule, Zone, Valve, AvailableValve, ZoneConfig)
│   ├── config-card/
│   │   ├── wateringhub-config-card.ts # Config card (state, tabs, CRUD)
│   │   ├── config-templates.ts        # Templates config (valves, zones, programmes, formulaires inline)
│   │   ├── config-styles.ts           # CSS config card
│   │   └── config-helpers.ts          # Helpers config (getAvailableValves, getZones, generateId)
│   ├── i18n/
│   │   ├── index.ts                   # Chargeur de traductions
│   │   ├── en.json                    # Anglais (fallback) — dashboard + config
│   │   └── fr.json                    # Français — dashboard + config
│   └── __tests__/
│       ├── helpers.test.ts            # Tests helpers dashboard
│       └── config-helpers.test.ts     # Tests helpers config
├── dist/
│   └── wateringhub-card.js            # Bundle unique (51.5kb minifié, les 2 cards)
├── .github/workflows/ci.yml           # CI : typecheck + tests
├── .husky/pre-commit                  # lint-staged (eslint --fix + prettier --write)
├── package.json                       # esbuild pointe vers src/index.ts
├── tsconfig.json
├── jest.config.ts
├── eslint.config.mjs
├── .prettierrc
├── .gitignore                         # node_modules/, .claude/, .superpowers/
├── hacs.json
├── CLAUDE.md
├── README.md
└── LICENSE
```

---

## Outillage

| Outil      | Commande            | But                                                   |
| ---------- | ------------------- | ----------------------------------------------------- |
| Build      | `yarn build`        | esbuild → dist/wateringhub-card.js (minifié, 2 cards) |
| Watch      | `yarn watch`        | Mode dev avec auto-rebuild                            |
| Tests      | `yarn test`         | 56 tests Jest sur les helpers                         |
| Typecheck  | `yarn typecheck`    | tsc --noEmit                                          |
| Format     | `yarn format`       | Prettier sur src/\*_/_.ts                             |
| CI         | Push/PR sur master  | Typecheck + tests (GitHub Actions)                    |
| Pre-commit | Automatique (husky) | eslint --fix + prettier --write sur les .ts stagés    |

---

## Flow de release

```
yarn build → commit dist/ → push → git tag v0.0.X-alpha → gh release create --prerelease
```

HACS : Frontend > Custom repositories > https://github.com/odexvy/WateringHubCard (Plugin)
HACS : Backend > Custom repositories > https://github.com/odexvy/WateringHub (Plugin)
Mise à jour : HACS affiche "mise à jour disponible" → installer → Ctrl+Shift+R (hard refresh)

---

## Roadmap

### Court terme (frontend uniquement)

- [x] **UI polish** — espacement, transitions, dark mode
- [x] **Running view** — vanne active, countdown, barres de progression
- [x] **Error view** — message d'erreur, auto-stop
- [x] **Config card** — CRUD zones + programmes via services HA
- [ ] **Editeur visuel** — implémenter `getConfigElement()` pour les deux cards
- [ ] Tests pour i18n (`getTranslator`)
- [x] Tests pour config-helpers (`getAvailableValves`, `getZones`, `generateId`)

### Moyen terme (nécessite du backend)

- [ ] **Progression vannes améliorée** — liste des vannes passées/en cours/futures avec icônes
- [ ] **Listener d'événements** — `hass.connection.subscribeEvents` pour updates instantanés
- [ ] **Débit** — afficher le débit en L/min dans la running view

### Long terme

- [ ] **Notifications** — afficher les erreurs dans un toast ou section d'historique
- [ ] **Historique / statistiques** — graphique des exécutions avec consommation d'eau
- [ ] **Multi-langue** — ajouter ES, DE, IT, PT
- [ ] **HACS repo officiel** — soumettre au repo HACS officiel
- [ ] **Image de preview** — screenshot dans le README pour le card picker HA

---

## Décisions prises

1. **Lit bundlé** — HA n'expose pas Lit en ESM importable, les cards doivent le bundler
2. **Pas de unsafeCSS** — tout le CSS est en tagged templates purs
3. **Pas d'analogies React** — pas de commentaires référençant React
4. **yarn** — pas npm
5. **Auto-discovery** — la dashboard card scanne hass.states, pas de listing explicite d'entités
6. **Sensors globaux** — status/next_run/last_run sont globaux (pas par programme)
7. **Mutex côté backend** — la card ne désactive pas les toggles
8. **Variables CSS HA uniquement** — aucune couleur en dur
9. **Running view calculée** — countdown côté card depuis `current_valve_start` + `current_valve_duration`
10. **Pas de stop en error** — le backend coupe tout automatiquement
11. **Deux cards, un bundle** — `index.ts` importe les deux, esbuild produit un seul fichier
12. **Zone ≠ durée** — les zones sont des groupements logiques, les durées sont par vanne par programme
13. **Config card séparée** — card indépendante, pas de bouton engrenage dans la dashboard card
14. **Formulaires inline** — les formulaires CRUD s'ouvrent en place dans la liste
15. **Styles partagés** — `shared-styles.ts` pour le CSS commun (ha-card, header, empty-state), importé par les deux cards
16. **getFriendlyName()** — helper partagé pour résoudre le friendly_name d'une entité avec fallback
