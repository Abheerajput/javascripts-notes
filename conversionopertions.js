let score ="43abc"

console.log(typeof score);
console.log(typeof (score));

 
let valueInNumber = Number(score)
console.log( typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; fail => 0;

 
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


let someNumber =56
let stringNumber =String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
