export default function updateStudentGradeByCity(students, city, newGrades) {
  // Filtrer les étudiants par ville
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Chercher la note correspondante dans newGrades
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

      // Créer une copie de l'étudiant avec la nouvelle note
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
