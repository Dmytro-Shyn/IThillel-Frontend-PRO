const conteiner = document.getElementById('conteiner');

conteiner.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log(`Click on ${event.target.textContent}`)
  }
});


