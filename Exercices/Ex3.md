Créer une API REST en Node.js utilisant le module natif `http` **sans base de données**.  
Les tâches seront stockées dans un tableau JavaScript en mémoire.

Routes à réaliser : 

GET `/api/todos` : Récupérer toutes les tâches
GET `/api/todos/:id` : Récupérer une tâche par ID
POST `/api/todos`  : Ajouter une nouvelle tâche
PUT `/api/todos/:id` : Modifier une tâche existante
DELETE `/api/todos/:id` : Supprimer une tâche

Chaque Todo doit être un objet JSON respectant ce format :

```json
{
  "id": 1,
  "title": "Acheter du lait",
  "completed": false
}
```

Pour le moment, on ne se formalise sur rien du tout. 
La première étape est de faire marcher une "route", puis l'autre, puis l'autre ... 