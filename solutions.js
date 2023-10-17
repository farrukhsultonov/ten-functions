"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// 1. isTrue
function isTrue(input) {
    return input === true;
}

// 2. isFalse
function isFalse(input) {
    return input === false;
}

// 3. not
function not(input) {
    return !input;
}

// 4. addOne
function addOne(input) {
    return Number(input) + 1;
}

// 5. isEven
function isEven(input) {
    let evenInput = parseFloat(input);
    return (evenInput % 2 === 0);
}

// 6. isIdentical
function isIdentical(arg1, arg2) {
    return arg1 === arg2;
}

// 7. isEqual
function isEqual(arg1, arg2) {
    return arg1 == arg2;
}

// 8. or
function or(arg1, arg2) {
    return arg1 || arg2;
}

// 9. and
function and(arg1, arg2) {
    return arg1 && arg2;
}


// 10. concat
// function concat(arg1, arg2) {
//     if (arg1 === true && arg2 === true) {
//         return "truetrue";
//     } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
//         return arg1 + arg2; // Concatenate two strings
//     } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
//         return String(arg1) + String(arg2); // Convert numbers to strings and concatenate
//     }
// }

function concat(arg1, arg2) {
    let stringOne = arg1.toString();
    let stringTwo = arg2.toString();
    return (stringOne + stringTwo)
}
