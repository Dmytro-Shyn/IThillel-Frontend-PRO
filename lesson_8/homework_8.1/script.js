// Перший спосіб він бульш гнучкий наскільки я поняв
// let ladder = {
//   steper: 0,
//   up: function () { 
//     this.steper++;
//     return this;
//   },
//   down: function () { 
//     this.steper--;
//     return this;
//   },
//   showStep: function () { 
//     console.log(this.steper);
//     return this
//   }
// };

// ladder.up().up().down().showStep(); // 1
// Другий спосіб не можна використати ще десь
let ladder = {
  steper: 0,
  up: () => (ladder.steper++, ladder),
  down: () => (ladder.steper--, ladder),
  showStep: () => (console.log(ladder.steper), ladder),
};

ladder.up().up().down().showStep(); // 1
