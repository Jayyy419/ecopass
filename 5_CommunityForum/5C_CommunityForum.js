// Add event listener to the form
document.getElementById("communityForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the form data
  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  
  // Create a unique ID (timestamp / random string) for the post
  const postId = Date.now().toString();
  
  // Store the form data in Local Storage with the postId as the key
  localStorage.setItem(postId, JSON.stringify({
    name: name,
    title: title,
    content: content
  }));
  
  // Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  // Refresh the posts to display the new submission
  loadCommunityPosts();
});

// Load and display the community forum posts from Local Storage
function loadCommunityPosts() {
  const communityPostsDiv = document.getElementById("communityPosts");
  communityPostsDiv.innerHTML = "";

  // Loop through the Local Storage and get the stored posts
  for (let i = 0; i < localStorage.length; i++) {
    const postId = localStorage.key(i);
    const postData = JSON.parse(localStorage.getItem(postId));

    // Display the data
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <h3>${postData.title}</h3>
      <p><strong>Name:</strong> ${postData.name}</p>
      <p><strong>Concern:</strong> ${postData.content}</p>
    `;

    communityPostsDiv.appendChild(postElement);
  }
}

// Load the community forum posts when the page loads
loadCommunityPosts();

// Clear the data from Local Storage
function clearData() {
  localStorage.clear();
  loadCommunityPosts();
}

// Attach event listener to the clearDataBtn
document.getElementById("clearDataBtn").addEventListener("click", clearData);
