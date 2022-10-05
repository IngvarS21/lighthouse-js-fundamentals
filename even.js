//num can vary and therefore so will the result of num % 2 === 0. 
//If num is even, the result of num % 2 is 0 and so the whole expression evaluates to true. 
//The opposite happens when num is odd.

const isEven  = function (num) {
  return num % 2 === 0;
}

//After evaluating the expression to true or false, the function returns this value where it's called.

const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//Simplified version:

const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));