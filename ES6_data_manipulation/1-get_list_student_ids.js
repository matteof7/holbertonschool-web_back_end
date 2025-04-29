export default function getListStudentIds(listStudents) {
  // Vérifier si l'argument est un tableau
  if (!Array.isArray(listStudents)) {
    return [];
  }

  // Utiliser map pour extraire les ids de chaque objet étudiant
  return listStudents.map((student) => student.id);
}
