// DOM (document object model)
// goi selector

// let content = document.getElementById("content").textContent;
// let clickme = document.getElementById("clickme").textContent;

// getElementById
// getElementsByClassName

let btnSelectors = document.getElementsByClassName("clickme");

for (let i = 0; i <= btnSelectors.length - 1; i++) {
  var a = 0;
  btnSelectors[i].addEventListener("click", () => {
    for (let j = 0; j <= btnSelectors.length - 1; j++) {
      btnSelectors[j].style.backgroundColor = "initial";
    }
    btnSelectors[i].style.backgroundColor = "red";
  });
}

// methods of array in js
// splice, toString, push, pop , shift, unshift, concat, slice,

// sort() in js

// iteration in js
