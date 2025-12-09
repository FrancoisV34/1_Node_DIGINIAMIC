const { apiResponse } = require('./11_async');

/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 *
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 *
 * Retournez un tableau contenant les 3 résultats
 *
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 *
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */
const parallel = async () => {
  try {
    // Créer un tableau de promesses pour les 3 appels API
    const promises = [
      apiResponse('https://jsonplaceholder.typicode.com/todos/1'),
      apiResponse('https://jsonplaceholder.typicode.com/todos/2'),
      apiResponse('https://jsonplaceholder.typicode.com/todos/3'),
    ];

    const responses = await Promise.all(promises);

    return responses;
  } catch (error) {
    console.error('Erreur lors des appels API parallèles:', error);
    throw error;
  }
};
module.exports = { parallel };
