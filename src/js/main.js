//-- kiểu dữ liệu trong js là kiểu dữ liệu động (nghĩa là 1 biến có thể là 1 string hoặc 1 number....)
// number, string, object, boolen ...symbol

// const , let , var

// ctrl + s

// 2 nguyen tac cuar const: 1. không đc khai báo lại, 2. không đc gán lại giá trị

// const number = 50;

// let number = 10;

// function trong js

// cach 1
function printName(msg) {
  console.log(msg);
}

// cach 2 - function expression
var printProductName = function(msg) {
  console.log(msg);
};

//cach 3 - arrow function
const printAddress = (addr, number) => {
  console.log(`dia chi truong la ${number} ${addr}`);
};

// printAddress("Man thien", 97);

// định nghĩa 1 arrow function có 1 tham số là (number) in ra kết quả
// là 1 chẳn hay không

// object se co key : value
let user = {
  name: "Nhat Bui",
  age: 20
};

// định nghĩa 1 arrow function có 1 tham số (user) in ra age trong
// user có lớn hơn 18+ hay không

const checkAge = user => {
  return user.age > 18
    ? "co the xem phim 18+"
    : "con nit khong nen xem phim 18+";
};

console.log(checkAge(user));
// checkAge(user);

// cai 1 so extension ho tro
