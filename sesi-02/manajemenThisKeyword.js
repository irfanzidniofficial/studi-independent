function Person() {
  this.age = 0;

  setInterval(
    function () {
      this.age++;
      console.log(that.age);
    }.bind(this),
    1000
  );
}

const p = new Person();

// Cara Kedua
