// tidak menghilangkan data aslinya / membuat data baru

const animals = [
  { name: "Fluffy", species: "cat" },
  {
    name: "Carlo",
    species: "dog",
  },
  {
    name: "Nemo",
    species: "fish",
  },
  {
    name: "Hamilton",
    species: "dog",
  },
  {
    name: "Dory",
    species: "fish",
  },
  {
    name: "Ursa",
    species: "cat",
  },
];

// let names = [];
// for (let i = 0; i < animals.length; i++) {
//   names.push(animals[i].name);
// }

// console.log(names);

// lebih simple
let names = animals.map((animal) => animal.name + " is a" + animal.species);

console.log(names);
