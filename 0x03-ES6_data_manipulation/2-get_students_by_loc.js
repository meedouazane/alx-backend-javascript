export default function getStudentsByLocation(list, value) {
  const students = list.filter((student) => student.location === value);
  return students;
}
