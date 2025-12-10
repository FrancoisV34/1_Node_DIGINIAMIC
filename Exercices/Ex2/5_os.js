// Ecrivez la fonction displayOsMessage() qui détecte le systeme d'exploitation
// Cette fonction affichera un message différend pour Windows, macOS et Linux
// Appelez la fonction pour la tester
// Il faudra trouver quel est la chaîne de retour pour chacun des systèmes

const os = require('os');

function displayOsMessage() {
  const platform = os.platform();

  if (platform === 'win32') {
    console.log('Vous utilisez Windows.');
  } else if (platform === 'darwin') {
    console.log('Vous utilisez macOS.');
  } else if (platform === 'linux') {
    console.log('Vous utilisez Linux.');
  } else {
    console.log("Système d'exploitation non reconnu.");
  }
}

displayOsMessage();
