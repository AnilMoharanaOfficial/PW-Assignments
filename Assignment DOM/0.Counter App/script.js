"use strict";
//HTML Elements
const incrementBtn = document.querySelector("#incrementBtn");
const decrementBtn = document.querySelector("#decrementBtn");
const resetBtn = document.querySelector("#resetBtn");
const displayValue = document.querySelector("#displayValue");

//Default Value
let value = 0;

//Increment Button
incrementBtn.addEventListener("click", () => {
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    value++;
    displayValue.innerHTML = value;
  }
});

// Decrement Button
decrementBtn.addEventListener("click", () => {
  if (value > 0) {
    value--;
    displayValue.innerHTML = value;
  } else {
    alert("Negative value not allowed");
  }
});

// Reset Button
resetBtn.addEventListener("click", () => {
  value = 0;
  displayValue.innerText = value;
});
