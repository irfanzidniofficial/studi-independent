// var sudah tidak dipakai lagi di ES6

let nama = "Zidni";
let score;
score = 50;

// bisa juga dengan
// let score = 50;

console.log("Hasil variabel scroe " + score);

let playerName = "Budi";
console.log("Hasil variabel playName " + playerName);

// alert(playerName);

playerName - "Irfan";
console.log("Halo playerName " + playerName);
// alert(playerName);

// bukan berupa boject atau array > tidak bisa diganti
const angkaKeberuntungan = 10;

// sample
// umum yang biasa di gunakan
// id, nama, jeniskelamin
const objectAngkaKeb = { id: 1, nama: "Irfan", jenkel: "L" };

objectAngkaKeb.id = 2;

// const bisa dirunah jika tipe datanya array dan objct

console.log(objectAngkaKeb);

// sample > array

const arrayNumber = [1, 2, 3, 4, 5];
arrayNumber.push(6);

console.log(arrayNumber);
