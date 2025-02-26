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
      <li class="todo-item" data-id="${index}">
        <input type="checkbox" ${todo.completed ? "checked" : ""}/>
        <span class="todo-item__description ${
          todo.completed ? "todo-item--checked" : ""
        }">${todo.text}</span>
        <button class="todo-item__delete">Видалити</button>
      </li>
    `;

    todosWrapper.innerHTML += toDoItemhtml;
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
        description.classList.add("todo-item--checked");
      } else {
        description.classList.remove("todo-item--checked");
      }
      saveTodos();
    }
  });
};

const removeToDoItem = () => {
  todosWrapper.addEventListener("click", (event) => {
    let btnDel = event.target.closest("button.todo-item__delete");

    if (btnDel) {
      let todoItem = btnDel.closest(".todo-item");
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
