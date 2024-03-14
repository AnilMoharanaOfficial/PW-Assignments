const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 28, 19, 20,
];

function divisibility(num) {
  for (let i = 0; i <= num.length; i++) {
    if (num[i] % 3 === 0 && num[i] % 2 !== 0) {
      console.log(num[i]);
    } else {
      continue;
    }
  }
}

divisibility(numbers);
