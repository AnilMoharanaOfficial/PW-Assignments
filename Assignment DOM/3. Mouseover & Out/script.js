// Adding HTML Elements
const light = document.querySelector(".light");

// Click Sound Effect
const sound = () => {
  const clickEffect = new Audio("./assets/button-sound.wav");
  clickEffect.play();
};

// Light on
light.addEventListener("mouseover", () => {
  sound();
  light.src = "assets/Light-On.png";
});

// Light off
light.addEventListener("mouseout", () => {
  light.src = "assets/Light-Off.png";
});
