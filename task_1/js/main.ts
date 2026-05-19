interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'Jane',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printMyTeacher: printTeacherFunction = printTeacher;
console.log(printMyTeacher(teacher3.firstName, teacher3.lastName));

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework (): string;
  displayName (): string;
}

interface StudentClassConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor (firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework (): string {
    return "Currently working";
  }

  displayName (): string {
    return this.firstName;
  }
}

const MyStudentClass: StudentClassConstructor = StudentClass;
const student = new MyStudentClass("Jason", "Bourne");
console.log(student.displayName());
