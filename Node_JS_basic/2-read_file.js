const fs = require('fs'); // On importe le module pour lire les fichiers

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1);
    const fields = {};

    students.forEach((line) => {
      const parts = line.split(',');
      if (parts.length >= 4) { // On accepte les lignes avec plus de 4 colonnes
        const firstname = parts[0].trim();
        const field = parts[3].trim();
        if (firstname && field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
    });

    const total = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${total}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const list = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
