/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est explicite
 *
 * contrainte:
 *   - le mot clé "function" est interdit
 */

const arrow1 = (a) => {
<<<<<<< HEAD
  return a + 1;
};
=======
    return a + 1;
}

>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

/**
 * Déclarer une fonction fléchée qui renvoi l'argument + 1
 * Le return est implicite
 *
 * contrainte:
 *   - le mot clé "function" est interdit
 *   - le mot clé "return" est interdit
 */

<<<<<<< HEAD
const arrow2 = (b) => b + 1;
=======
const arrow2 = (a) => a + 1;
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

module.exports = { arrow1, arrow2 };

// Ici le nom des fonctions à utiliser dans l'ordre
