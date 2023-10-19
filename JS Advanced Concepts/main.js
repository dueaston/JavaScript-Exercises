/*Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.*/
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}

	notifyObservers() {
		this.observers.forEach(observer => {
			observer.update();
		});
	}
}

class Observer {
	update() {
		console.log('Observer updated!');
	}
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers();

/*Destructure the person object to extract the name and age properties into variables.
Use array destructuring to get the second and fourth items from the fruits array.
Extract the city and country properties from the address object nested within the person object using nested destructuring.*/
const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

const { name, age } = person;

const [, secondFruit, , fourthFruit] = fruits;

const { address: { city, country } } = person;

console.log(name); // Output: 'John'
console.log(age);  // Output: 30
console.log(secondFruit); // Output: 'banana'
console.log(fourthFruit); // Output: 'date'
console.log(city); // Output: 'New York'
console.log(country); // Output: 'USA'

/*Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
Invoke the fetchPosts function and log the results.*/
async function fetchPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched posts:', data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}
fetchPosts();

/*Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
The data passed to each observer's update method should be the list of posts fetched.
Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.*/
class Subject {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}

	notifyObservers(data) {
		this.observers.forEach(observer => {
			observer.update(data);
		});
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Failed to fetch data. Status: ${response.status}`);
			}

			const posts = await response.json();
			this.notifyObservers(posts);
		} catch (error) {
			this.notifyObservers(error.message);
		}
	}
}

class Observer {
	update(data) {
		if (typeof data === 'string') {
			console.log('Error:', data);
		} else if (Array.isArray(data) && data.length > 0) {
			console.log('Title of the first post:', data[0].title);
		}
	}
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.fetchAndNotify();