export default function getStudentIdsSum(students) {
  const studentSum = students.reduce((sum, student) => sum + student.id, 0);
  return studentSum;
}
