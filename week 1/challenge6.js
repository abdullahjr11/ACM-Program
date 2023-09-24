/* 
this code does not work. we have to correct this one.
*/
/*
const numberVariable = 0;
numberVariable++;
numberVariable++;
numberVariable++;
console.log(numberVariable);
*/

// We cannot use const here because we change the value of variable later. we use let instead of const.
let numberVariable = 0;
numberVariable++;
numberVariable++;
numberVariable++;
console.log(numberVariable);
// the output will be 3
// numberVariable = numberVarible + 1;
