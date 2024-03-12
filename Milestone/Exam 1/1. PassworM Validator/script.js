const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submit = document.getElementById("submit");

// Password Validator
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let userPasswords = password.value;
  let userConfirmPassword = confirmPassword.value;

  if (userPasswords === userConfirmPassword) {
    console.log("Password Matched. Password validation Successful.");
    alert("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful");
    alert("Password didn't match. Password validation unsuccessful");
  }
});
