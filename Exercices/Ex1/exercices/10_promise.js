/**
 * Créez une fonction asynchrone qui attend 2 secondes
 *
 * utilisez new Promise
 */

<<<<<<< HEAD
const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));
=======
const sleep = (ms = 2000) => new Promise(resolve => setTimeout(resolve, ms));
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

module.exports = { sleep };
