const postBody = document.querySelector(".post-container");
const backButton = document.querySelector(".backButton");

// data from localStorage
let allBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

console.log(allBlogPosts);

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

const post = allBlogPosts.find((post) => post.id === parseInt(postId));

if (post) {
  const postData = document.createElement("div");
  postData.classList.add("post-body");

  postData.innerHTML = `
  <h1 class="title">
            ${post.title}
          </h1>
          <img
            class="post-img"
            src="${post.imageURL}"
            alt=""
          />
          <p class="content">
            ${post.blogContent}
          </p>
  `;

  postBody.appendChild(postData);
}

// back button
backButton.addEventListener("click", () => {
  window.history.back();
});
