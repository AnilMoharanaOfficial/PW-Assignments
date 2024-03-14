const heading = document.querySelector(".heading");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  if (heading.textContent === "The most affordable learning platform") {
    heading.textContent = "PW Skills";
  } else {
    heading.textContent = "The most affordable learning platform";
  }
});
