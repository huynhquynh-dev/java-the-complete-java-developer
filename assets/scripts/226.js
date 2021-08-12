const person = {
  name: "Max",
  age: 36,
};

// Copy object
const person1 = { ...person };

const person2 = Object.assign({}, person);

console.log(person1, person2);
