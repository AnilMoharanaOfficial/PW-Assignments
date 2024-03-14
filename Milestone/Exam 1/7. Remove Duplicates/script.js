const shopingCart = ["Apple", "Mango", "Banana", "Nutes", "Apple", "Banana"];

function removeDuplicatItems(shopingCart) {
  return shopingCart.filter((item, i) => shopingCart.indexOf(item) === i);
}

console.log(removeDuplicatItems(shopingCart));
