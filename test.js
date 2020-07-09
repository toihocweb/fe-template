// destructuring trong js

const user = {
  name: "Ken",
  age: 19,
  address: "97 man thien",
  gender: "female",
};

// console.log(c);

// destructure an object
// tao bien moi, de luu value cua tung key trong object

// const { name, age, address, gender } = user;

// console.log(name);
// console.log(age);
// console.log(address);
// console.log(gender);

const props = {
  name: "user 1",
  uid: 1,
  code: 20,
};

const number = [1, 2, 3, 4];

const [a, b, ...rest] = number;

console.log(rest);
