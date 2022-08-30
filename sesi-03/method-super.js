class Person {
  constructor(name) {
    this._name = name;
  }
  doWork() {
    return "complete!";
  }
  getName() {
    return this._name;
  }
}

// Memanggil method super

class Employee extends Person {
  constructor(name, title) {
    super(name);
    this._title = title;
  }
  getTitle() {
    return this._title + " is " + this._name;
  }
}

const employee = new Employee("Scot Moss", "Mahasiswa");

console.log(employee.getName());
console.log(employee.doWork());
console.log(employee.getTitle());
