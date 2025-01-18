const array = [1, 3, 4, 6, 2, 5, 7];

let removeEllement = (arr1, removeEll) => {
  return arr1.filter((item) => item !== removeEll);
};

console.log(removeEllement(array, 3));
