// var kode = ["React", "Php", "Ruby"];

// let kode = ["React", "Php", "Ruby"];

// const kode = ["React", "Php", "Ruby"];

// Merge Array

var fruits = ["anggur", "melati", "apel", "jeruk"];
var buah_buahan = ["strawbery", "pir", "durian"];

fruits.push.apply(fruits, buah_buahan);

// Menghapus item pada array

fruits.splice(1);

// console.log(fruits);

// Mengkosongkan Array
fruits = [];

fruits.splice(0, fruits.length);
console.log(fruits);

// Array Multidimensi

var matkul = [Matematike[Perhitungan], "Indonesia"];
