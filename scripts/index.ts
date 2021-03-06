document.title = document.URL;

const app = document.querySelector("#app")! as HTMLElement;

//
//
const app_wrapper = document.createElement("div")! as HTMLElement;
app_wrapper.id = "app-wrapper";

const unordered_list = document.createElement("ul")! as HTMLElement;
unordered_list.id = "unordered-list";

const unordered_list_trash = document.createElement("ul")! as HTMLElement;
unordered_list_trash.id = "unordered-list-trash";

const user_input_template = `
<div id="user-input">
  <input id="user-input-title-text" type="text" placeholder="Add title" />
  <input id="user-input-body-text" type="text" placeholder="Add body" />
  <button id="user-input-add">Add</button>
</div>
`;

app.appendChild(app_wrapper);
app_wrapper.append(unordered_list, unordered_list_trash);
app_wrapper.insertAdjacentHTML("beforeend", user_input_template);

//
//
function _newTodo(title: string, body: string) {
  const todo_item_template = `
  <li class="todo-item">
    <p class="todo-item-title">${title}</p>
    <p class="todo-item-body">${body}</p>
    <button class="todo-item-delete">Del</button>
  </li>
`;
  unordered_list.insertAdjacentHTML("beforeend", todo_item_template);
}
// window.newTodo = newTodo;

//
// events
unordered_list.addEventListener("click", (e) => {
  const clicked = e.target! as HTMLElement;
  if (clicked.classList.contains("todo-item-delete")) {
    clicked.parentElement?.remove();
  }
});

const user_input_add = document.querySelector("#user-input-add")! as HTMLButtonElement;
user_input_add.addEventListener("click", addNewTodo);

const user_input_title_text = document.querySelector("#user-input-title-text")! as HTMLInputElement;
user_input_title_text.addEventListener("keyup", (e) => {
  enterSubmission(e);
});

const user_input_body_text = document.querySelector("#user-input-body-text")! as HTMLInputElement;
user_input_body_text.addEventListener("keyup", (e) => {
  enterSubmission(e);
});

function enterSubmission(e: KeyboardEvent) {
  if (e.code === "Enter") {
    addNewTodo();
  } else if (e.code === "Escape") {
    clearAndRefocus();
  }
}

function addNewTodo() {
  if (user_input_title_text.value !== "" && user_input_body_text.value !== "") {
    _newTodo(user_input_title_text.value, user_input_body_text.value);
    clearAndRefocus();
  }
}

function clearAndRefocus() {
  user_input_title_text.value = "";
  user_input_body_text.value = "";
  user_input_title_text.focus();
}

//
// test
const numTestTodos = 3;
for (let i = 0; i < numTestTodos; i++) {
  _newTodo("Lorem, ipsum.", "Lorem ipsum dolor sit amet consectetur adipisicing elit.");
}
