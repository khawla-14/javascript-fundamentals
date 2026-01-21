// Select elements
const todoInput = document.querySelector('#todoInput');
const addButton = document.querySelector('#addButton');
const todoList = document.querySelector('#todoList');
 
// Add todo function
function addTodo() {
    const taskText = todoInput.value.trim();

    // Validate input
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create li element
    const li = document.createElement('li');

    // Create span for text
    const span = document.createElement('span');
    span.textContent = taskText;

    // Toggle complete on click
    span.addEventListener('click', function () {
        span.classList.toggle('completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';

    // Delete functionality
    deleteBtn.addEventListener('click', function () {
        li.remove();
    });

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // Clear input
    todoInput.value = '';
    todoInput.focus();
}

// Add todo on button click
addButton.addEventListener('click', addTodo);

// Add todo on Enter key
todoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});


// Key concepts covered:

// createElement() - creating elements dynamically
// appendChild() - adding to DOM
// .remove() - removing from DOM
// .classList.toggle() - toggling classes
// Event delegation
// Keyboard events (keypress)
// .trim() - removing whitespace
// Returning early from functions