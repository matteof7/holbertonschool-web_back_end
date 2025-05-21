const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Lire le fichier de manière asynchrone
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Si erreur (fichier non trouvé), on rejette la Promise avec le bon message
        reject(new Error('Cannot load the database'));
        return;
      }

      // On traite les données
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {}; // Pour regrouper les prénoms par field

      students.forEach((line) => {
        const parts = line.split(',');
        if (parts.length === 4) {
          const firstname = parts[0].trim();
          const field = parts[3].trim();
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      });

      // Afficher le nombre total d'étudiants
      const total = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
      console.log(`Number of students: ${total}`);

      // Afficher pour chaque field
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const list = fields[field].join(', ');
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
        }
      }

      // On résout la Promise (pas de valeur à retourner, juste pour signaler la fin)
      resolve();
    });
  });
}

module.exports = countStudents;
