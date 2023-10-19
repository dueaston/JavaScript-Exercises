/*Given the code snippet. Explain what scopes are in this current context of the code.
1. outerFunction Scope
2. innerFunction Scope
3. Global Scope:
*/

/*Draft a JavaScript function where you call a function before its declaration.
Analyze the behavior and understand how hoisting impacts the outcome.*/
function mainFunction() {
	
	hoistedFunction();
	
	function hoistedFunction() {
		console.log("This is the hoisted function.");
	}
}

mainFunction();

/*Develop a JavaScript function that returns another function.
The inner function should have access to variables from the outer function's scope.*/
function createCounter() {
  let count = 0; 

 
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

/*Declare a global variable outside of any function.
Create a function that tries to modify that global variable.
Create another function that declares a local variable with the same name.
Observe the behavior when calling both functions.*/

let myVariable = "I'm a global variable";

function modifyGlobal() {
 
    myVariable = "Modified in the modifyGlobal function";
}

function localScopeTest() {
    
    let myVariable = "I'm a local variable in localScopeTest";
    console.log(myVariable); 
}
modifyGlobal(); 
localScopeTest(); 

console.log(myVariable); 

/*Design a function that accepts a parameter.
The function should return another function that uses the parameter in some way.*/
function functionFactory(param) {
  return function(innerParam) {
      return `Outer parameter: ${param}, Inner parameter: ${innerParam}`;
  };
}
const outerFunction = functionFactory("Outer Param");

const result = outerFunction("Inner Param");
console.log(result);

/*Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations.*/
function hoistingTest() {
  console.log(myVar); 

  let myVar = "Hello, hoisting!"; 
  console.log(myVar); 
}
hoistingTest();

/*Create a function that sets up a counter using closures.
The outer function should define a count variable.
The inner function should increment and print the count each time it's invoked.*/
function setupCounter() {
  let count = 0; 

  return function() {
      count++; 
      console.log(count); 
  }
}
const counter = setupCounter();

counter(); // Prints 1
counter(); // Prints 2
counter();// Prints 3

/* Create a function that initializes a counter variable. This function should return another function.
The returned function, when invoked, should increment the counter and print its value. However, if the counter reaches a certain value (e.g., 10), it should reset itself.
Notice how hoisting affects the behavior when you try to declare and initialize the counter after referencing it.
Comment on the role of closure in maintaining the counter's state across multiple invocations of the returned function.*/
function createCounter() {
  let counter = 0; 

  return function() {
      counter++; 
      console.log(counter); 

      if (counter >= 10) {
          counter = 0; 
      }
  };
}

const incrementAndReset = createCounter();

incrementAndReset(); // Prints 1
incrementAndReset(); // Prints 2
incrementAndReset(); // Prints 3
incrementAndReset(); // Prints 4
incrementAndReset(); // Prints 5
incrementAndReset(); // Prints 6
incrementAndReset(); // Prints 7
incrementAndReset(); // Prints 8
incrementAndReset(); // Prints 9
incrementAndReset(); // Prints 10

/*Define two functions: one that modifies a global variable and another that tries to modify a local variable (which is not yet declared).
Inside the second function, declare and initialize the local variable after attempting to modify it. Observe how hoisting comes into play.
Now, make use of closures: Modify the first function so that it becomes a factory function returning another function. This inner function should use the outer function's variables.
Reflect on how the local scope of the outer function is preserved for the inner function through closures, even after the outer function has finished execution.*/
let globalVar = 0;

function modifyGlobal() {
    globalVar++;
    console.log("Modified globalVar:", globalVar);
}

function modifyLocal() {
    localVar++; 
    let localVar = 1;
    console.log("Modified localVar:", localVar);
}

modifyGlobal(); 
modifyLocal();

//Closure
function createCounter() {
  let count = 0;

  return function () {
      count++;
      console.log("Modified count:", count);
  };
}
const counter = createCounter();
counter(); 
counter();

//Technical Interview Practice

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    
    if (numMap.has(complement)) {
      return [numMap.get(complement), i]; 
    }

    numMap.set(num, i); 
  }
  return [];
}
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]

//Find the number that appears only once in an array.
function findSingleNumber(nums) {
  let result = 0;
  
  for (let num of nums) {
    result ^= num; // XOR operation
  }
  
  return result;
}
const nums = [4, 1, 2, 1, 2];
const singleNumber = findSingleNumber(nums);
console.log(singleNumber);

//Print numbers from 1 to n, but for multiples of 3, print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}
const n = 15;
const output = fizzBuzz(n);
console.log(output);

//Given a string s, find the first non-repeated character in it and return its index. If it doesn't exist, return -1.
function firstUniqChar(s) {
  const charCount = new Map();

  // Count the frequency of each character
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  // Find the first non-repeated character
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
const s = "loveleetcode";
const result = firstUniqChar(s);
console.log(result); // Output: 2

//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
function moveZeroes(nums) {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
      nonZeroIndex++;
    }
  }
}
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]