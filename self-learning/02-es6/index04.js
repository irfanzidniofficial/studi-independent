// function greet(name, greeting) {
//   name = typeof name != "undefined" ? name : "Student";
//   greeting = typeof greeting != "undefined" ? greeting : "Welcome Kode";
//   return `${greeting} ${name}!`;
// }


function greet(name="Student", greeting = "Welcome Kode"){
    return `${greeting} ${name}!`;

}