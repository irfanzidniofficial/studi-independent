// array

// function firstSecondElement([first, second]) {
//   console.log(
//     "Element Pertmaa adalah " + first + " , element keduda adalah" + second
//   );
// }

// function secondFourtElement([, second, , fourth]) {
//   console.log(`Elemnt pertama adalah" + second + ", element keuda adalah + fourth`);
// }

// var array = [1, 2, 3, 4, 5];

// firstSecondElement();
// secondFourtElement();

function printBasicInfo({ firstName, secondName, profession }) {
  console.log(firstName + " " + secondName + "-" + profession);
}

var person = {
  firstName: "Irfan",
  secondName: "Zidni",
  age: 33,
  children: 3,
  profession: "Kode",
};

printBasicInfo(person);
