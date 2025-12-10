// Nous allons simuler un système de chat simple avec des messages recus et envoyés

// 1. Créez un événement personnalisé messageReceived qui accepte deux arguments : message et username et
// ajoutez un gestionnaire d'événements pour messageReceived (emitter.on)

// 2. Simulez l'émission de l'événement messageReceived à partir de plusieurs utilisateurs
// C'est-à-dire (Créer une fonction sendMessage qui prend un username et un message en param et l'appeler plusieurs fois)
// On affichera le nom de l'utilisateur puis le message dans la console

// Tout n'était pas demandé mais l'exemple complet est ici pour mieux comprendre l'utilisation des événements
const EventEmitter = require('events');
const emitter = new EventEmitter();

class User {
  constructor(name) {
    this.name = name;
    // Chaque utilisateur écoute les messages des autres
    emitter.on('messageReceived', (message, from) => {
      if (from !== this.name) {
        console.log(`Message reçu par ${this.name} de ${from} : ${message}`);
      }
    });
  }

  sendMessage(message) {
    emitter.emit('messageReceived', message, this.name);
  }
}

// Gestionnaire d'événement principal (non indispensable ici mais conforme à l'énoncé)
emitter.on('messageReceived', (message, username) => {
  console.log(`${username} : ${message}`);
});

class SystemChat {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  // Diffuse un message à tous sauf l'émetteur
  sendAll(message, fromUser) {
    this.users.forEach((user) => {
      if (user !== fromUser) {
        emitter.emit('messageReceived', message, fromUser.name);
      }
    });
  }
}

const user1 = new User('John');
const user2 = new User('Jane');
const systemChat = new SystemChat();

systemChat.addUser(user1);
systemChat.addUser(user2);

// Simulations
user1.sendMessage('Hello Jane !');
user2.sendMessage('Salut John !');
systemChat.sendAll('Message du système pour tous', user1);
