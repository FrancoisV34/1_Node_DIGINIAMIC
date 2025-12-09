/**
 * utilisez les nouveau guillemets ` (alt gr + 7) pour concaténer le nom et le prénom passé en paramètre
 * Renvoi le résultat
 *
 * exemple: "John", "Doe" => "John Doe"
 *
 * contrainte:
 *  - ne pas utiliser l'opérateur +
 *  - ne pas utiliser la fonction concat de String
 */

<<<<<<< HEAD
const concat = (firstName, lastName) => `${firstName} ${lastName}`;
=======
const concat = (name, firstName) => `${name} gfdgsg${firstName}`;
// (name = ' test' + firstname)
console.log(concat("John", "Doe"));
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

module.exports = { concat };
