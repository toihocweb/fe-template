const list = [
  {
    id: 1,
    title: "Shopping",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Game",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Crush",
    isCompleted: false,
  },
];

renderHtml(list);

let input = document.getElementsByClassName("todo-input")[0];

document
  .getElementsByClassName("btn-add")[0]
  .addEventListener("click", function () {
    // input , textarea , select - option
    let todo_input = input.value;
    const newTodo = {
      id: 4,
      title: todo_input,
      isCompleted: false,
    };
    list.unshift(newTodo);
    renderHtml(list);
    input.value = "";
  });

for (let i = 0; i < list.length; i++) {
  let btn_delete = document.getElementsByClassName("btn-delete");

  btn_delete[i].addEventListener("click", function (e) {
    let id = parseInt(e.target.getAttribute("data-id"));
    const idx = list.findIndex(function (val) {
      return val.id === id;
    });
    list.splice(idx, 1);
    console.log(list);
    renderHtml(list);
  });
}

function renderHtml(array) {
  document.getElementsByClassName("content")[0].innerHTML = "";
  array.map(function (val) {
    const content = val.isCompleted
      ? `<li style="text-decoration: line-through">${val.title} <span class="btn-delete" data-id=${val.id}>DELETE</span> </li>`
      : `<li>${val.title} <span  class="btn-delete" data-id=${val.id}>DELETE</span></li>`;
    document.getElementsByClassName("content")[0].innerHTML += content;
  });
}
