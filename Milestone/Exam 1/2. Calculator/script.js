function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }
  return result;
}

const num1 = 5;
const num2 = 5;
const operator = "+";

const calculate = calculator(num1, num2, operator);
console.log(calculate);
