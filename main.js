"use strict";
// : Dividing and Finding the Remainder: Write a function that divides two numbers and
//  returns both the quotient and the remainder. Use an object to return both values.
function divideAndRemainder(dividen, diviser) {
    let quotient = Math.floor(dividen / diviser);
    let remainder = dividen % diviser;
    return { quotient, remainder };
}
console.log(divideAndRemainder(5, 2));
