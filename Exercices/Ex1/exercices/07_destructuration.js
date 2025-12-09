/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 *
 * exemple: [1, 2, 3] => [1, 2]
 *
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 *
 * contrainte:
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

const extractFirstTwo = ([first, second]) => [first, second];
<<<<<<< HEAD
=======
console.log(extractFirstTwo([1, 2, 3]));

>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 *
 * exemple: [1, 2, 3] => [2, 3]
 */

const extractRest = ([, ...rest]) => rest;
<<<<<<< HEAD
=======
console.log(extractRest([1, 2, 3]));

>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4
/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 *
 * exemple: {name: "toto", age: 42} => "toto"
 *
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 *
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

<<<<<<< HEAD
const extractName = ({ name }) => name;
=======
const extractName = ({name}) => name;
console.log(extractName({name: "toto", age: 42}));
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

// console.log(extractName({name: "toto", age: 42}));

/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 *
 * exemple: {name: "toto", password: "1234"}
 *
 * contrainte:
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 *
 */

<<<<<<< HEAD
const removePassword = ({ password, ...rest }) => rest;
=======
const removePassword = ({password, ...rest}) => rest;
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

// console.log(removePassword({name: "toto", password: "1234" , age: 42}));

module.exports = { extractFirstTwo, extractRest, extractName, removePassword };
