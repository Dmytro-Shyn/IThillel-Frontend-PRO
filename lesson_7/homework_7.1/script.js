let add = () => {
  let result = 0;
  return (a) => {
    result += a;
    return result;
  };
};

let sum = add();
console.log(sum(2));
console.log(sum(6));
console.log(sum(8));
console.log(sum(12));
