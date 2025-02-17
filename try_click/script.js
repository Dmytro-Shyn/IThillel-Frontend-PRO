const noBtn = document.getElementById("no");

noBtn.addEventListener("mouseover", () => {
  addNewNote();
});

function addNewNote() {
  let left = Math.floor(Math.random() * 500);
  let top = Math.floor(Math.random() * 500);
  noBtn.style.position = "absolute";
  noBtn.style.left = `${left}px`;
  noBtn.style.top = `${top}px`;
};