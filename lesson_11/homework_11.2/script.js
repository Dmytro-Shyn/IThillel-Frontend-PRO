const button = document.getElementsByTagName('button')[0];
const h1 = document.getElementsByTagName('h1')[0];

button.addEventListener('click', () => {
  if (h1.style.color == 'red') {
    h1.style.color = 'black';
  }
  else {
    h1.style.color = 'red';
  }

});