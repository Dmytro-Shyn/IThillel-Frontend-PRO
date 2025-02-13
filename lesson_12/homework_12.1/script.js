const button1 = document.getElementsByTagName('button')[0];
const button2 = document.getElementsByTagName('button')[1];

let callInput = () => {
  return prompt()
}

button1.addEventListener('click', () => {
  location.href = "https://www.google.com"
});
button2.addEventListener('click', () => {
  let userInput = callInput();
  location.href = `${userInput}`
});

