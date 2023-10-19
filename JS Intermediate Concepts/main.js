/*Create three functions: one global, one as an object method, and an arrow function inside an object.
Print the value of this inside each function.
Discuss or note down the differences you observe in the value of this across the three scenarios.*/
// Global function
function globalFunction() {
  console.log("Global function - this:", this);
}

// Object with a method
const myObject = {
  name: "Object Method",
  method: function() {
    console.log("Object method - this:", this);
  }
};

// Object with an arrow function
const anotherObject = {
  name: "Arrow Function",
  arrowMethod: () => {
    console.log("Arrow function in object - this:", this);
  }
};

globalFunction(); // Global function - this: Window (or global object in a browser environment)

myObject.method(); // Object method - this: myObject (the object itself)

anotherObject.arrowMethod();

/*Define a Person class with properties name and age.
Add a method greet() to this class which outputs a greeting.
Instantiate two different Person objects and invoke their greet methods.*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  }
}
const person1 = new Person("Dusty", 100);
const person2 = new Person("Bob", 25);

person1.greet(); 
person2.greet();

/*Modify your Person class. The constructor should now accept and initialize name and age properties.
Create two different Person instances with unique names and ages.*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  }
}
const person1 = new Person("Dusty", 100);
const person2 = new Person("Bob", 25);

person1.greet(); 
person2.greet();

/*Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
  }

  static info() {
    return "This is a Person class.";
  }
}
console.log(Person.info());

// Create a Person instance
const person1 = new Person("Dusty", 100);

console.log(person1.info());

/*Within your Person class, add getters and setters for the age property.
Ensure with the setter that age can't be set to a negative value.
Instantiate a Person object, try setting a negative age, and observe the results.*/
class Person {
  constructor(name, age) {
    this.name = name;
    this._age = age; 
  }
  get age() {
    return this._age;
  }

  set age(age) {
    if (age < 0) {
      console.log("Age cannot be set to a negative value.");
    } else {
      this._age = age;
    }
  }
}
const person = new Person("John", 30);

console.log("Current age:", person.age);

person.age = -5;

console.log("Updated age:", person.age);

//Exercise 6 not included in this code 

/*As a challenge, design a Library class. This class should be able to store book objects.
For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
The Library should feature methods that allow a user to add a book, remove a book, and list all books.
Implement this system and run a series of operations, such as adding a book, listing books, etc.*/
class Book {
  constructor(title, author, yearPublished, isbn) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    let _isbn = isbn; // Private field for ISBN

    // Getter for ISBN
    this.getISBN = function() {
      return _isbn;
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  // Add a book to the library
  addBook(book) {
    this.books.push(book);
    console.log(`Added "${book.title}" to the library.`);
  }

  // Remove a book from the library by ISBN
  removeBook(isbn) {
    const index = this.books.findIndex(book => book.getISBN() === isbn);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(`Removed "${removedBook.title}" from the library.`);
    } else {
      console.log("Book not found in the library.");
    }
  }

  // List all books in the library
  listBooks() {
    console.log("Books in the library:");
    this.books.forEach(book => {
      console.log(`Title: ${book.title}, Author: ${book.author}, Year Published: ${book.yearPublished}, ISBN: ${book.getISBN()}`);
    });
  }
}

// Create a Library
const myLibrary = new Library();

// Add some books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "123456789");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "987654321");

myLibrary.addBook(book1);
myLibrary.addBook(book2);

// List all books in the library
myLibrary.listBooks();

// Remove a book by ISBN
myLibrary.removeBook("123456789");

// List books after removal
myLibrary.listBooks();

/*Create a class Student with properties name and grades. Implement methods to add grades and compute the average. How does the this keyword behave differently in arrow functions compared to regular functions?*/
class Student {
  constructor(name) {
    this.name = name;
    this.grades = [];
  }
  addGrade(grade) {
    this.grades.push(grade);
  }

  computeAverage() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return this.grades.length > 0 ? sum / this.grades.length : 0;
  }
}
const student1 = new Student("Alice");

student1.addGrade(95);
student1.addGrade(87);
student1.addGrade(91);

console.log(`${student1.name}'s average grade: ${student1.computeAverage()}`);
/*In regular functions: When you use this inside a regular function, the value of this depends on how the function is called.In arrow functions: Arrow functions capture the this value from their containing lexical context. */