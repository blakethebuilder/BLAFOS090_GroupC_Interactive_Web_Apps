const salary = 4000;
const lodging = "apartment";
const size = "large";

// Only change the syntax below (not the values or key names)

const expenses = {
  food: 51.7501,
  transport: 10.2,
};

const rent = {
  none: 0,
  "small-room": 200,
  "large-room": 300,
  "small-apartment": 400,
  "large-apartment": 800,
  "small-house": 1200,
  "large-house": 2400,
};

const tax = {
  734: "3%",
  234: "20%",
  913: "12%",
  415: "38%",
  502: "42%",
};

// You can change below however you want

const taxAsDecimal = parseFloat(tax["913"]) / 100; // To access an object property that starts with a number, you need to use square bracket notation instead of dot notation.
const startingAfterTax = salary * (1 - taxAsDecimal);
const type = size + "-" + lodging;
//if (type === "largeApartment") {}
const balance =
  startingAfterTax - expenses.food - expenses.transport - rent[type];

console.log("R", balance.toFixed(2));
