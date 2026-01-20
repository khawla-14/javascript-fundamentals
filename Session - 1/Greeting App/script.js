// Step 1: Select all elements
let nameInput = document.querySelector('#nameInput');
let greetButton = document.querySelector('#greetButton');
let greetingOutput = document.querySelector('#greetingOutput');

// Step 2: Add click event 
greetButton.addEventListener('click', function() {
    // Step 3: Get the name from input
    let userName = nameInput.value;
    
    // Step 4: Create greeting message
    let message = "Hello, " + userName + "! Welcome to JavaScript!";
    
    // Step 5: Display it
    greetingOutput.textContent = message;
    greetingOutput.style.color = "green";
    greetingOutput.style.fontSize = "20px";
});