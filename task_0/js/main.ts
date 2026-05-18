interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = { firstName:"James", lastName:"Bond", age:7, location:"London" };
const student2: Student = { firstName:"Sherlock", lastName:"Holmes", age:8, location:"London"};
const studentsList = [student1, student2];

const studentsTable = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const cellFirstName = document.createElement("td");
  cellFirstName.textContent = student.firstName;
  row.appendChild(cellFirstName)

  const cellLocation = document.createElement("td");
  cellLocation.textContent = student.location;
  row.appendChild(cellLocation);

  studentsTable.appendChild(row);
})
document.body.appendChild(studentsTable);

