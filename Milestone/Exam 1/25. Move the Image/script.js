const image = document.getElementById("image");

let x = 0;
let y = 0;

function updatePosition() {
  image.style.left = x + "px";
  image.style.top = y + "px";
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      y -= 10;
      break;
    case "ArrowDown":
      y += 10;
      break;
    case "ArrowLeft":
      x -= 10;
      break;
    case "ArrowRight":
      x += 10;
      break;
    default:
      return;
  }

  updatePosition();
});
