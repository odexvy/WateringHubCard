# Backend Prompt — zone_id et water_supply_id obligatoires sur set_valves

Ce prompt est destiné au repo backend **WateringHub** (https://github.com/odexvy/WateringHub).

---

## Changement demandé

Rendre `zone_id` et `water_supply_id` **obligatoires** (non null) sur chaque vanne dans `set_valves`.

---

## Service modifié : `wateringhub.set_valves`

### Avant (v0.0.23)

```python
{
  "valves": [
    { "entity_id": "switch.vanne_1", "name": "Oscillant", "water_supply_id": "arrivee_jardin", "zone_id": "jardin" },
    { "entity_id": "switch.vanne_2", "name": "Goutteur", "water_supply_id": null, "zone_id": null }  # OK
  ]
}
```

### Après (v0.0.24)

```python
{
  "valves": [
    { "entity_id": "switch.vanne_1", "name": "Oscillant", "water_supply_id": "arrivee_jardin", "zone_id": "jardin" },
    { "entity_id": "switch.vanne_2", "name": "Goutteur", "water_supply_id": "arrivee_jardin", "zone_id": "jardin" }
  ]
}
```

### Validation

- `entity_id` : obligatoire (string)
- `name` : obligatoire (string)
- `water_supply_id` : **obligatoire** (string, doit correspondre à une arrivée existante). `null` ou absent → erreur.
- `zone_id` : **obligatoire** (string, doit correspondre à une zone existante). `null` ou absent → erreur.

### Erreurs

- `water_supply_id` null ou absent → erreur "water_supply_id is required"
- `zone_id` null ou absent → erreur "zone_id is required"
- `water_supply_id` ne correspond pas à une arrivée existante → erreur
- `zone_id` ne correspond pas à une zone existante → erreur

---

## Conséquence sur le flux utilisateur

Le frontend imposera ce flux :
1. Créer au moins une arrivée d'eau
2. Créer au moins une zone
3. Ensuite seulement, ajouter des vannes (avec zone + arrivée obligatoires)

Les dropdowns dans l'onglet Vannes n'auront plus d'option "Aucun".

---

## Impact sur les attributs

### `available_valves` sur `sensor.wateringhub_status`

```python
"available_valves": [
  { "id": "v1", "name": "Oscillant", "entity_id": "switch.vanne_1",
    "water_supply_id": "arrivee_jardin", "zone_id": "jardin" }
]
```

`water_supply_id` et `zone_id` sont toujours des strings non-null.

---

## Rien d'autre ne change

- Services zone CRUD : inchangés (`{ id, name }`)
- Services water_supply CRUD : inchangés (`{ id, name }`)
- `delete_zone` : toujours réassigne... mais maintenant c'est un problème. Si on supprime une zone et que des vannes y étaient, elles se retrouvent avec `zone_id: null` ce qui viole la contrainte obligatoire.

### Option recommandée pour delete_zone / delete_water_supply

**Refuser la suppression si des vannes sont encore assignées** (comme avant pour water_supply). L'utilisateur doit d'abord réassigner les vannes vers une autre zone/arrivée.

Ou bien : suppression en cascade (supprimer aussi les vannes qui n'ont plus de zone/arrivée). Mais c'est dangereux.

### Recommandation

`delete_zone` et `delete_water_supply` : **refuser si des vannes sont encore assignées**. Le frontend affichera un toast erreur "Réassignez d'abord les vannes".

---

## Résumé

| Avant | Après |
|-------|-------|
| `zone_id` optionnel (null OK) | `zone_id` **obligatoire** |
| `water_supply_id` optionnel (null OK) | `water_supply_id` **obligatoire** |
| `delete_zone` réassigne à null | `delete_zone` **refuse** si vannes assignées |
| `delete_water_supply` réassigne à null | `delete_water_supply` **refuse** si vannes assignées |

---

## Tests attendus

- `set_valves` avec zone_id null → erreur
- `set_valves` avec water_supply_id null → erreur
- `set_valves` avec zone_id absent → erreur
- `set_valves` avec les deux fournis et valides → OK
- `delete_zone` avec vannes assignées → erreur
- `delete_zone` sans vannes → OK
- `delete_water_supply` avec vannes assignées → erreur
- `delete_water_supply` sans vannes → OK
