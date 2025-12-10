// Lisez le contenu du fichier example.txt situé dans le dossier assets et affichez-le dans la console.
// Créez un nouveau fichier appelé output.txt dans le même dossier et écrivez-y une chaîne de caractères : Ceci est un nouveau fichier créé avec Node.js
// Supprimez le fichier output.txt que vous venez de créer.

import fs from 'fs';

fs.readFile('./assets/example.txt', 'UTF-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  './assets/output.txt',
  'Ceci est un nouveau fichier créé avec Node.js',
  (err) => {
    if (err) throw err;
    console.log('Le fichier a été créé et contient :');
  }
);

fs.unlink('./assets/output.txt', (err) => {
  if (err) throw err;
  console.log('Le fichier a été supp');
});
