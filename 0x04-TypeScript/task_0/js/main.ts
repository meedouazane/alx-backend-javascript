interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}
const std1: Student = {
    firstName: "Oussman",
    lastName: "Demebele",
    age: 26,
    location: "Paris"
}
const std2: Student = {
    firstName: "achraf",
    lastName: "Hakimi",
    age: 25,
    location: "Paris"
}
const studentsList: Student[] = [std1,std2];
const table = document.createElement('table');
studentsList.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${student.lastName}</td>
    <td>${student.firstName}</td>
    <td>${student.age}</td>
    <td>${student.location}</td>
  `;
    table.appendChild(row);
})
