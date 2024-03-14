const userName = document.getElementById("name");
const sumbit = document.getElementById("sumbit");
const capitalizedName = document.querySelector(".capitalized-name");

// Capitalized Name
sumbit.addEventListener("click", () => {
  let name = userName.value;
  const firstLetter = name[0];
  const lowerCase = name.toLowerCase();

  capitalizedName.innerHTML =
    firstLetter === firstLetter.toLowerCase()
      ? name[0].toUpperCase() + lowerCase.slice(1)
      : name;
});
