const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Servir les fichiers statiques de l'application React
const clientBuildPath = path.join(__dirname, '../client/dist');
console.log('Chemin vers le build client:', clientBuildPath);
app.use(express.static(clientBuildPath));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Bonjour du serveur!' });
});

// Gérer toutes les autres routes en servant index.html
app.get('*', (req, res) => {
  console.log('Route demandée:', req.path);
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
  console.log('Contenu du répertoire client/dist:');
  console.log(require('fs').readdirSync(clientBuildPath));
});