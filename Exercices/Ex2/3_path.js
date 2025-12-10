// Créez un chemin complet vers un fichier appelé example.txt dans un dossier nommé assets
// Affichez le nom du répertoire du chemin complet
// Affichez le nom du fichier à partir du chemin complet
// Affichez l'extension du fichier

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fullPath = path.join(__dirname, 'assets', 'example.txt');

console.log('Nom du répertoire :', path.dirname(fullPath));
console.log('Nom du fichier :', path.basename(fullPath));
console.log('Extension du fichier :', path.extname(fullPath));
