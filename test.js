// 2 types nhu sau:
// ==> primitive type: string , number , boolean, null , undefine, symbol...
// ==> reference type : object, array , function => dia chi

// lam cach nao de copy 1 array hoac object
// let a = [1, 2, 3];

// // let b = Array.from(a);
// // spread operator ...

// let b = [10, 11, 12, 13, ...a];

// a.push(4);

// console.log("a: ", a);
// console.log("b: ", b);

// rest operator vs spread operator

// function add(a, b, c, ...rest) {
//   console.log(rest);
//   return a + b + c;
// }

// es5

//function es6 (arrow function)

const add = (a, b, c, ...rest) => {
  console.log(rest);
  return a + b + c;
};

const numbers = [1, 2];

console.log(add(...numbers));
