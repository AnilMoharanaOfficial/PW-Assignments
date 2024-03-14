const loginForm = document.getElementById("form");
const showStatus = document.querySelector(".status");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.elements.email.value;
  const password = e.target.elements.password.value;

  // Login Validator
  if (!email || !password) {
    showStatus.textContent = "All Field Are Required";
  }

  //Validate Email
  if (email.includes("@") && password.length > 8) {
    showStatus.textContent = "valid email or password!";
    showStatus.style.color = "green";
  } else {
    showStatus.textContent = "Invalid email or password!";
    showStatus.style.color = "red";
  }
});
