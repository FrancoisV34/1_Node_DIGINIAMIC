// Créez un chemin complet vers un fichier appelé example.txt dans un dossier nommé assets
// Affichez le nom du répertoire du chemin complet
// Affichez le nom du fichier à partir du chemin complet
// Affichez l'extension du fichier

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
console.log(__filename);
const __dirname = path.dirname(__filename);

const examplePath = path.join(__dirname, 'assets', 'example.txt');
const testPath = path.join(__dirname, 'assets', 'test.html');

console.log('Nom du répertoire :', path.dirname(examplePath));
console.log('Nom du fichier :', path.basename(examplePath));
console.log('Extension du fichier :', path.extname(examplePath));

console.log('Nom du répertoire :', path.dirname(testPath));
console.log('Nom du fichier :', path.basename(testPath));
console.log('Extension du fichier :', path.extname(testPath));
