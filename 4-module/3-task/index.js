function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let rowI = table.rows[i];
    if (!rowI.cells[3].dataset.available) {
      rowI.setAttribute('hidden', 'true');
    } else if (rowI.cells[3].dataset.available === 'true') {
      rowI.classList.add('available');
    } else {
      rowI.classList.add('unavailable');
    }
  }
// Gender
  for (let i = 0; i < table.rows.length; i++) {
    let rowI = table.rows[i];
    if (rowI.cells[2].textContent === 'm') {
      rowI.classList.add('male');
    } else {
      rowI.classList.add('female');
    }
  }
  // Age
  for (let i = 0; i < table.rows.length; i++) {
    let rowI = table.rows[i];
    if (+rowI.cells[1].textContent < 18 ) {
      rowI.style.textDecoration = 'line-through';
    }
  }
}
