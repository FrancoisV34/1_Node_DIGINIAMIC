const { sleep } = require('../exercices/10_promise');

/**
 * Créez une fonction asynchrone qui attend 2 secondes puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 *
 * Vous devez utiliser .then
 *
 * contrainte:
<<<<<<< HEAD
 *    - votre fonction doit être asynchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 *
 */
const usingThen = (callback) => {
  sleep(2000).then(() => callback());
};
=======
 *    - ne pas utiliser async await
 */
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

const usingThen = (callback) => sleep().then(() => callback());

// usingThen(() => console.log("Hello World"));

/**
 * Créez une fonction asynchrone qui attend 2 secondes puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créée précedement: const {sleep} = require("../exercices/10_promise");
 *
 * Vous devez utiliser await
 *
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async (callback) => {
<<<<<<< HEAD
  await sleep(2000);
  callback();
};

// console.log(usingAwait(() => console.log("Hello World")));
=======
    await sleep();
    return callback();
};
 
// usingAwait(() => console.log("Hello World"));
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 *
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer avec la commande suivante:
 * npm install axios
 *
 * votre réponse doit être un objet json
 *
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

<<<<<<< HEAD
//décommentez la ligne suivante une fois le package installé
const axios = require('axios');

const apiResponse = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Erreur lors de l'appel API: ${error.message}`);
  }
};
=======
//décommentez la ligne suivante une fois le package installé 
const axios = require("axios");

const apiResponse = async (url) => {
    const response = await axios.get(url);
    return response.data;
}

apiResponse("https://jsonplaceholder.typicode.com/todos/150000")
    .then(data => console.log(data))
    .catch(err => console.error("err"));


// console.log(apiResponse("https://jsonplaceholder.typicode.com/todos/1"));
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

module.exports = { usingThen, usingAwait, apiResponse };
