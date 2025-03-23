const todosWrapper = document.getElementById("toDoWrapper");
const toDoForm = document.getElementById("toDoForm");
const toDoFormInput = toDoForm.querySelector("input");
const toDoFormBtn = toDoForm.querySelector("button");

let todoList = [];

const loadTodos = () => {
  const savedTodos = localStorage.getItem("todoList");
  if (savedTodos) {
    todoList = JSON.parse(savedTodos);
    renderTodos();
  }
};

const saveTodos = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const renderTodos = () => {
  todosWrapper.innerHTML = "";

  todoList.forEach((todo, index) => {
    const toDoItemhtml = `
      <li id="todo-item" class="d-flex justify-content-between list-group-item todo-item" data-id="${index}">
        <input type="checkbox" ${todo.completed ? "checked" : ""}/>
        <span class="todo-item__description ${
          todo.completed ? "todo-item--checked" : ""
        }">${todo.text}</span>
        <button class="todo-item__delete btn btn-danger">Видалити</button>
      </li>
    `;

    todosWrapper.innerHTML += toDoItemhtml;
  });
};

const ShowTodos = () => {
  const todosWrapper = document.getElementById("toDoWrapper");

  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  todosWrapper.addEventListener("click", (event) => {
    let btnDel = event.target.closest(".todo-item");

    if (btnDel) {
      let todoItem = btnDel.closest("li.todo-item");
      if (todoItem) {
        console.log(todoItem.id, todoItem.querySelector("span").textContent);

        modal.show();

        document.querySelector("#exampleModal .modal-body").textContent =
          todoItem.querySelector("span").textContent;
      }
    }
  });
};

const addToDoItem = () => {
  toDoFormBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const inputText = toDoFormInput.value.trim();

    if (inputText !== "") {
      todoList.push({
        text: inputText,
        completed: false,
      });

      saveTodos();

      renderTodos();

      toDoFormInput.value = "";
    }
  });
};

const handleTodoStatusChange = () => {
  todosWrapper.addEventListener("change", (event) => {
    let checkbox = event.target.closest('input[type="checkbox"]');

    if (checkbox) {
      let todoItem = checkbox.closest(".todo-item");
      let description = todoItem.querySelector(".todo-item__description");
      let index = parseInt(todoItem.dataset.id);

      todoList[index].completed = checkbox.checked;

      if (checkbox.checked) {
        description.classList.add("text-decoration-line-through");
      } else {
        description.classList.remove("text-decoration-line-through");
      }
      saveTodos();
    }
  });
};

const removeToDoItem = () => {
  todosWrapper.addEventListener("click", (event) => {
    let btnDel = event.target.closest("button.todo-item__delete");

    if (btnDel) {
      let todoItem = btnDel.closest("li");
      if (todoItem) {
        let index = parseInt(todoItem.dataset.id);
        todoList.splice(index, 1);
        saveTodos();
        renderTodos();
      }
    }
  });
};

const handleEnterKeyPress = () => {
  toDoFormInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      toDoFormBtn.click();
    }
  });
};

const initApp = () => {
  loadTodos();
  addToDoItem();
  handleTodoStatusChange();
  removeToDoItem();
  handleEnterKeyPress();
};

initApp();
ShowTodos();
