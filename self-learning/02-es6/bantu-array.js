// Filter

const values = [1, 60, 24, 30, 20, 7];

function lessThan20(val) {
  return val < 20;
}

const valueLessThan20 = values.filter(lessThan20);

console.log(valueLessThan20);

// Find =< Mencari pertama yang ditemukan

// const people = [
//   { name: "Irfan", age: 38 },
//   { name: "Edi", age: 9 },
//   { name: "Putra", age: 40 },
//   { name: "Astrid", age: 19 },
//   { name: "Raka", age: 16 },
// ];

// function teenager(person) {
//   return person.age > 10 && person.age < 20;
// }

// var firstTeenager = people.find(teenager);

// console.log("Belia yang ditemukan adalah: ", firstTeenager);

// // Every:

// const people = [
//   { name: "Irfan", age: 38 },
//   { name: "Edi", age: 9 },
//   { name: "Putra", age: 40 },
//   { name: "Astrid", age: 19 },
//   { name: "Raka", age: 16 },
// ];

// function teenager(person) {
//   return person.age > 10 && person.age < 20;
// }

// var firstTeenager = people.every(teenager);

// console.log("Semua yang di array adalah belia: ", firstTeenager);

// Some

// const people = [
//   { name: "Irfan", age: 38 },
//   { name: "Edi", age: 9 },
//   { name: "Putra", age: 40 },
//   { name: "Astrid", age: 19 },
//   { name: "Raka", age: 16 },
// ];

// function teenager(person) {
//   return person.age > 10 && person.age < 20;
// }

// var firstTeenager = people.some(teenager);

// console.log("Beberapa yang di array adalah belia: ", firstTeenager);

// // Foreach => Mengeluarkan satu per satu

// var colors = ["red", "green", "blue"];

// function print(val) {
//   console.log(val);
// }

// colors.forEach(print);

// // Map

// var colors = ["red", "green", "blue"];
// function kapital(val) {
//   return val.toUpperCase();
// }

// var warnaKapital = colors.map(kapital);

// console.log(warnaKapital);

// // Reduce;

let foods = [800, 200, 100, 300];

let total = foods.reduce(function (sum, item) {
  return sum + item;
});

console.log(total);
