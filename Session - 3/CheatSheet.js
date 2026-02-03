

//  Part 2: What is an API? (15 min) 

//  Explain conceptually first: 

// API stands for Application Programming Interface. Think of it like a waiter in a restaurant:
// - You (the frontend) tell the waiter what you want
// - The waiter goes to the kitchen (the server/database)  
// - The waiter brings back your food (the data)

// You don't need to know how the kitchen works - you just ask and receive.

//  Real examples: 
// - Weather apps get data from weather APIs
// - Instagram gets photos from their API
// - Your Shopify store uses Shopify's API to get products

//  a real API response: 

// go to: `https://jsonplaceholder.typicode.com/users/1`
 

// ---

//  Part 3: JSON - JavaScript Object Notation 

//  
// This is JSON (looks like a JS object)
// {
//   "name": "Ahmed",
//   "age": 21,
//   "city": "Algiers"
// }

// // It's basically the same as:
// const user = {
//   name: "Ahmed",
//   age: 21,
//   city: "Algiers"
// };
 

//  Key points: 
// - JSON uses  double quotes  for keys and string values
// - It's a text format that looks like JavaScript objects
// - APIs send data as JSON
// - JavaScript can easily work with JSON

//  Converting: 
//  
//  JSON string to JavaScript object
// const jsonString = '{"name":"Ahmed","age":21}';
// const obj = JSON.parse(jsonString);
// console.log(obj.name);  // "Ahmed"
// console.log(obj.age);   // 21

// // JavaScript object to JSON string
// const user = { name: "Ahmed", age: 21 };
// const json = JSON.stringify(user);
// console.log(json);// '{"name":"Ahmed","age":21}'



//      Part 4: Fetch API - Getting Data 

//   async/await : 

// "Fetching data from the internet takes time. JavaScript doesn't wait - it keeps running. That's why we use `async/await`."

//  Simple example: 

//  
// Old way 
// fetch(url).then(response => response.json()).then(data => console.log(data));

// Modern way 
// async function getData() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// }

// // call the function
// getData();


//  Breaking it down: 

//  
// Step 1: Mark function as async
// async function getData() {
    
//    // Step 2: Fetch the data (wait for response)
//     const response = await fetch('URL_HERE');
    
//    // Step 3: Convert response to JSON (wait for conversion)
//     const data = await response.json();
    
//    // Step 4: Use the data
//     console.log(data);
// }

// Step 5: Call the function
// getData();

//  Key points: 
// - `async` before function means "this function has async operations"
// - `await` means "wait for this to finish before moving on"
// - `fetch()` makes the HTTP request
// - `.json()` converts the response to JavaScript object

// ---

//  MINI PROJECT 1: Display Users from API 
// Requirements:
// - Button "Load Users"
// - Fetch users from: `https://jsonplaceholder.typicode.com/users`
// - Display each user's name, email, phone, city
// - Show loading state while fetching
// - Handle errors
 



// ********************************


//  Part 5: Error Handling   
// "What if something goes wrong? The server is down, or the URL is wrong? 
// We need to handle errors gracefully."
//  Using try/catch:

// async function getData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('There was a problem with the fetch operation:', error);
//     }
// }
//  Key points:
// - Wrap your fetch code in `try` block
// - Check `response.ok` to see if request succeeded
// - If not, throw an error
// - Catch errors in `catch` block and handle them (e.g., show message)

// *******************************

//  MINI PROJECT 2: Posts Viewer 

//  Requirements: 
// - Button "Load Posts"
// - Fetch posts from: `https://jsonplaceholder.typicode.com/posts`
// - Display each post with title and body
// - Show loading state
// - Handle errors 


// *******************************
//  Part 6: Sending Data to API - POST Requests  
// "So far we've been GETting data (reading). But we can also POST data (create), PUT (update), DELETE (delete). Let's try creating a post."

// 
//  Break it down: 
// - `method: 'POST'` - We're creating/sending data
// - `headers` - Metadata about the request (what type of data we're sending)
// - `body` - The actual data (must be a JSON string, so use `JSON.stringify()`)

// ---

//  MINI PROJECT 3: Create Post Form (30 min) 

//  Requirements:
// - Form with title and body inputs
// - Button "Create Post"
// - On submit, send POST request to: `https://jsonplaceholder.typicode.com/posts`
// - Show success message with returned data
// - Handle errors
 


// *******************************
//  Part 7: FINAL PROJECT - Weather App (45-60 min) 

//  This is the big one - combines everything! 
 // 1. Go to: https://openweathermap.org/api
// 2. Sign up (free)
// 3. Get API key

//  Or use this test endpoint (no key needed): 
// `https://api.openweathermap.org/data/2.5/weather?q=Algiers&appid=demo&units=metric`

//  

// Requirements:
// 1. First just fetch and console.log the data
// 2. Then display city name and temperature
// 3. Then add all other details
// 4. Finally add error handling and loading states

// ---

//     HOMEWORK FOR SESSION 3 

//  Build a Random User Generator: 
// - Button "Generate Random User"
// - Fetch from: `https://randomuser.me/api/`
// - Display: photo, name, email, phone, location
// - Show loading state
// - Handle errors
// - Bonus: Button to generate 5 users at once
 
//     KEY CONCEPTS SUMMARY FOR SESSION 3 

// ✅ What APIs are and why we use them  
// ✅ JSON format  
// ✅ `async/await` syntax  
// ✅ `fetch()` for GET requests  
// ✅ `fetch()` with POST (method, headers, body)  
// ✅ `.json()` to convert response  
// ✅ `try/catch` for error handling  
// ✅ Loading states  
// ✅ Working with real API data  
// ✅ `JSON.parse()` and `JSON.stringify()`


// Popular free APIs for practice:
// - JSONPlaceholder (fake data, perfect for learning)
// - RandomUser.me (random user profiles)
// - OpenWeatherMap (weather data, needs free key)
// - REST Countries (country information)
// - Dog CEO (random dog images - fun!)
