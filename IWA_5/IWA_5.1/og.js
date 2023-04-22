//main config//
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

//items//
const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

//changing variables//
const location = "RSA";
let currency = "$";
let shipping = 800;
let customers = "1";

//logic//

if (location === "RSA") {
  shipping = 400;
  currency = "R";
}

if (location === "NAM") {
  shipping = 600;
  currency = "$";
}

if (shoes + toys + batteries + pens + shirts > 1000 && location === "RSA") {
  shipping = 0;
}

if (shoes + toys + batteries + pens + shirts > 60 && location === "NAM") {
  shipping = 0;
}

if (shipping === 0 && customers > 1) {
  console.log(FREE_WARNING);
}

if (location === "NAM" || "RSA") {
  console.log(
    "price",
    currency,
    shoes + toys + batteries + pens + shirts,
    "Shipping cost",
    currency,
    shipping,
    "Total",
    currency,
    shoes + toys + batteries + pens + shirts + shipping
  );
}

if (location === "NK") {
  console.log(BANNED_WARNING);
}
