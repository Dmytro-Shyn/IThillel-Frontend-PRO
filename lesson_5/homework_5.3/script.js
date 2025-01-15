let num = prompt(`Введіть ціле додатнє число`).trim();

if (num === null) {
  alert(`Жаль що ви скасували`);
} else if (num === "") {
  alert("Ви нічого не ввели");
} else {
  num = Number(num);
  if (isNaN(num)) {
    alert(`Введене повинно бути числом`);
  } else if (num <= 0) {
    alert("Число повинно бути додатнім");
  } else if (!Number.isInteger(num)) {
    alert("Число повинно бути цілим");
  } else {
    for (let i = 0; i < num; i++) {
      let square = i ** 2;
      if (square > num) {
        break;
      }
      console.log(i, square);
    }
  }
}
