export default function updateStudentGradeByCity(students, location, arr) {
  let student_location = students.filter(student => student.location === location);
  const grade = student_location.filter(student => student.id === arr.studentId)
  .map(student => student.push(arr.grade));
  return grade;
}
