const paragraph = document.getElementById("paragraph");
const words = paragraph.textContent.split(/\s+/);

words.forEach((word) => {
  if (word.length > 8) {
    const span = document.createElement("span");
    span.textContent = word;
    span.classList.add("highlighted");
    paragraph.innerHTML = paragraph.innerHTML.replace(word, span.outerHTML);
  }
});
