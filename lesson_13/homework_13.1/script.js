const form = document.getElementById("userForm");
const messageInput = document.getElementById("textarea");

const errorMessage = document.createElement("p");
errorMessage.style.position = "absolute";
errorMessage.style.bottom = "5px";
errorMessage.style.color = "red";
errorMessage.style.fontSize = "14px";
errorMessage.style.display = "none"; // Ховаємо помилку на початку
messageInput.insertAdjacentElement("afterend", errorMessage);

messageInput.addEventListener("input", () => {
  const messageValue = messageInput.value;

  if (!/^.{5,}$/.test(messageValue)) {
    errorMessage.textContent = "Message must be at least 5 characters long.";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  for (const [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }
});
