let num = prompt(`Введіть ціле додатнє число`).trim();
let counterDilnuk = 0;

if (num === null) {
  alert(`Жаль що ви скасували`);
} else if (num === "") {
  alert("Ви нічого не ввели");
} else {
  num = Number(num);
  if (isNaN(num)) {
    alert(`Введене повинно бути числом`);
  } else if (num <= 1) {
    alert("Число повинно бути додатнім і більше 1");
  } else if (!Number.isInteger(num)) {
    alert("Число повинно бути цілим");
  } else {
    for (let i = num; i >= 1; i--) {
      if (num % i === 0) {
        counterDilnuk++;
      }
    }
    if (counterDilnuk === 2) {
      alert(`Число ${num} є простим`);
    } else {
      alert(`Число ${num} не є простим`);
    }
  }
}
