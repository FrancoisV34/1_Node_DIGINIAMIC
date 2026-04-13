# PO Copilot — mode d'emploi

Copilote Claude Code dédié au rôle de **Product Owner non-dev**. Deux modes :

## Mode 1 — `/po-copilot` (conversationnel)

Un agent adaptatif pour le quotidien :
- Répond à tes questions (vulgarisation systématique)
- Brainstorm avec toi et te challenge (UX, ROI, devil's advocate)
- Prend des notes en continu dans `~/po-notes/{projet}/YYYY-MM-DD-{sujet}.md`
- Te propose la pipeline `/po-deliverable` quand tu veux un livrable structuré

**Usage** : `/po-copilot` puis parle librement. Au début de session, il te demande sur quel projet tu travailles (DigiSchool, SI-RH, etc.) pour charger la bonne mémoire.

**Commandes spéciales dans le chat** :
- `!challenge` — active la posture devil's advocate sur le sujet courant
- `!note <texte>` — force l'ajout d'une note dans le fichier du jour
- `!livrable` — propose de lancer `/po-deliverable`

## Mode 2 — `/po-deliverable` (pipeline)

Pipeline séquentielle qui produit un dossier de sources markdown prêt pour **Claude Cowork**.

**Variantes** :
- `/po-deliverable` — pipeline complète (spec + diagrammes + roadmap + one-pager)
- `/po-deliverable spec` — spec User Stories uniquement
- `/po-deliverable roadmap` — roadmap/matrice priorisation uniquement
- `/po-deliverable onepager` — synthèse stakeholder uniquement

**Sortie** : `~/po-handoff/{projet}/{date-slug}/` contenant :
- `spec.md`, `roadmap.md`, `one-pager.md`, `diagrams/*.mmd`
- `INSTRUCTIONS.md` — instructions à destination de Cowork

## Pont avec Claude Cowork

Cowork (onglet dans Claude Desktop) sait nativement générer `.docx / .xlsx / .pptx / .pdf` depuis des sources markdown.

**Workflow** :
1. Claude Code produit le dossier `~/po-handoff/{projet}/{slug}/`
2. Dans Claude Desktop → onglet **Cowork** → ajoute ce dossier comme **Project**
3. Demande à Cowork : *"génère les versions Office selon INSTRUCTIONS.md"*
4. Cowork produit les `.docx / .xlsx / .pptx / .pdf` dans le même dossier

**Analogie** : Claude Code = le cerveau (réfléchit, structure). Cowork = les mains (met en forme en Office).

## Structure des agents

```
po-copilot/                        (tous les fichiers au même niveau, flat)
├── README.md
├── po-copilot.md                  # agent adaptatif (mode 1)
├── po-deliverable.md              # orchestrateur pipeline (mode 2)
├── vulgarisation-rules.md         # règles communes
├── us-gherkin-template.md         # template US
├── cowork-handoff-template.md     # template INSTRUCTIONS.md
├── po-interviewer.md              # ① questions ciblées
├── po-challenger.md               # ② devil's advocate
├── po-structurateur.md            # ③ arbre logique
├── po-redacteur-spec.md           # ④ spec Gherkin allégé
├── po-illustrateur.md             # ⑤ diagrammes Mermaid
├── po-tableauteur.md              # ⑥ tableaux (RICE/MoSCoW/backlog)
├── po-vulgarisateur.md            # ⑦ passe finale anti-jargon
└── po-exporteur.md                # ⑧ assemblage dossier Cowork
```

## Dépendances

**Zéro**. Tout local. Pas de MCP requis. Les dossiers `~/po-notes/` et `~/po-handoff/` sont créés à la première utilisation.

## MCP optionnels recommandés (plus tard)

- **Jira** ou **Linear** — pousser les US dans le backlog
- **Figma** — challenger les mockups
- **Notion** ou **Confluence** — lire/écrire la doc produit
- **Slack** — capturer les threads produit
