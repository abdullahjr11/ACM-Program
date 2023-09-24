/*
    const objectVariable = {
  property1: 'i am property 1';
    property2: 'i am property 2';
    property3: [20, 30, 40];
} 
*/
// It creates an invalid error because these semicolons are not be used here.
// Semicolons are not used in there. A comma should be used there.

const objectVariable = {
  property1: "I am property1",
  property2: "I am property2",
  property3: [20, 30, 40],
};
console.log(objectVariable.property3[2]);
//This is the right method to do this code.
