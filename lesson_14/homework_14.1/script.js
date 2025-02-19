const buttonNext = document.getElementById("btn-1");
const buttonPrev = document.getElementById("btn-2");
const foto = document.getElementById("foto");

let num = 1; // Лічильник зображень
const maxNum = 10; // Максимальна кількість зображень

function updateSlider() {
  foto.src = `./foto/${num}.jpg`;
  foto.alt = `Image ${num}`;

  buttonNext.disabled = num === maxNum;
  buttonPrev.disabled = num === 1;
}

function slaider() {
  buttonNext.addEventListener("click", () => {
    if (num < maxNum) {
      num++;
      updateSlider();
    }
  });

  buttonPrev.addEventListener("click", () => {
    if (num > 1) {
      num--;
      updateSlider();
    }
  });

  updateSlider(); // Оновлюємо стан кнопок при завантаженні
}

slaider();
