/*
Scenario: You are building a calculator for an online math game. The calculator must include functionality to perform the following:
● Absolute Value Calculation: Given any number, return its absolute value.
● Power Calculation: Calculate and return the value of a base raised to a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a specified range.
● Custom Rounding: Round a number to a specified number of decimal places.

1. Write a function for each operation listed above using the Math module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12, 0.5, 27].
● Generate a random number between 1 and 50.
● Round 23.67891 to 2 decimal places
*/
const readline = require('readline-sync'); // setup readline sync

let numberValue = readline.question("Enter a number: ");

// Task 1: Absolute value calculation
function calculateAbsoluteValue(num) {
    return Math.abs(numberValue);
}
console.log(`The absolute value of ${numberValue} is: ` + calculateAbsoluteValue());

// Task 2: Create a power calulation
function calculatePower(num) {
    return Math.pow(numberValue, 3);
}
console.log(`The base value of ${numberValue} raised to the power of 3 is: ` + calculatePower());

// Task 3: Create a power calulation
function calculateSquareRoot(num) {
    return Math.sqrt(numberValue);
}
console.log(`The square root of ${numberValue} is: ` + calculateSquareRoot());

// Task 4: Determine the largest and smallest values from [3, 78, -12, 0.5, 27].
let numberArray = [3, 78, -12, 0.5, 27];
function findMin(num) {
    return Math.min(...numberArray);
}

function findMax(num) {
    return Math.max(...numberArray);
}
console.log(`The min value is: ` + findMin(numberArray));
console.log(`The min value is: ` + findMax(numberArray));

// Task 5: Generate a random number
function generateRandomNumber() {
    const min = 1;
    const max = 50;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(`A random number between 1 to 50 is: ` + generateRandomNumber());

// Task 6: Custom rounding 23.67891 to 2 decimal places
function customRounding(num) {
    return Math.round(23.67891 * 100)/100;
}
console.log(`23.67891 rounded to 2 decimal places is: ` + customRounding());

/*
function runCalculator() {
    console.log(`Math Calculator - Please choose a function: 
        1. Absolute Value Calculator
        2. Power Calculator
        3. Square Root Finder
        4. Maximum Value finder
        5. Mininum Value Finder
        6. Random Number Generator 1-50
        7. Custom Rounding to 2 Decimal Places
        `);
}

const selection = readline.question("Enter a calculator number 1-7: ");
*/