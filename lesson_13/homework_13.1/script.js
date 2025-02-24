const form = document.getElementById("userForm");
// const messageInput = document.getElementById("textarea");
const inputUserName = document.getElementById("userName");
const inputTextArea = document.getElementById("textArea");
const inputTel = document.getElementById("phone");

// REDEX
const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ]{5,20}$/;
const massageRegex = /^.{5,}$/;
const phoneRegex = /^\+380\d{9}$/;

// Error Massage
const formErrorUserName = "Ім'я повинно містити тільки літери (5-20 символів)";
const formErrorMassage = "Повідомлення повинно містити мінімум (5 символів)";
const formErrorTel = "Невірний формат номера. Введіть у форматі +380XXXXXXXXX";

//userName
inputUserName.addEventListener("change", () => {
  console.log(inputUserName.value.length);

  if (!nameRegex.test(inputUserName.value.trim())) {
    inputUserName.classList.add("form-input-invalid");
    form.children[0].querySelector("div").style.display = "inline-block";
    form.children[0].querySelector("div").children[0].textContent =
      formErrorUserName;
  } else {
    inputUserName.classList.remove("form-input-invalid");
    form.children[0].querySelector("div").style.display = "none";
    inputUserName.oninvalid;
  }
});
// massage
inputTextArea.addEventListener("change", () => {
  console.log(inputTextArea.value.length);

  if (!massageRegex.test(inputTextArea.value.trim())) {
    inputTextArea.classList.add("form-input-invalid");
    form.children[1].querySelector("div").style.display = "inline-block";
    form.children[1].querySelector("div").children[0].textContent =
      formErrorMassage;
  } else {
    inputTextArea.classList.remove("form-input-invalid");
    form.children[1].querySelector("div").style.display = "none";
    inputTextArea.oninvalid;
  }
});
// tell
inputTel.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
});
inputTel.addEventListener("click", function () {
  if (this.value === "") {
    // Якщо поле порожнє
    this.value = "+380"; // Вставити +380
  }
});

inputTel.addEventListener("change", () => {
  console.log(inputTel.value.length);

  if (!phoneRegex.test(inputTel.value.trim())) {
    inputTel.classList.add("form-input-invalid");
    form.children[3].querySelector("div").style.display = "inline-block";
    form.children[3].querySelector("div").children[0].textContent =
      formErrorTel;
  } else {
    inputTel.classList.remove("form-input-invalid");
    form.children[3].querySelector("div").style.display = "none";
    inputTel.oninvalid;
  }
});
console.log(form.children[3]);
console.log(form.children);
// messageInput.addEventListener("input", () => {
//   const messageValue = messageInput.value;

//   if (!/^.{5,}$/.test(messageValue)) {
//     errorMessage.textContent = "Message must be at least 5 characters long.";
//     errorMessage.style.display = "block";
//   } else {
//     errorMessage.style.display = "none";
//   }
// });

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);

//   for (const [name, value] of formData.entries()) {
//     console.log(`${name}: ${value}`);
//   }
// });
