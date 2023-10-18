//Write a function called greet that takes a name as an argument and returns a greeting message.
function greet(name) {
  let greeting = "Hello, " + name + "!";
  return greeting;
}

let personName = "Dusty";
let greetingMessage = greet(personName);
console.log(greetingMessage);

//Write a JavaScript function called multiply that takes two numbers as arguments and returns their product.
let multiply = function(num1, num2) {
  return num1 * num2;
};

let result = multiply(5, 3);
console.log(result);

//Create a JavaScript object called person with properties for name, age, and gender. Assign appropriate values to the properties and display the object on the console.
let person = {
  name: "Dusty",
  age: 100,
  gender: "Male"
};

console.log(person);

//Create a JavaScript object called car with properties for make, model, and year. Assign appropriate values to the properties and display the object on the console.
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
};

console.log(car);

//Write a JavaScript function called reverseString that takes a string as an argument and returns the reverse of the string. For example, if the input is "Hello", the function should return "olleH".
let reverseString = function(str) {
  return str.split("").reverse().join("");
};

let reversed = reverseString("Hello");
console.log(reversed);

//Write a JavaScript function called calculateArea that takes the radius of a circle as an argument and returns the area of the circle. Use the formula A = π * r^2.
function calculateArea(radius) {
  const pi = Math.PI; 
  const area = pi * Math.pow(radius, 2);
  return area;
}
const radius = 5;
const circleArea = calculateArea(radius);
console.log(circleArea);

//Use the Date object to display the current date and time on the console.
const currentDate = new Date();
console.log(currentDate);

//Use the Math object to generate a random number between 1 and 10 and display it on the console.
const min = 1;
const max = 10;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);

//Create a function that takes in an argument and uses string interpolation to print that arguments value somewhere in a text string.
function printWithInterpolation(input) {
  console.log(`The value of the argument is: ${input}`);
}

const myArgument = "example";
printWithInterpolation(myArgument);

//Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.
function objectToSortedArrays(obj) {
  const keys = Object.keys(obj).sort(); 
  const values = keys.map(key => obj[key]); 

  return [keys, values];
}

const exampleObject = {
  b: 2,
  a: 1,
  c: 3
};

const [sortedKeys, sortedValues] = objectToSortedArrays(exampleObject);

console.log("Sorted Keys:", sortedKeys);
console.log("Corresponding Values:", sortedValues);

//Given an input string, reverse the string word by word. Define a function that does this.
function reverseWords(input) {
  
  const words = input.split(" ");

  const reversedString = words.reverse().join(" ");

  return reversedString;
}

const inputString = "Hello World";
const reversed = reverseWords(inputString);
console.log(reversed);

//Given a string containing just the characters '(', ')', ', ', '[' and ']', determine if the input string is valid (i.e., has balanced parentheses). Write a unction that determines this.
function isValid(input) {
  const stack = [];
  const parentheses = {
    '(': ')',
    '[': ']',
  };

  for (const char of input) {
    if (char in parentheses) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (char !== parentheses[top]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const inputString = "([])";
const isInputValid = isValid(inputString);
console.log(isInputValid);

//Write a function that checks whether two given words are anagrams of each other.
function areAnagrams(word1, word2) {
  
  word1 = word1.replace(/\s/g, "").toLowerCase();
  word2 = word2.replace(/\s/g, "").toLowerCase();

  if (word1.length !== word2.length) {
    return false;
  }

  const sortedWord1 = word1.split("").sort().join("");
  const sortedWord2 = word2.split("").sort().join("");

  return sortedWord1 === sortedWord2;
}

const word1 = "listen";
const word2 = "silent";

if (areAnagrams(word1, word2)) {
  console.log(`'${word1}' and '${word2}' are anagrams.`);
} else {
  console.log(`'${word1}' and '${word2}' are not anagrams.`);
}

//Write a function that prints the numbers from 1 to 100. But for multiples of three, instead of the number, print "Fizz"; for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
function fizzBuzz() {
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
  }
}
fizzBuzz();

//Write a function that checks if a given word or phrase is a palindrome (reads the same backward as forward, ignoring spaces, punctuation, and capitalization).
function isPalindrome(wordOrPhrase) {
  
  wordOrPhrase = wordOrPhrase.toLowerCase().replace(/[\s.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

  
  return wordOrPhrase === wordOrPhrase.split("").reverse().join("");
}
const input = "A man, a plan, a canal, Panama";
if (isPalindrome(input)) {
  console.log(`"${input}" is a palindrome.`);
} else {
  console.log(`"${input}" is not a palindrome.`);
}

//Use String.prototype.split() and other String methods to reverse the words in a sentence.
function reverseWords(sentence) {
  
  const words = sentence.split(" ");

  const reversedSentence = words.reverse().join(" ");

  return reversedSentence;
}
const sentence = "This is a sample sentence";
const reversed = reverseWords(sentence);
console.log(reversed);