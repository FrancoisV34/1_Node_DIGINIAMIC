/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 *
 * exemple :
 * {
 *  name: "John",
 *  group: {
 *     name: "admin"
 *  }
 * }
 *
 * doit renvoyer "admin"
 *
 */

<<<<<<< HEAD
const getGroupName = (user) => user?.group?.name;
=======
const getGroupName = (user) => user.group?.name;
>>>>>>> c8b53d6a8d2e4111ce557c601abc3ca43ff716f4

module.exports = { getGroupName };
