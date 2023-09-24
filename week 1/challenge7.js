// two blocks of code, which one would we recommend using and why;
// The same answeer
/*
 const firstNumber = 20;
 const secondNumber = '20';
 const result = firstNumber === secondNumber;
 console.log(result);
 ----------------------------
const firstNumber = 20;
const secondNumber = '20';
const result = firstNumber == secondNumber;
console.log(result);
------------------------------
*/

const firstNumber = 20;
const secondNumber = "20";
const result = firstNumber === Number(secondNumber);
console.log(result);
// true case.
