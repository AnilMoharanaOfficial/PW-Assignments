// Adding HTML Elements
const lightOnOff = document.querySelector(".light-On-Off");
const light = document.querySelector(".light");

//Click Sound Effect
const sound = () => {
  const clickEffecct = new Audio("./assets/button-sound.wav");
  clickEffecct.play();
};

//Light on off
let isLightOn = true;

lightOnOff.addEventListener("click", () => {
  sound();
  isLightOn = !isLightOn;
  light.src = `assets/Light-${isLightOn ? "On" : "Off"}.png`;
});
