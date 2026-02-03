// Select elements
const loadButton = document.querySelector('#loadButton');
const loading = document.querySelector('#loading');
const usersContainer = document.querySelector('#usersContainer');

// Function to fetch and display users
// async function loadUsers() {
//    // Show loading message
//     loading.style.display = 'block';
//     usersContainer.innerHTML = '';
    
//    // Fetch data from API
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     console.log(response);

//     const users = await response.json();

//     console.log(users);


//    // Hide loading message 
//     loading.style.display = 'none';
    
//    // Display users
//     users.forEach(user => {
//         const card = document.createElement('div');
//         card.className = 'user-card';
//         card.innerHTML = `
//             <h3>${user.name}</h3>
//             <p><strong>Email:</strong> ${user.email}</p>
//             <p><strong>Phone:</strong> ${user.phone}</p>
//             <p><strong>City:</strong> ${user.address.city}</p>
//         `;
//         usersContainer.appendChild(card);
//     });
// }

// // Event listener for load button
// loadButton.addEventListener('click', loadUsers);




// ADDING ERROR HANDLING
async function loadUsers() {
    try {
        loading.style.display = 'block';
        usersContainer.innerHTML = '';
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
       // Check if request was successful
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        
        const users = await response.json();
        loading.style.display = 'none';
        
        users.forEach(user => {
            const card = document.createElement('div');
            card.className = 'user-card';
            card.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
            `;
            usersContainer.appendChild(card);
        });
        
    } catch (error) {
        loading.style.display = 'none';
        usersContainer.innerHTML = `
            <p style="color: red; text-align: center;">
                Error: ${error.message}
            </p>
        `;
    }
}


// Event listener for load button
loadButton.addEventListener('click', loadUsers);
