const hobbies = ["Sports", "Cooking", "Cooking"];

// find and return object find
const result1 = hobbies.find((hobby, index, hobbies) => {
  return hobby === "Sports";
});

// find and return index object find
const result2 = hobbies.findIndex((hobby, index, hobbies) => {
  return hobby === "Sports";
});

console.log(result1);
console.log(result2);
