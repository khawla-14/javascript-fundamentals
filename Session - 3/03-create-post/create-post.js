const titleInput = document.querySelector('#titleInput');
const bodyInput = document.querySelector('#bodyInput');
const submitButton = document.querySelector('#submitButton');
const result = document.querySelector('#result');

async function createPost() {
    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();
    
   // Validate inputs
    if (!title || !body) {
        result.textContent = 'Please fill in all fields!';
        result.className = 'error';
        result.style.display = 'block';
        return;
    }
    
    try {
       // Create post object 
        const newPost = {
            title: title,
            body: body,
            userId: 1
        };
        
       // Send POST request
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        
        const data = await response.json();
        console.log('Post created:', data);
        
       // Show success message
        result.innerHTML = `
            <strong>Success!</strong><br>
            Post created with ID: ${data.id}<br>
            Title: ${data.title}
        `;
        result.className = 'success';
        result.style.display = 'block';
        
       // Clear form
        titleInput.value = '';
        bodyInput.value = '';
        
    } catch (error) {
        result.textContent = `Error: ${error.message}`;
        result.className = 'error';
        result.style.display = 'block';
        console.error('Error creating post:', error);
    }
}

submitButton.addEventListener('click', createPost);
