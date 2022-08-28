// Destrucring Object

const user = {};
user.name = "Muhammad Irfan Zidni";
user.handle = "@irfanzidni11";
user.location = "Jakarta, Indonesia";

// extraction

// const name = user.name;
// const handle = user.handle;
// const location = user.location;

console.log(user);

// Menggunakan Object Literal Notation

const person = {
  name: "Muhammad Irfan Zidni",
  handle: "@irfanzidni11",
  location: "Semarang, Indoensia",
};

const {name, handle, location} =person
console.log(name, handle, location);
