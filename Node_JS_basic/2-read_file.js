const fs = require('fs'); // On importe le module pour lire les fichiers

function countStudents(path) {
  try {
    // 1. On lit le fichier de façon synchrone
    const data = fs.readFileSync(path, 'utf8');

    // 2. On sépare le contenu en lignes et on enlève les lignes vides
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // 3. On enlève la première ligne (l'en-tête)
    const header = lines[0];
    const students = lines.slice(1);

    // 4. On prépare un objet pour compter les étudiants par field
    const fields = {}; // ex: { CS: [prénoms], SWE: [prénoms] }

    // 5. On parcourt chaque étudiant
    students.forEach(line => {
      const parts = line.split(',');
      if (parts.length === 4) { // On vérifie qu'il y a bien 4 colonnes
        const firstname = parts[0].trim();
        const field = parts[3].trim();
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });

    // 6. On compte le nombre total d'étudiants
    const total = Object.values(fields).reduce((acc, curr) => acc + curr.length, 0);
    console.log(`Number of students: ${total}`);

    // 7. On affiche le détail par field
    for (const field in fields) {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    }
  } catch (err) {
    // 8. Si le fichier n'existe pas, on lance l'erreur demandée
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
