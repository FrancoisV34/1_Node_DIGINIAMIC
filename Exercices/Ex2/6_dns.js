// Utilisez dns.lookup pour obtenir l'adresse IP du NDD diginamic.fr
// Récupérez les enregistrements MX du même domaine (permet de spécifier les serveurs de messagerie pour un domaine).
// Affichez le résultat dans la console

const dns = require('dns');

dns.lookup('diginamic.fr', (err, address, family) => {
  if (err) {
    console.error('Erreur lors de la recherche DNS :', err);
    return;
  } else if (address) {
    console.log(`Adresse IP de diginamic.fr : ${address} (famille ${family})`);
  } else {
    console.log('Aucune adresse IP trouvée pour diginamic.fr');
  }
});

dns.resolveMx('diginamic.fr', (err, addresses) => {
  if (err) {
    console.error(
      'Erreur lors de la récupération des enregistrements MX :',
      err
    );
    return;
  }
  console.log('Enregistrements MX pour diginamic.fr :');
  addresses.forEach((mx) => {
    console.log(`  Priorité: ${mx.priority}, Serveur: ${mx.exchange}`);
  });
});
