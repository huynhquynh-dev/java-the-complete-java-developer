const prices = [1, 2, 3, 4, 5];

const object = prices.map((price, index, prices) => {
  const priceObject = { id: index, price: price };
  return priceObject;
});

console.log(object)