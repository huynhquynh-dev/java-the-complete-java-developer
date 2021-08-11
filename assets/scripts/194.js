const prices = [1, 2, 3, 4, 5];

prices.forEach((price, index, prices) => {
  const priceObject = { id: index, price: price };
  console.log(priceObject);
});
