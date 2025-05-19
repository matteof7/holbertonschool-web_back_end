console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

// Capture la première entrée utilisateur
process.stdin.once('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
});

// Gère la fermeture du flux d'entrée
process.stdin.once('end', () => {
  console.log('This important software is now closing');
});
