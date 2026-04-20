# Backend Prompt — Fix running execution attributes

Ce prompt est destiné au repo backend **WateringHub** (https://github.com/odexvy/WateringHub).

---

## Problème

Le frontend observe 3 bugs pendant l'exécution d'un programme :

1. **Timer affiche 3min au lieu de 2min** — le programme a 3 vannes (3x1min) mais seulement 2 tournent aujourd'hui (fréquence). Le timer devrait afficher 2min.
2. **Timer recommence entre chaque vanne** — au lieu de progresser de 2:00 → 1:00 → 0:00, le timer semble repartir.
3. **Pas de coches vertes** — les vannes terminées n'affichent pas le statut "done".

---

## Cause identifiée

Le frontend calcule tout depuis `valves_sequence` et `active_valves` sur `sensor.wateringhub_status`. Les problèmes viennent probablement de :

### Problème 1 : `valves_sequence` contient les vannes non éligibles

Si le programme a 3 vannes mais seulement 2 tournent aujourd'hui (fréquence every_n_days/weekdays), `valves_sequence` doit contenir **uniquement les 2 vannes éligibles**, pas les 3.

Le frontend fait : `totalDuration = sum(valves_sequence[].duration)`.

Si la séquence contient 3 vannes × 60s = 180s au lieu de 2 × 60s = 120s, le timer affiche 3min au lieu de 2min.

**Fix demandé :** `valves_sequence` ne doit contenir que les vannes qui vont réellement tourner aujourd'hui. Les vannes skippées par la fréquence ne doivent PAS être dans la séquence.

### Problème 2 : `valves_sequence[].status` n'est pas mis à jour en temps réel

Le frontend lit `valves_sequence[].status` pour :
- Afficher les coches vertes (`status === 'done'`)
- Afficher le dot running (`status === 'running'`)
- Afficher les pending (`status === 'pending'`)
- Calculer `doneDuration = sum(valves_sequence.filter(v => v.status === 'done').map(v => v.duration))`
- Calculer `totalRemaining = activeValveRemaining + sum(pending durations on same supply)`

Si le status ne passe jamais de `"running"` à `"done"` quand une vanne finit, le frontend ne peut pas afficher les coches vertes, et le calcul de `totalElapsed` est faux (revient en arrière).

**Fix demandé :** Mettre à jour `valves_sequence[].status` à chaque transition :
- `"pending"` → `"running"` quand la vanne démarre
- `"running"` → `"done"` quand la vanne finit

Chaque mise à jour doit déclencher un `async_write_ha_state()` sur le sensor pour que HA pousse le changement au frontend.

### Problème 3 : `active_valves` doit être cohérent avec `valves_sequence`

Quand une vanne finit et la suivante démarre :
1. `valves_sequence[N].status` passe de `"running"` à `"done"`
2. `valves_sequence[N+1].status` passe de `"pending"` à `"running"`
3. `active_valves` est mis à jour pour refléter la nouvelle vanne active
4. `valves_done` est incrémenté

Ces 4 changements doivent être atomiques (dans le même `async_write_ha_state`).

---

## Contrat attendu par le frontend

### Au démarrage du programme

```python
sensor.wateringhub_status.attributes = {
    "current_program": "arrosage_jardin",
    "valves_done": 0,
    "valves_total": 2,        # Seulement les vannes éligibles aujourd'hui
    "progress_percent": 0,
    
    # Seulement les vannes éligibles, dans l'ordre d'exécution
    "valves_sequence": [
        {"valve_id": "v1", "valve_name": "Oscillant", "zone_id": "z1", "zone_name": "Jardin",
         "duration": 60, "water_supply_id": "arrivee_a", "status": "running"},
        {"valve_id": "v2", "valve_name": "Goutteur", "zone_id": "z1", "zone_name": "Jardin",
         "duration": 60, "water_supply_id": "arrivee_a", "status": "pending"},
        # PAS de v3 si non éligible aujourd'hui
    ],
    
    "active_valves": [
        {"water_supply_id": "arrivee_a", "valve_id": "v1", "valve_name": "Oscillant",
         "valve_start": "2026-04-13T22:00:00", "valve_duration": 60}
    ],
    
    "dry_run": false
}
```

### Quand v1 finit et v2 démarre (transition)

```python
sensor.wateringhub_status.attributes = {
    "valves_done": 1,          # Incrémenté
    "valves_total": 2,
    "progress_percent": 50,    # 1/2 = 50%
    
    "valves_sequence": [
        {"valve_id": "v1", ..., "status": "done"},     # CHANGÉ: running → done
        {"valve_id": "v2", ..., "status": "running"},   # CHANGÉ: pending → running
    ],
    
    "active_valves": [
        {"water_supply_id": "arrivee_a", "valve_id": "v2", "valve_name": "Goutteur",
         "valve_start": "2026-04-13T22:01:00", "valve_duration": 60}  # Nouvelle vanne active
    ],
}
```

### Quand le programme finit

```python
sensor.wateringhub_status.state = "idle"
# Tous les attributs running sont nettoyés
```

---

## Ce que le frontend calcule à partir de ces données

```
totalDuration    = sum(valves_sequence[].duration)           → 120s (2min)
doneDuration     = sum(valves_sequence.filter(status=done).duration)  → 0s puis 60s
activeElapsed    = Date.now() - active_valves[0].valve_start → progresse chaque seconde
totalElapsed     = doneDuration + activeElapsed              → 0→60s (v1) puis 60→120s (v2)
totalRemaining   = max per supply of (activeRemaining + pendingDurations)
progressCircle   = totalElapsed / totalDuration              → 0% → 50% → 100%
```

Si `valves_sequence[].status` ne change pas → `doneDuration` reste à 0 → le cercle revient en arrière quand v2 démarre (elapsed repart de 0, doneDuration n'a pas accumulé v1).

---

## Résumé des fixes demandés

| Fix | Détail |
|-----|--------|
| `valves_sequence` ne contient que les vannes éligibles | Exclure les vannes skippées par fréquence |
| `valves_sequence[].status` mis à jour en temps réel | pending → running → done à chaque transition |
| `valves_done` incrémenté à chaque vanne terminée | Cohérent avec valves_sequence |
| `progress_percent` mis à jour | `valves_done / valves_total * 100` |
| `active_valves` mis à jour atomiquement | Nouvelle vanne active quand la précédente finit |
| `async_write_ha_state()` appelé à chaque transition | Pour que HA pousse au frontend |

---

## Tests

- Programme avec 3 vannes, 2 éligibles → `valves_total = 2`, `valves_sequence` a 2 entrées
- Pendant v1 : `valves_sequence[0].status = "running"`, `valves_sequence[1].status = "pending"`
- Après v1, pendant v2 : `valves_sequence[0].status = "done"`, `valves_sequence[1].status = "running"`, `valves_done = 1`
- Après v2 : status = "idle"
