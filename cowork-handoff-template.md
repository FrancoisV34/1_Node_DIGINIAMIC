# Template INSTRUCTIONS.md (pour Claude Cowork)

Ce template est copié dans chaque dossier `~/po-handoff/{projet}/{slug}/` par l'agent `po-exporteur`. C'est ce fichier que **Cowork lit** quand tu lui demandes de générer les livrables Office.

## Template

```markdown
# INSTRUCTIONS pour Claude Cowork

## Contexte

Livrable PO pour le projet **{PROJET}** — sujet : **{SUJET}**
Date de génération : {YYYY-MM-DD}
Produit par : pipeline `/po-deliverable` (Claude Code)

## Ce que je te demande de faire

Tu trouveras dans ce dossier les **sources markdown** d'un livrable de Product Owner.
Ton rôle : **convertir ces sources en fichiers Office propres et lisibles** pour partage stakeholders.

### Fichiers à générer

1. **`spec.docx`** ← depuis `spec.md`
   - Titre : "{PROJET} — Spec : {SUJET}"
   - Style professionnel (en-têtes hiérarchisés, police lisible)
   - Pied de page : "Confidentiel — Lundimatin — {date}"

2. **`roadmap.xlsx`** ← depuis `roadmap.md` *(si présent)*
   - Chaque tableau markdown = une feuille (onglet) distincte
   - Ligne d'en-tête en gras, lignes alternées grisées
   - Figer la première ligne

3. **`one-pager.pdf`** ← depuis `one-pager.md` *(si présent)*
   - Format A4, 1 page max
   - Mise en page aérée (titre grand, bullets clairs, éventuel encart "Impact" coloré)

4. **`diagrams/*.png`** ← depuis `diagrams/*.mmd` *(si présents)*
   - Rendu des diagrammes Mermaid en PNG haute résolution

### Règles de style

- Langue : **français**
- Ton : professionnel mais accessible (l'audience n'est pas forcément tech)
- Charte visuelle : neutre/sobre, priorité à la lisibilité
- Ne modifie PAS le contenu sémantique, uniquement la mise en forme

### Après génération

Liste-moi les fichiers produits avec leur taille pour confirmation.
```

## Utilisation

L'agent `po-exporteur` remplit les placeholders `{PROJET}`, `{SUJET}`, `{YYYY-MM-DD}` et commente les sections non-pertinentes (ex: si pas de roadmap, commenter la section 2).
