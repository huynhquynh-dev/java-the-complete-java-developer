const prices = [1, 2, 3, 4, 5];

const filterPrice = prices.filter((price, index, prices) => {
  return price > 3;
});

console.log(filterPrice);