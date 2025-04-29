export default function getStudentIdsSum(students) {
  // Utiliser reduce pour calculer la somme des ids
  return students.reduce((sum, student) => sum + student.id, 0);
}
