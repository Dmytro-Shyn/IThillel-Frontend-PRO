const table = document.createElement('table');

function tableCreate(rows, cells, delay) {
  let delayTime = 0;
  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cells; j++) {
      const cell = row.insertCell();
      setTimeout(() => {
        if (i == 0 && j == 0) {
          cell.textContent = `(Start)`
        }
        else if (i == 0 && j == j) {
          cell.textContent = `${j}`
        }
        else if (j == 0 && i == i) {
          cell.textContent = `${i}`
        }
        else {
          cell.textContent = `${i * j}`
        }
      }, delayTime);

      delayTime += delay;
    }
  }
}

tableCreate(11, 11, 100)

document.body.appendChild(table);