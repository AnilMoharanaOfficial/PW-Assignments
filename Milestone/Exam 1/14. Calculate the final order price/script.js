const Cart = [
  { unitPrice: 200, quantity: 2 },
  { unitPrice: 15, quantity: 1 },
  { unitPrice: 20, quantity: 3 },
];

const calculate = () => {
  let totalPrice = 0;
  Cart.forEach(({ unitPrice, quantity }, i) => {
    const total = unitPrice * quantity;
    totalPrice += total;
  });
  return totalPrice;
};

const totalCost = calculate();

console.log(totalCost);
