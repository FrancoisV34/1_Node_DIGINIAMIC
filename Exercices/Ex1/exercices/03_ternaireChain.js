/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 *
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 *
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */

function ternaryChain(a, b) {
<<<<<<< HEAD
  let isBiggerOrEqual = a > b ? '>' : a < b ? '<' : '=';
  return isBiggerOrEqual;
=======
    return a > b ? ">" : a < b ? "<" : "=";
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4
}

module.exports = ternaryChain;
