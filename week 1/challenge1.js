// Challenge-1
// 1.
const myBoolean = "true";
//2.
const myString = "hello world";
//3.
const firstNumber = 20;
//4.
let secondNumber = 40;
//5.
secondNumber = 80;
//6
const myArray = ["myBoolean", "myString"];
//7
const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber,
};
//8.
console.log(myObject);
//9.
const sumProp = myObject.sumProperty;
console.log(sumProp);
//10.
const value = myObject.firstProperty[1];
console.log(value);
