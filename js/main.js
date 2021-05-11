const btnAdd = document.querySelector(".btn-add");
const form = document.querySelector("form");
const input = document.querySelector(".todo-input");
const list = document.querySelector(".todo-list");

// const todoList = [{id: 1, done: false, content: "shopping"}];
const todoList = [{ id: 0, done: true, content: "shopping" }];

renderTodo(todoList);

function renderTodo(todoList) {
  const li = document.querySelectorAll(".todo-list li");
  // remove all todos
  for (let i = 0; i < li.length; i++) {
    li[i].remove();
  }
  // add todo from todoList
  todoList.map((val) => {
    const li = document.createElement("li");
    if (val.done) {
      li.className = "done";
    }
    li.dataset.id = val.id;
    li.innerHTML = `
            <input ${val.done ? "checked" : ""} id="check" type="checkbox">${
      val.content
    }
            <span id="btn-delete">x</span>
    `;
    list.append(li);
  });
}

// submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (!inputValue) {
    input.classList.add("error");
    return;
  }

  //
  input.classList.remove("error");

  // add new todo
  // id sẽ là random 5 kí tự bất kì
  todoList.push({ id: randomId(5), content: inputValue, done: false });
  renderTodo(todoList);
  input.value = "";
});

document.addEventListener("click", (e) => {
  // neu click vao nut delete
  if (e.target.id === "btn-delete") {
    // lay id todo vua click
    const currentLi = e.target.parentNode;
    const id = currentLi.dataset.id;
    // tim index trong todolist
    const idx = todoList.findIndex((todo) => todo.id == id);
    // remove todo tu todoList
    if (idx !== -1) {
      todoList.splice(idx, 1);
      // render todoList
      renderTodo(todoList);
    }
  }

  //  neu click vao checkbox
  if (e.target.id === "check") {
    // lay id todo vua click
    const currentLi = e.target.parentNode;
    const id = currentLi.dataset.id;

    // tim index trong todolist
    const idx = todoList.findIndex((todo) => todo.id == id);
    // update todo tu todoList
    if (idx !== -1) {
      todoList[idx].done = !todoList[idx].done;
      // render todoList
      renderTodo(todoList);
    }
  }
});

function randomId(len) {
  // random id dựa vào độ dài id(len)
  let id = "";
  for (let i = 0; i < len; i++) {
    id += randomCharacter();
  }
  return id;
}
function randomCharacter() {
  // random 1 ki tu a-z
  const chars = "abcdefghijklmnopqrstuvwxyz ";
  const rdIndex = Math.floor(Math.random() * chars.length);
  return chars[rdIndex];
}
