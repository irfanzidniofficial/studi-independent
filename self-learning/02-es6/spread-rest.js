// Rest => colllector geather / sisanya

// var [c, ...m] = [1, 2, 3, 4, 5];

// // sama dengan

// var c = 1;
// var m = [2, 3, 4, 5];

// function foo(x, y, ...z) {
//   console.log(x, y, z);
// }

// foo(1, 2, 3, 4, 5);

// // Spread => menyebarkan 

// var params = ["Hello", true, 8];

// var other = [1, 2, ...params, 3];

var a = [2, 3, 4];
var b = [1, ...a, 5];

console.log(b);
