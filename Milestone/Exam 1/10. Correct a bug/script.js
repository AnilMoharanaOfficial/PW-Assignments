const cart = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function cartBug(cart) {
  for (let i = 0; i < cart.length; i++) {
    cart[i] *= 2;
  }
  return cart;
}

const fixedcart = cartBug(cart);
console.log(fixedcart);
