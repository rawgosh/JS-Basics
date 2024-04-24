let character = 'Hello';
console.log(character);

/*console.log(character);   shows output in the console 
character = 'World';        re-initializing the variable
console.log(character);     
let secondCharacter;         declaring a variable using camel case
secondCharacter = "Test";
console.log(secondCharacter);*/

let count = 8;
console.log(count + 1);

let rows = ["Naomi", "Quincy", "CamperChan"]; 
rows[2] = 10;

let pushed = rows.push("freeCodeCamp"); // inputs an element at the end of an array
console.log(pushed); // returns the new length of the array after pushing the element
console.log(rows);

let length = rows[rows.length - 1];
console.log(length); // to display the last element of an array

let popped = rows.pop(); // removes the last element from an array and returns it
console.log(popped);