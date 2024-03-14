const marks = [99, 58, 97, 92, 78];
let highestMark = marks[0];

for (let i = 1; i < marks.length; i++) {
  highestMark = marks[i] > highestMark ? marks[i] : highestMark;
}

console.log(highestMark);
