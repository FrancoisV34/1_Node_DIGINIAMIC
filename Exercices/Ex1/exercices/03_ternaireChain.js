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
  let isBiggerOrEqual = a > b ? '>' : a < b ? '<' : '=';
  return isBiggerOrEqual;
}

module.exports = ternaryChain;
