let backet = ["banana", 20, 15, "orange", "Hello", 30];

let arithmeticAverage = (massive) => {
  let numbers = massive.filter((item) => typeof item === "number");

  if (numbers.length === 0) {
    console.log("Немає чисел в масиві");
    return 0;
  }

  let sumNumber = numbers.reduce((sum, number) => sum + number, 0);

  return sumNumber / numbers.length;
};

console.log(arithmeticAverage(backet));
