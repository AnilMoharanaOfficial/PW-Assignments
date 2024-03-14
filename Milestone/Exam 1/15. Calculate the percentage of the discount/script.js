const product = [
  { productPrice: 800, discountPrice: 400 },
  { productPrice: 5895, discountPrice: 1000 },
];

const calculate = () => {
  product.forEach(({ productPrice, discountPrice }, i) => {
    const discountPercentage = (discountPrice / productPrice) * 100;
    const discountAmount = (discountPercentage.toFixed(2) / 100) * productPrice;

    console.log(
      `The Original Price of Product${
        i + 1
      } is ${productPrice} with a ${discountPercentage.toFixed(
        2
      )}% Discount, You Can Save ${discountAmount.toFixed()} INR on This Product`
    );
  });
};

calculate();
