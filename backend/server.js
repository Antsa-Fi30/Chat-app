// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// Routes pour l'API
app.get('/api/data', (req, res) => {
  // Logique de votre API
  res.json({ message: 'Données provenant du serveur' });
});

// Lancement du serveur
const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
