// Nous allons simuler un système de chat simple avec des messages recus et envoyés

// 1. Créez un événement personnalisé messageReceived qui accepte deux arguments : message et username et
// ajoutez un gestionnaire d'événements pour messageReceived (emitter.on)

// 2. Simulez l'émission de l'événement messageReceived à partir de plusieurs utilisateurs
// C'est-à-dire (Créer une fonction sendMessage qui prend un username et un message en param et l'appeler plusieurs fois)
// On affichera le nom de l'utilisateur puis le message dans la console

import { EventEmitter } from 'events';

const messageReceived = new EventEmitter();

// Gestionnaire d'événements pour messageReceived
messageReceived.on('messageReceived', (username, message) => {
  console.log(`${username} a dit : ${message}`);
});

// Fonction pour simuler l'envoi d'un message
function sendMessage(username, message) {
  messageReceived.emit('messageReceived', username, message);
}

// Simuler l'envoi de messages
sendMessage('Alice', 'Bonjour tout le monde !');
sendMessage('Bob', 'Salut Alice ! Comment ça va ?');
sendMessage('Charlie', 'Hey les amis, quoi de neuf ?');
