// POST INFO Elements
const showBlogPosts = document.querySelector(".blog-container");

// CREATE BLOG Elements
const createBlog = document.querySelector(".create-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const addNewBlog = document.querySelector(".add-blog-btn");

// Default posts
const defaultPosts = [
  {
    id: 4,
    imageURL: "./assets/1_RAI4cBXe1_zaxVykHz79oA.webp",
    title: "How I Won Singapore’s GPT-4 Prompt Engineering Competition",
    description:
      "A deep dive into the strategies I learned for harnessing the power of",
    blogContent:
      "Last month, I had the incredible honor of winning Singapore’s first ever GPT-4 Prompt Engineering competition, which brought together over 400 prompt-ly brilliant participants, organised by the Government Technology Agency of Singapore (GovTech).",
  },
  {
    id: 3,
    imageURL: "./assets/1_22QnF5qnl4TLN9b6TpYkHA.webp",
    title: "Works in Progress: The Long Journey to Doing Good Better",
    description: "The more I learn, the more I realize how much I don’t know.",
    blogContent:
      "When we were starting off in philanthropy, my wife Cari did a listening tour to try to shape our strategy. We were trying to learn some basic principles about choosing cause areas and tactics — how can we do a good job as philanthropists and as stewards of this capital? Almost universally, people would coach us that this was largely about personal interest — what were we passionate about?",
  },
];

let allBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
allBlogPosts = [...allBlogPosts];

if (allBlogPosts.length === 0) {
  allBlogPosts = [...allBlogPosts, ...defaultPosts];
}

console.log(allBlogPosts);

// Create Random ID
let uniqid = Date.now();

// CREATE New Blog Window
createBlog.addEventListener("click", () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

// ADD Blog Post
addNewBlog.addEventListener("click", (e) => {
  e.preventDefault();
  const imgUrl = document.getElementById("imgUrl").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const content = document.getElementById("write").value;

  allBlogPosts.unshift({
    id: uniqid,
    imageURL: imgUrl,
    title: title,
    description: description,
    blogContent: content,
  });

  localStorage.setItem("blogPosts", JSON.stringify(allBlogPosts));

  showPosts(allBlogPosts);
});

// SHOW POSTS ON HOMEPAGE
function showPosts(posts) {
  showBlogPosts.innerHTML = "";
  posts.forEach((post) => {
    const postInfo = document.createElement("div");
    postInfo.classList.add("blog-posts");

    postInfo.innerHTML = `
      <img class="blog-image" src="${post.imageURL}" alt="" />
      <div class="blog-info">
        <h1 class="blog-title">${post.title}</h1>
        <p class="blog-description">${post.description}</p>
        <button class="read-blog" data-id="${post.id}">
          Read <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    showBlogPosts.appendChild(postInfo);
  });

  document.querySelectorAll(".read-blog").forEach((button) => {
    button.addEventListener("click", function () {
      const postId = this.dataset.id;
      window.location.href = `post.html?id=${postId}`;
    });
  });
}

showPosts(allBlogPosts);
