/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 *
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 *
 * contrainte:
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

<<<<<<< HEAD
const concat = (tab1, tab2) => [...tab1, ...tab2];
=======
const concat = (array1, array2) => [...array1, ...array2];

>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 *
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 *
 * contrainte:
 * - ne pas utiliser la méthode push
 */

<<<<<<< HEAD
const push = (tab3, val) => [...tab3, val];
=======
const push = (array, item) => [...array, item];
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 *
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

<<<<<<< HEAD
const merge = (obj1, obj2) => ({ ...obj1, ...obj2 });
=======
const merge = (obj1, obj2) => ({...obj1, ...obj2});
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 *
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 *
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

<<<<<<< HEAD
const setName = (nam1, nam2) => ({ ...nam1, name: nam2 });
=======
const setName = (obj, name) => ({...obj, name});
console.log(setName({name: 'toto'}, 'titi'));

>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = { concat, push, merge, setName };
