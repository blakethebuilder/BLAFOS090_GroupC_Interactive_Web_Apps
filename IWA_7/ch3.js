const leoName = " \n Leo";
const leoSurname = "Musvaire";
const leoBalance = "-9394";

const sarahName = " \n Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.21000111";

const divider = "\n-----------------------------------------";

// Only change below this line

const owed =
  Math.abs(parseInt(leoBalance)) + Math.abs(parseFloat(sarahBalance)); // parsInt to add the variables together
const leo = `${leoName} ${leoSurname} (Owed R  ${leoBalance})`;
const sarah = `${sarahName} ${sarahSurname} (Owed R ${sarahBalance})`;
const total = " \n\tTotal amount owed: R";
const result = leo + sarah + divider + total + owed.toFixed(2) + divider; // to.fixed to get the decimal and this was

console.log(result);
