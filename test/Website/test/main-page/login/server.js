const express = require('express');
const app = express();

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Vérifier les informations de connexion
  if (username === 'your_username' && password === 'your_password') {
    // Générer un jeton d'authentification
    const token = generateAuthToken();
    res.json({ success: true, token });
  } else {
    res.json({ success: false, error: 'Nom d\'utilisateur ou mot de passe incorrect.' });
  }
});

app.get('/protected', (req, res) => {
  // Vérifier le jeton d'authentification
  const authToken = req.headers.authorization;
  if (validateAuthToken(authToken)) {
    res.send('Bienvenue sur la page protégée !');
  } else {
    res.status(401).send('Accès non autorisé.');
  }
});

function generateAuthToken() {
  // Logique pour générer un jeton d'authentification unique
  return 'abc123def456';
}

function validateAuthToken(token) {
  // Logique pour vérifier la validité du jeton d'authentification
  return token === 'abc123def456';
}

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
