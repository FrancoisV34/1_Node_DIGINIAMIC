# Template User Story — Gherkin allégé

Format adopté pour toutes les specs produites par la pipeline PO.

## Structure d'une US

```markdown
### US-{NN} — {Titre court}

**En tant que** {rôle utilisateur}
**Je veux** {action/capacité}
**Afin de** {bénéfice métier}

#### Critères d'acceptation

- **Given** {contexte / pré-condition}
  **When** {action déclenchée}
  **Then** {résultat attendu}

- **Given** {autre contexte}
  **When** {autre action}
  **Then** {autre résultat}

#### Edge cases & règles métier

- Si {cas limite A} → {comportement attendu}
- Si {cas limite B} → {comportement attendu}

#### Hors scope

- {Ce que cette US ne couvre pas explicitement}

#### Questions ouvertes

- [ ] {Question à trancher avec stakeholder}
```

## Règles de rédaction

1. **Titre** : verbe d'action + objet (ex: "Filtrer les formations par catégorie", pas "Filtres formations").
2. **En tant que** : rôle précis (ex: "Responsable RH", pas "utilisateur").
3. **Afin de** : bénéfice mesurable ou observable (ex: "gagner du temps lors de la préparation du plan de formation annuel").
4. **Given/When/Then** : en français simple, pas de référence technique. Chaque critère doit être **testable manuellement** sans connaissances tech.
5. **Edge cases** : toujours au moins 2 (ex: cas à zéro, cas à limite, cas d'erreur).
6. **Hors scope** : explicite, pour protéger le périmètre.
7. **Questions ouvertes** : cases à cocher pour suivi, ne pas supposer de réponse.

## Exemple complet

```markdown
### US-01 — Filtrer le catalogue de formations par catégorie

**En tant que** Responsable RH
**Je veux** filtrer la liste des formations par catégorie (Métier / Soft-skills / Conformité)
**Afin de** préparer plus vite le plan de formation annuel de mon service

#### Critères d'acceptation

- **Given** je suis sur la page Catalogue avec 50 formations toutes catégories confondues
  **When** je clique sur le filtre "Soft-skills"
  **Then** la liste ne montre plus que les formations de catégorie Soft-skills, et un compteur indique le nombre de résultats

- **Given** un filtre Soft-skills est actif
  **When** je clique sur "Effacer les filtres"
  **Then** la liste complète revient et le compteur reflète le total

#### Edge cases & règles métier

- Si aucune formation ne correspond au filtre → afficher un message "Aucune formation dans cette catégorie" + bouton "Voir tout le catalogue"
- Si l'utilisateur active plusieurs catégories → les résultats additionnent les deux (OU logique, pas ET)

#### Hors scope

- Filtres combinés avec durée ou formateur (cf. US-03 future)
- Sauvegarde des préférences de filtres

#### Questions ouvertes

- [ ] Quelles sont les catégories exactes à afficher par défaut ? (à valider avec équipe RH LMB)
- [ ] Faut-il un ordre d'affichage fixe ou alphabétique ?
```
