// function add(a, b) {
//   return a + b;
// }

// function square(x) {
//   return x * x;
// }

// function three() {
//   return 3;
// }

// const add = (a, b) => a + b;
// const square = (x) => x * x;
// const three = () => 3;

// const add = (a, b) => {
//   const temp = a + b;
//   return temp;
// };

// function Person() {
//   this.age = 0;

//   setInterval(function () {
//     this.age++;
//     console.log(this.age);
//   }, 100);
// }

// const p = new Person();

// function Person() {
//   this.age = 0;

//   const that = this;
//   setInterval(
//     function () {
//       this.age++;
//       console.log(this.age);
//     }.bind(this),
//     1000
//   );
// }

// const p = new Person();

// Cara Kedua

function Person() {
  this.age = 0; // udah di asiign nilai age=0

  const that = this;
  setInterval(
    function () {
      // jika kita pakai function > defenisiin function dan bund(1. bisa menggunakan variabel 2. bisa langsung di panggil tanpa variabel)
      this.age++;
      console.log("test person: " + this.age);
    }.bind(this),
    1000
  );
}

// bisa menggunakan variabel
const p = new Person();
