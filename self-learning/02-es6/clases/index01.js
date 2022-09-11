// Deklarasi clases js yang lama

// function person(name, height) {
//   this.name = name;
//   this.height = height;
// }

// person.protoype.sayName = function () {
//   this.console.log(this.name);
// };

// ES6
// class Person {
//   constructor() {
//     this.name = "Person";
//     this.height = 150;
//   }
// }

// sayName(){
//     console.log(this.name);
// }

// Pewarisan

class Person {
  constructor() {
    this.name = "Person";
    this.height = 150;
  }
  sayName() {
    console.log(this.name);
  }
}

class Developer extends Person {
  constructor(name, height) {
    super(name, height);
    this.name = "Developer";
  }
}

var Kode = new Developer();

Kode.sayName();
