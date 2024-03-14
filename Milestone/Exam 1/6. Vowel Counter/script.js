const name = document.getElementById("name");
const sumbit = document.getElementById("sumbit");
const countVowel = document.querySelector(".count-vowel");

const vowel = ["a", "e", "i", "o", "u"];

// Count Vowel
sumbit.addEventListener("click", () => {
  let totalVowel = 0;
  const userName = name.value.toLowerCase();

  for (let i = 0; i < userName.length; i++) {
    if (vowel.includes(userName[i])) {
      totalVowel++;
      countVowel.innerHTML = `Total Vowel: ${totalVowel}`;
    }
  }
});
