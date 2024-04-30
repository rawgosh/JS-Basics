const character = "!";
const count = 8;
const rows = [];
//const inverted = true;

function padRow(rowNumber, rowCount) {
    return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// FOR LOOP
/*for (let i = 0; i < count; i++) {
    rows.push(padRow(i + 1, count));
}*/

// WHILE LOOP
/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
}*/

//FOR LOOP TO INVERT
/*for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}*/

// INVERT USING UNSHIFT
// Loop through numbers from 1 to 'count'
for (let i = 1; i <= count; i++) {
  // 'padRow' likely formats the row with padding based on the current number and 'count'
  const paddedRow = padRow(i, count);
  
  // Add the padded row to the beginning of the 'rows' array
  rows.unshift(paddedRow);
}

// RUNS UNDER THE CONDITION TO DISPLAY NORMAL OR INVERTED PYAMID
/*for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
} */
let result = "";

for (const row of rows) {
    result +="\n" + row; //e;ements in a newline
}

console.log(result);