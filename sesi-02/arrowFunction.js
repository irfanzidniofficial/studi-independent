// function declaration

// menyimpan kedalam sebuah variabel

function add(a, b) {
  return a + b;
}

// function expression
// functionnya harus di inialisasi dulu , baru dipanggil

const add = function (a, b) {
  return a + b;
};

// arrow function

const add = (a, b) => {
  return a + b;
};

console.log(add);
