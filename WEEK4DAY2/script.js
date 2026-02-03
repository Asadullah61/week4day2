// =======================================
// Asynchronous JavaScript & APIs Demo
// =======================================

// Select DOM elements
const loadBtn = document.getElementById("loadBtn");
const postList = document.getElementById("postList");

// Public API endpoint
const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

// Button click event
loadBtn.addEventListener("click", async () => {

    postList.innerHTML = "";

    try {
        // Fetch data from API (returns a Promise)
        const response = await fetch(API_URL);

        // Convert response to JSON
        const data = await response.json();

        // Display API data
        data.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post.title;
            postList.appendChild(li);
        });

    } catch (error) {
        console.error("Error fetching data:", error);
    }
});