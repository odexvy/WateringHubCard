# Backend Prompt — set_valves centralise les assignations zone + arrivée d'eau

Ce prompt est destiné au repo backend **WateringHub** (https://github.com/odexvy/WateringHub).

---

## Changement demandé

Centraliser l'assignation des vannes dans `set_valves`. Actuellement :
- La zone assigne ses vannes via `create_zone { id, name, valves[] }` / `update_zone`
- L'arrivée d'eau est sur `set_valves { entity_id, name, water_supply_id }`

**Nouveau modèle :** La vanne porte ses assignations zone + arrivée d'eau. Les zones et arrivées d'eau deviennent des CRUD de noms uniquement.

---

## Service modifié : `wateringhub.set_valves`

### Avant

```python
{ "valves": [{ "entity_id": "switch.vanne_1", "name": "Oscillant", "water_supply_id": "arrivee_jardin" }] }
```

### Après

```python
{
  "valves": [
    {
      "entity_id": "switch.vanne_1",
      "name": "Oscillant",
      "water_supply_id": "arrivee_jardin",   # optionnel, null = pas d'arrivée (séquentiel défaut)
      "zone_id": "jardin_avant"              # optionnel, null = pas de zone (vanne non utilisée dans les programmes)
    },
    {
      "entity_id": "switch.vanne_2",
      "name": "Goutteur",
      "water_supply_id": null,
      "zone_id": null
    }
  ]
}
```

### Règles de validation

- `water_supply_id` : optionnel. Si fourni, doit correspondre à une arrivée existante. `null` ou absent = pas d'arrivée.
- `zone_id` : optionnel. Si fourni, doit correspondre à une zone existante. `null` ou absent = pas de zone.
- `entity_id` + `name` : obligatoires (inchangé).

---

## Services zones simplifiés

### `wateringhub.create_zone`

**Avant :**
```python
{ "id": "jardin", "name": "Jardin avant", "valves": ["v1", "v2"] }
```

**Après :**
```python
{ "id": "jardin", "name": "Jardin avant" }
```

Le champ `valves` est **supprimé**. L'assignation vanne → zone se fait désormais via `set_valves`.

### `wateringhub.update_zone`

**Avant :**
```python
{ "id": "jardin", "name?": "Nouveau nom", "valves?": ["v1", "v3"] }
```

**Après :**
```python
{ "id": "jardin", "name?": "Nouveau nom" }
```

Le champ `valves` est **supprimé**.

### `wateringhub.delete_zone`

Inchangé : `{ "id": "jardin" }`.

Quand une zone est supprimée, les vannes qui avaient ce `zone_id` passent à `zone_id: null` automatiquement.

---

## Services arrivées d'eau (inchangés)

- `create_water_supply { id, name }` — inchangé
- `update_water_supply { id, name? }` — inchangé
- `delete_water_supply { id }` — quand supprimée, les vannes passent à `water_supply_id: null` automatiquement (au lieu d'erreur)

**Note :** On change le comportement de delete_water_supply — au lieu de refuser si des vannes sont assignées, on réassigne à null (cohérent avec delete_zone).

---

## Attributs modifiés sur `sensor.wateringhub_status`

### `available_valves` — ajout `zone_id`

```python
"available_valves": [
  { "id": "v1", "name": "Oscillant", "entity_id": "switch.vanne_1",
    "water_supply_id": "arrivee_jardin", "zone_id": "jardin_avant" },
  { "id": "v2", "name": "Goutteur", "entity_id": "switch.vanne_2",
    "water_supply_id": null, "zone_id": null },
]
```

### `zones` — suppression du champ `valves`

**Avant :**
```python
"zones": [{ "id": "jardin", "name": "Jardin avant", "valves": ["v1", "v2"] }]
```

**Après :**
```python
"zones": [{ "id": "jardin", "name": "Jardin avant" }]
```

Les vannes d'une zone sont dérivées de `available_valves` où `zone_id == zone.id`.

### `water_supplies` — inchangé

```python
"water_supplies": [{ "id": "arrivee_jardin", "name": "Arrivée jardin" }]
```

---

## Impact sur les programmes

Les programmes sélectionnent des zones. Quand le scheduler construit la séquence de vannes pour un programme, il doit maintenant :

1. Pour chaque zone du programme → trouver les vannes où `zone_id == zone.id` (depuis `available_valves`)
2. Au lieu de lire `zone.valves[]` directement

C'est un changement interne au scheduler, pas un changement d'API programme.

---

## Impact sur switch.wateringhub_* (attributs programme)

L'attribut `zones` sur chaque switch programme ne change pas de structure — il contient toujours les zones sélectionnées avec les durées/fréquences par vanne. Le backend résout les vannes par zone_id au moment de la sauvegarde ou de l'exécution.

---

## Backward Compatibility

- `water_supply_id: null` → séquentiel (arrivée défaut implicite)
- `zone_id: null` → vanne pas dans une zone, pas utilisée dans les programmes
- Les programmes/zones existants continuent de fonctionner
- Migration : les vannes existantes qui étaient dans des zones via l'ancien modèle doivent recevoir le `zone_id` correspondant dans un backfill

---

## Migration des données existantes

Au démarrage (`_async_load`), si des vannes n'ont pas de `zone_id` :
1. Parcourir les zones existantes qui ont encore un champ `valves[]`
2. Pour chaque vanne dans `zone.valves[]`, assigner `zone_id` à la vanne
3. Supprimer le champ `valves[]` des zones
4. Sauvegarder

Même logique pour `water_supply_id` si des vannes n'en ont pas.

---

## Résumé des breaking changes

| Avant | Après |
|-------|-------|
| `create_zone { id, name, valves[] }` | `create_zone { id, name }` (valves supprimé) |
| `update_zone { id, name?, valves? }` | `update_zone { id, name? }` (valves supprimé) |
| `set_valves [{ entity_id, name, water_supply_id }]` | `set_valves [{ entity_id, name, water_supply_id?, zone_id? }]` |
| `zones[].valves` dans sensor attributes | Supprimé (dérivé de available_valves) |
| `delete_water_supply` erreur si vannes assignées | Réassigne à null (comme delete_zone) |

---

## Tests attendus

- `set_valves` avec zone_id + water_supply_id → attributs corrects sur available_valves
- `set_valves` avec zone_id/water_supply_id null → accepté
- `set_valves` avec zone_id inexistant → erreur
- `set_valves` avec water_supply_id inexistant → erreur
- `create_zone` sans valves → OK
- `delete_zone` → vannes passent à zone_id null
- `delete_water_supply` → vannes passent à water_supply_id null
- Scheduler : résout les vannes par zone_id depuis available_valves
- Migration : anciennes zones avec valves[] → zone_id assigné aux vannes
- Backward compat : programmes existants fonctionnent après migration
