// import Employee from "./javascript-modules";

// Bisa juga import dengan desctructuring object

import { Person, Employee } from "./javascript-modules";



const mark = new Employee("Mark VCubus");

mark.doWork();

export class Person {
  constructor(name) {
    this._name;
  }
  getName() {
    return this._name;
  }
}

export class Employee extends Person {
  doWork() {
    return "complete";
  }
}
