// Part 1: 
// "Create a button that changes text when clicked"

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let paragraph = document.querySelector('#paragraph');    
// button1.addEventListener('click', function() {
//     paragraph.textContent = "Button 1 clicked";
//     paragraph.style.color = "red";
// });
// button2.addEventListener('click', function() {
//     paragraph.textContent = "Button 2 clicked";
//     paragraph.style.color = "blue";
// });



// Part 2: Data Types & Type Coercion in JS 
// JavaScript is loosely typed
// let x = 5;        // number
// x = "hello";      // now it's a string - totally fine in JS

// // Type coercion (automatic conversion)
// console.log("5" + 5);      // "55" (string concatenation)
// console.log("5" - 5);      // 0 (converts to number)
// console.log("5" * 2);      // 10 (converts to number)
// console.log("5" == 5);     // true (loose equality, converts types)
// console.log("5" === 5);    // false (strict equality, checks type too)

// // Getting input values - ALWAYS strings!
// let age = ageInput.value;  // This is a STRING "25", not number 25
// console.log(age + 5);      // "255" not 30!

// // // Convert to number
// // let age = Number(ageInput.value);  // Now it's 25
// // // OR
// // let age = parseInt(ageInput.value);

// // "In JS, input values are ALWAYS strings. If you're doing math, convert them first with Number() or parseInt()."
// // Quick exercise:

// // "Fix this calculator - why does 5 + 3 give 53?"
// // let num1 = input1.value;  // "5"
// // let num2 = input2.value;  // "3"
// // let sum = num1 + num2;    // "53" - BUG!
// // console.log(sum);
// // Answer: Convert to numbers first.

// // Part 3: Functions in JavaScript (30 min)
// // Function declaration
// function greet(name) {
//     return "Hello, " + name;
// }

// // // Function expression
// const greet = function(name) {
//     return "Hello, " + name;
// };

// // Arrow function (ES6 - modern JS)
// const greet = (name) => {
//     return "Hello, " + name;
// };

// // Arrow function shorthand
// const greet = name => "Hello, " + name;

// "All four do the same thing. Arrow functions are modern and common. You'll see all of these in real code."


// // Using functions with DOM:
// // Instead of repeating code...
// button1.addEventListener('click', function() {
//     paragraph.textContent = "Button 1 clicked";
//     paragraph.style.color = "red";
// });

// button2.addEventListener('click', function() {
//     paragraph.textContent = "Button 2 clicked";
//     paragraph.style.color = "blue";
// });

// // Use a function
// function updateText(message, color) {
//     paragraph.textContent = message;
//     paragraph.style.color = color;
// }

// button1.addEventListener('click', () => updateText("Button 1 clicked", "red"));
// button2.addEventListener('click', () => updateText("Button 2 clicked", "blue"));
// Exercise:
// "Refactor your previous code to use functions - make a reusable validation function, a reusable display function, etc."

// Part 4: Arrays & DOM Manipulation 
// Array of items
const tasks = ["Buy groceries", "Study JavaScript", "Go to gym"];

let taskList = document.querySelector('#taskList');

// Loop through and create li elements
tasks.forEach(task => {
    let li = document.createElement('li');  // Create new element
    li.textContent = task;
    taskList.appendChild(li);  // Add to the DOM
});
console.log(taskList);

// Key JS DOM methods:
// Creating elements
let newDiv = document.createElement('div');
let newP = document.createElement('p');

// Adding content
newP.textContent = "Hello";
newDiv.innerHTML = "<strong>Hello</strong>";  // Careful with this!

// Adding to DOM
parent.appendChild(newElement);
parent.insertBefore(newElement, existingElement);

// Removing from DOM
element.remove();
parent.removeChild(element);

// // Modifying attributes
// element.setAttribute('class', 'active');
// element.getAttribute('class');
// element.classList.add('active');
// element.classList.remove('active');
// element.classList.toggle('active');



// Key concepts covered:

// createElement() - creating elements dynamically
// appendChild() - adding to DOM
// .remove() - removing from DOM
// .classList.toggle() - toggling classes
// Event delegation
// Keyboard events (keypress)
// .trim() - removing whitespace
// Returning early from functions

// ------------------------------------------********------------------------------------------------//

// Part 5: Object Manipulation & Storing Data
// Objects in JS
// const user = {
//     name: "Ahmed",
//     age: 21,
//     email: "ahmed@email.com",
//     isStudent: true
// };

// // Accessing properties
// console.log(user.name);  // dot notation
// console.log(user['name']);  // bracket notation

// // Array of objects
// const users = [
//     { name: "Ahmed", age: 21 },
//     { name: "Karim", age: 23 },
//     { name: "Sara", age: 20 }
// ];

// // Loop through and display
// users.forEach(user => {
//     console.log(user.name + " is " + user.age + " years old");
// });

// PRACTICAL: User Cards Display
// const users = [
//     { name: "Ahmed Benali", role: "Developer", email: "ahmed@dev.dz" },
//     { name: "Karim Mansouri", role: "Designer", email: "karim@design.dz" },
//     { name: "Sara Ziani", role: "Manager", email: "sara@manage.dz" }
// ];

// const container = document.querySelector('#userContainer');

// users.forEach(user => {
//     // Create card
//     const card = document.createElement('div');
//     card.className = 'user-card';
    
//     // Build card HTML
//     card.innerHTML = `
//         <h3>${user.name}</h3>
//         <p><strong>Role:</strong> ${user.role}</p>
//         <p><strong>Email:</strong> ${user.email}</p>
//     `;
    
//     container.appendChild(card);
// });
// Note on .innerHTML:
// ".innerHTML lets you write HTML as a string. It's convenient but be careful 
// never use it with user input because of XSS attacks. For now, it's fine for learning."



// Part 6: Event Object & Advanced Events 
// javascript// The event object
// button.addEventListener('click', function(event) {
//     console.log(event);  // See all the info about the click
//     console.log(event.target);  // The element that was clicked
//     console.log(event.type);  // "click"
// });

// // Prevent default behavior
// link.addEventListener('click', function(e) {
//     e.preventDefault();  // Don't follow the link
//     console.log("Link clicked but not followed");
// });

// // Form submission
// form.addEventListener('submit', function(e) {
//     e.preventDefault();  // Don't refresh the page
//     // Handle form data here
// });



// Part 7: Template Literals & String Manipulation 
// javascript the Old way
// let message = "Hello, " + name + "! You are " + age + " years old.";

// // Modern way (template literals)
// let message = `Hello, ${name}! You are ${age} years old.`;

// // Multi-line strings
// let html = `
//     <div class="card">
//         <h2>${user.name}</h2>
//         <p>${user.email}</p>
//     </div>
// `;

// // Useful for building HTML dynamically

// Part 8: Array Methods 
// Quick review of important array methods for web dev:
// const numbers = [1, 2, 3, 4, 5];

// // forEach - loop through
// numbers.forEach(num => console.log(num));

// // map - transform array
// const doubled = numbers.map(num => num * 2);  // [2, 4, 6, 8, 10]

// // filter - filter array
// const evens = numbers.filter(num => num % 2 === 0);  // [2, 4]

// // find - find first match
// const found = numbers.find(num => num > 3);  // 4

// // some - check if any match
// const hasEven = numbers.some(num => num % 2 === 0);  // true

// // every - check if all match
// const allPositive = numbers.every(num => num > 0);  // true
// Practical example with DOM:
// const products = [
//     { name: "Laptop", price: 50000 },
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3000 }
// ];

// // Filter expensive products
// const expensive = products.filter(p => p.price > 2000);

// // Display them
// expensive.forEach(product => {
//     const div = document.createElement('div');
//     div.textContent = `${product.name}: ${product.price} DZD`;
//     container.appendChild(div);
// });

// FINAL PROJECT FOR SESSION 2: Product Filter/Search
// Combines everything since it covers:

// Array methods (filter, sort)
// Event handling (input, change)
// Dynamic DOM creation
// Template literals
// Functions
// Object manipulation



// HOMEWORK FOR SESSION 2
// "Build a simple expense tracker:

// Add expense (name, amount, category)
// Display list of expenses
// Filter by category
// Show total amount
// Delete expenses"