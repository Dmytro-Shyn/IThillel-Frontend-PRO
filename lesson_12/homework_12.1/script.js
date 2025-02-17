const button1 = document.getElementsByTagName('button')[0];
const button2 = document.getElementsByTagName('button')[1];

let callInput = () => {
  return prompt()
}

let userInput

button2.addEventListener('click', () => {
  location.href = `${userInput}`
});
button1.addEventListener('click', () => {
  userInput = callInput();
});
