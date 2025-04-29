export default function getStudentsByLocation(students, city) {
  // Utiliser filter pour ne garder que les étudiants de la ville spécifiée
  return students.filter((student) => student.location === city);
}
