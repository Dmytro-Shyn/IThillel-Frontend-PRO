let hrn = [];
let dol = [];
let curs;
for (i = 10; i <= 100; i += 10) {
  curs = i * 26;
  hrn.push(curs);
  dol.push(i);
}

for (i = 0; i < hrn.length; i++) {
  console.log(`Курс долара до гривні ${dol[i]}/${hrn[i]} USD/UAH`);
}
