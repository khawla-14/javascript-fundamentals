
const loadPosts = document.querySelector('#loadPosts');
const loadingPosts = document.querySelector('#loadingPosts');
const addPostBtn = document.querySelector('#addPost');
const postsContainer = document.querySelector('#postsContainer');

async function fetchPosts() {
    try {
        loadingPosts.style.display = 'block';
        postsContainer.innerHTML = '';
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
            throw new Error('Failed to load posts');
        }
        
        const posts = await response.json();
        loadingPosts.style.display = 'none';
        
       // Show only first 10 posts
        posts.slice(0, 10).forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'post-card';
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            `;
            postsContainer.appendChild(postDiv);
        });
        
    } catch (error) {
        loadingPosts.style.display = 'none';
        postsContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}


async function createPost() {
    const newPost = {
        title: 'Manually Added Post',
        body: 'This post was sent to the server and then added to the DOM.',
        userId: 1
    };
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        });

        if (!response.ok) throw new Error("Server error");

        const data = await response.json();
        
        // Ensure container is visible
        postsContainer.style.display = 'block';

        // Add the new post to the top of the list manually
        const postDiv = document.createElement('div');
        postDiv.className = 'post-card';
        postDiv.innerHTML = `
            <h3>${data.title} (New!)</h3>
            <p>${data.body}</p>
        `;
        
        // Put it at the very top of the container
        postsContainer.prepend(postDiv);

    } catch (error) {
        console.error(error);
        alert("Failed to create post. See console for details.");
    }
}

loadPosts.addEventListener('click', fetchPosts);
addPostBtn.addEventListener('click', createPost);
