const addBtn = document.getElementById("addNote");

addBtn.addEventListener("click", () => {
  addNewNote();
})

function addNewNote() {
  const titleInput = document.getElementById("titleNote").value.trim();
  const textInput = document.getElementById("textNote").value.trim();

  if (!titleInput || !textInput) {
    alert("Будь ласка, заповніть всі поля!");
    return;
  }

  const note = document.createElement("div");
  note.classList.add('notes');

  note.innerHTML = `
    <h2>${titleInput}</h2>
    <p>${textInput}</p>
    <button class="delete">Видалити</button>
  `;

  const deleteBtn = note.querySelector(".delete");
  deleteBtn.addEventListener("click", () => {
    note.remove();
  });


  document.body.appendChild(note);
  document.getElementById("titleNote").value = "";
  document.getElementById("textNote").value = "";
}

g