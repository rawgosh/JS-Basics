const character = "#";
const count = 8;
const rows = [];

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

let result = "";

for (const row of rows) {
    result +="\n" + row; //e;ements in a newline
}

console.log(result);