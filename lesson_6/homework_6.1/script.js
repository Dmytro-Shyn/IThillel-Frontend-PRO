let delLetter = (text, wrongLetters) => {
  let result = "";
  for (const char of text) {
    if (!wrongLetters.includes(char)) {
      result += char;
    }
  }
  return result;
};

console.log(delLetter(" hello world", ["l", "d"]));
