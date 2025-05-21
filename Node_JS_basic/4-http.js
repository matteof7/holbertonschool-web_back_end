const http = require('http'); // On importe le module http

// On crée le serveur HTTP
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Code HTTP 200 = OK
  res.setHeader('Content-Type', 'text/plain'); // On précise qu'on envoie du texte
  res.end('Hello Holberton School!'); // On envoie la réponse et on termine
});

// On démarre le serveur sur le port 1245
app.listen(1245);

module.exports = app; // On exporte la variable app (le serveur)
