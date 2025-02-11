const button = document.getElementsByTagName('button')[0];
const img = document.createElement('img');
img.src = `./foto/1.jpg`;
img.alt = 'Description of image';
button.addEventListener('click', () => {
  let num = Math.floor(Math.random() * 10) + 1;
  img.src = `./foto/${num}.jpg`;
  img.alt = 'Description of image';
});

document.body.appendChild(img);

