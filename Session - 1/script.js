// ⚠️ Only one click example should be active at a time


// Part 1: Introduction to JavaScript
// Create index.html file
//  With :
// - A button
// - A heading
// - A paragraph
// - An input field



// Part 2: What is JavaScript? 
// JavaScript runs in the browser and makes pages interactive. 
// Console is where we test code

// Console log examples :
// alert("Hello!")
// console.log("This is JavaScript")
// 2 + 2
// "Ahmed" + " " + "Benali"



// Part 3: Variables and Data Types
// Variables 
// let = can change
let name = "Ahmed";
console.log(name);

name = "Karim"; // changed it
console.log(name);

// const = cannot change
const country = "Algeria";
console.log(country);

// country = "France"; // This will give ERROR

// Numbers
let age = 21;
console.log(age);

let price = 30;
console.log(price + " DZD");

// Exercise:
// let yourName = "___"; 
// let yourAge = __; 
// const yourCity = "___";
// let favoriteColor = "___";

// console.log(yourName);
// console.log(yourAge);
// console.log(yourCity);
// console.log(favoriteColor);


// Part 4: Selecting HTML Elements
// querySelector finds elements in  HTML : # for ID, . for class

let button = document.querySelector('#myButton');
let paragraph = document.querySelector('#myParagraph');
let input = document.querySelector('#myInput');

console.log(button);
console.log(paragraph);
console.log(input);

// Exercise:
// Select the elements with the following IDs and store them in variables:
// 1. "title" 
// 2. "description" 
// 3. "submitBtn"



// Part 5: Click Events 
// Example 1 :
// When button is clicked, change paragraph text

button.addEventListener('click', function () {
    paragraph.textContent = "You clicked the button!";
});

// Example 2 : New button - add to HTML:
// <button id="colorButton">Change Color</button>

let colorButton = document.querySelector('#colorButton');

colorButton.addEventListener('click', function() {
    document.body.style.backgroundColor = "lightblue";
});

// Exercise:
// Create a button in HTML  with the ID "colorButton"   
// When clicked, make background red

// Example 3 - Multiple changes:
// let button = document.querySelector('#myButton');
// let paragraph = document.querySelector('#myParagraph');
button.addEventListener('click', function () {
    paragraph.textContent = "Everything changed!";
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "24px";
    document.body.style.backgroundColor = "lightyellow";
});



// Part 6: Getting Input Values 
// When button clicked, show what user typed

// let button = document.querySelector('#myButton');
// let paragraph = document.querySelector('#myParagraph');
// let input = document.querySelector('#myInput');
// button.addEventListener('click', function() {
//     let userText = input.value; // Get what's in the input
//     console.log(userText);
//     paragraph.textContent = userText;
// });

// Exercise:
// When echoButton is clicked, 
// take text from echoInput
// and display it in echoOutput

// let echoButton = document.querySelector('#echoButton');
// let echoInput = document.querySelector('#echoInput');
// let echoOutput = document.querySelector('#echoOutput');  
// echoButton.addEventListener('click', function() {
//     let text = echoInput.value; 
//     echoOutput.textContent = text; 
// });


// Part 7: FINAL PROJECT - Greeting App 

// Homework:

// Create a simple app:
// - Input for name
// - Input for age  
// - Button "Submit"
// - When clicked, show: "Your name is [name] and you are [age] years old"