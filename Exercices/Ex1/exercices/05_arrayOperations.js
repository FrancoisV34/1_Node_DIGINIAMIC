
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clés for, while, do while sont interdits
 *   - les mots clés function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = (array) => array.map(item => item * 2);
// console.log(multiplyByTwo([1, 2, 3, 4, 5]));

/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clés for, while, do while sont interdits
 *   - les mots clés function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const filterNameStartByA = (array) => array.filter(item => item.startsWith("A"));
// console.log(filterNameStartByA(["Apple", "Banana", "Aherry", "Date"]));

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clés for, while, do while sont interdits
 *   - les mots clés function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = (array) => array.reduce((acc, item) => acc + item, 0);
// console.log(sum([1, 2, 3, 4, 5]));

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clés for, while, do while sont interdits
 *   - les mots clés function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const findUserById = (array, id) => array.find(item => item.id === id).name;
// console.log(findUserById(
//   [{id: 1, name: 'John'}, 
//     {id: 2, name: 'Doe'}, 
//     {id: 3, name: 'Foo'}, 
//     {id: 4, name: 'Bar'}], 3)
//   );


module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};