const images = [
  "https://plus.unsplash.com/premium_photo-1728312313640-5d86582dcca7?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1739614621579-8f8f396c7412?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1720020552784-f675b06605f8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const buttonNext = document.getElementById("btn-1");
const buttonPrev = document.getElementById("btn-2");
const foto = document.getElementById("foto");
const dots = document.getElementById("wr-dots");

images.forEach(() => {
  const button = document.createElement("button");
  button.classList.add("dots");
  dots.appendChild(button);
});

let imgIdx = 0;
const dotsArray = Array.from(dots.children);

const updateSlider = () => {
  dotsArray.forEach((dot) => dot.classList.remove("dots-active"));
  foto.src = images[imgIdx];
  buttonPrev.disabled = imgIdx === 0;
  buttonNext.disabled = imgIdx === images.length - 1;
  dotsArray[imgIdx].classList.add("dots-active");
};

const slider = () => {
  buttonNext.addEventListener("click", () => {
    if (imgIdx < images.length - 1) {
      imgIdx++;
      updateSlider();
    }
  });

  buttonPrev.addEventListener("click", () => {
    if (imgIdx >= 0) {
      imgIdx--;
      updateSlider();
    }
  });

  dots.addEventListener("click", (event) => {
    let dotsArray = Array.from(document.querySelectorAll(".dots"));
    let clickedDot = event.target;

    if (clickedDot.classList.contains("dots")) {
      imgIdx = dotsArray.indexOf(clickedDot);
      updateSlider();
    }
  });

  updateSlider();
};

slider();
