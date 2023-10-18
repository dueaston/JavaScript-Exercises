console.log("Hello, World!");

let name = "Dusty"; 
console.log(name);

// Calculate and display the area of a rectangle
let length = 10;
let width = 5;   

let area = length * width;

console.log("The area of the rectangle is: " + area);

// Check if the number is even or odd
let numberToCheck = 42;

if (numberToCheck % 2 === 0) {
  console.log(numberToCheck + " is even.");
} else {
  console.log(numberToCheck + " is odd.");
}
//Display numbers from 1 to 10 on the console using a for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Prompts user for their name and display a personalized message on the console.
let userName = prompt("Please enter your name:");

if (userName) {
  
  console.log("Hello, " + userName + "! Welcome to our website.");
} else {
  
  console.log("Hello, anonymous! Welcome to our website.");
}
//Calculate and display the factorial of a number. Prompt the user for a number and display its factorial on the console.
let userInput = prompt("Enter a number to calculate its factorial:");

let number = parseInt(userInput);

if (!isNaN(number)) {
  let factorial = 1;
  
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  
  console.log(`The factorial of ${number} is ${factorial}`);
} else {
  console.log("Invalid input. Please enter a valid number.");
}
// Determine if a given year is a leap year. Prompt the user for a year and display a message on the console indicating whether it is a leap year or not.
let userInput = prompt("Enter a year to check if it's a leap year:");

let year = parseInt(userInput);

if (!isNaN(year)) {
 
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
  } else {
    console.log(year + " is not a leap year.");
  }
} else {
  console.log("Invalid input. Please enter a valid year.");
}
//Calculate and display the sum of all numbers from 1 to 100 using a while loop.
let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
}
console.log("The sum of all numbers from 1 to 100 is: " + sum);

// Prompt the user for two numbers and performs the four basic arithmetic operations (addition, subtraction, multiplication, division) on those numbers. Display the results on the console.
const firstNumber = parseFloat(prompt("Enter the first number:"));


const secondNumber = parseFloat(prompt("Enter the second number:"));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
  
  const additionResult = firstNumber + secondNumber;
  const subtractionResult = firstNumber - secondNumber;
  const multiplicationResult = firstNumber * secondNumber;
  const divisionResult = firstNumber / secondNumber;

  console.log(`Addition: ${firstNumber} + ${secondNumber} = ${additionResult}`);
  console.log(`Subtraction: ${firstNumber} - ${secondNumber} = ${subtractionResult}`);
  console.log(`Multiplication: ${firstNumber} * ${secondNumber} = ${multiplicationResult}`);
  console.log(`Division: ${firstNumber} / ${secondNumber} = ${divisionResult}`);
} else {
  console.log("Invalid input. Please enter valid numbers.");
}

//Create a variable for every JavaScript Data Type
// String
const stringValue = "Hello, world!";

// Number
const numberValue = 42;

// Boolean
const booleanValue = true;

// Null
const nullValue = null;

// Undefined
let undefinedValue;

// Object
const objectValue = { key: "value" };

// Array
const arrayValue = [1, 2, 3, 4, 5];

// Variable with no default value declaration
let noValue;

//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
function generateMultiples(num, length) {
  if (length <= 0) {
    return []; 
  }

  const multiplesArray = [];
  let multiple = num;

  while (multiplesArray.length < length) {
    multiplesArray.push(multiple);
    multiple += num;
  }

  return multiplesArray;
}


const result = generateMultiples(3, 5);
console.log(result); 

//Determine whether a number is positive, negative, or zero. Display a message on the console indicating the type of the number.
const number = parseFloat(prompt("Enter a number:"));

if (!isNaN(number)) {
  if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}

//Display the multiplication table of a number up to 10 using a for loop.
const number = parseFloat(prompt("Enter a number to display its multiplication table:"));

if (!isNaN(number)) {
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}

//Create a function that checks if a given number is prime.
function isPrime(number) {
  
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; 
    }
  }

  return true; 
}
const numberToCheck = 17;
if (isPrime(numberToCheck)) {
  console.log(`${numberToCheck} is a prime number.`);
} else {
  console.log(`${numberToCheck} is not a prime number.`);
}