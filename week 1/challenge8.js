/*
const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;
console.log(expression5);
*/
// expression1 = 0 bcz 50 is factor of 100.
// expression2 = 2
// expression3 = true
// expression4 = true
//expression5 = false
// Expression5 evalutes to false.

// These steps code in a single line.
const result = !(100 % 50 < 100 / 50 && 300 + 5 === 305);
console.log(result);
