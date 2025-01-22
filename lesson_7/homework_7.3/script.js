function enterNum() {
  num = prompt("Введіть число більше ста");
}

for (i = 0; i < 10; i++) {
  console.log(i);
  enterNum();
  if (num === "") {
    alert("Пуста стрічка (");
    break;
  }
  if (num === null) {
    alert("жаль що ви скасували");
    break;
  }
  if (num < 100) {
    alert("Нажаль число менше 100");
    enterNum();
  }
  if (num > 100 || num === !isNaN) {
    console.log(num);
    break;
  }
}
