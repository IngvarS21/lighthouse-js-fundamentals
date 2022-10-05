// Simple hello function
const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

// Improved hello function
const sayHello  = function (name) {
  console.log("Hello, " + name);
}

//Function return plus console log
const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);