interface DirectorInterface {
  workFromHome (): string;
  getCoffeeBreak (): string;
  workDirectorTasks (): string;
}

interface TeacherInterface {
  workFromHome (): string;
  getCoffeeBreak (): string;
  workTeacherTasks (): string;
}

class Director implements DirectorInterface {
  workFromHome () {
    return "Working from home";
  }

  getCoffeeBreak () {
    return "Getting a coffee break";
  }

  workDirectorTasks () {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome () {
    return "Cannot work from home";
  }

  getCoffeeBreak () {
    return "Cannot have a break";
  }

  workTeacherTasks () {
    return "Getting to work";
  }
}

function createEmployee (salary: number | string): Director | Teacher {
  if ((typeof salary === "number") && (salary < 500)) {
    return new Teacher();
  }

  return new Director();
}

const employee200 = createEmployee(200);
const employee1000 = createEmployee(1000);

console.log(employee200);
console.log(employee1000);
console.log(createEmployee('$500'));

function isDirector (employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

function executeWork (employee: Director | Teacher) {
  return isDirector(employee) ? employee.workDirectorTasks() : employee.workTeacherTasks();
}

console.log(executeWork(employee200));
console.log(executeWork(employee1000));

type Subjects = "Math" | "History";

function teachClass (todayClass: Subjects) {
  return `Teaching ${todayClass}`;
}

console.log(teachClass("Math"));
