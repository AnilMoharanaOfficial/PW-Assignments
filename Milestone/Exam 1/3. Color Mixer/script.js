const color1 = "red";
const color2 = "yellow";

function colorMixer(color1, color2) {
  switch (color1 + "," + color2) {
    case "red,blue":
      console.log("purple");
      break;
    case "red,yellow":
      console.log("orange");
      break;
    case "blue,yellow":
      console.log("green");
      break;
    default:
      console.log("Invalid Color Combination");
  }
}

colorMixer(color1, color2);
