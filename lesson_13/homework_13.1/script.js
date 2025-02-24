const form = document.getElementById("userForm");
// const messageInput = document.getElementById("textarea");
const inputUserName = document.getElementById("userName");
const inputTextArea = document.getElementById("textArea");
const inputTel = document.getElementById("phone");
const inputEmail = document.getElementById("email");

// REDEX
const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ]{5,20}$/;
const massageRegex = /^.{5,}$/;
const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Error Massage
const formErrorUserName = "Ім'я повинно містити тільки літери (5-20 символів)";
const formErrorMassage = "Повідомлення повинно містити мінімум (5 символів)";
const formErrorTel = "Невірний формат номера. Введіть у форматі +380XXXXXXXXX";
const formErrorEmail =
  "Невірний формат email. Перевірте правильність введення.";

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
inputTel.addEventListener("click", function () {
  if (this.value === "") {
    // Якщо поле порожнє
    this.value = "+380"; // Вставити +380
  }
});

inputTel.addEventListener("change", () => {
  console.log(inputTel.value.length);

  if (!phoneRegex.test(inputTel.value.trim())) {
    inputTel.classList.add("form-input-valid");
    form.children[3].querySelector("div").style.display = "inline-block";
    form.children[3].querySelector("div").children[0].textContent =
      formErrorTel;
  } else {
    inputTel.classList.remove("form-input-invalid");
    form.children[3].querySelector("div").style.display = "none";
    inputTel.oninvalid;
  }
});

// email
inputEmail.addEventListener("change", () => {
  console.log(inputEmail.value.length);

  if (!emailRegex.test(inputEmail.value.trim())) {
    inputEmail.classList.add("form-input-valid");
    form.children[4].querySelector("div").style.display = "inline-block";
    form.children[4].querySelector("div").children[0].textContent =
      formErrorTel;
  } else {
    inputEmail.classList.remove("form-input-invalid");
    form.children[4].querySelector("div").style.display = "none";
    inputEmail.oninvalid;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  for (const [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }
});
