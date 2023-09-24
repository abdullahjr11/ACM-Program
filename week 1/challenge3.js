// The question we are covered here is ;
// Adding a number into a string
const variable1 = 20;
const variable2 = "40";
const resultVariable = variable1 + variable2;
console.log(resultVariable);
// WE use typeof built in function to detect the data type of the result.
typeof resultVariable;
// We correct the method of addition by using the exact type of variable.
const number1 = 20;
const number2 = "40";
const sumNumber = number1 + Number(number2);
console.log(sumNumber);
// It will give the exact sum of numbers = 60
