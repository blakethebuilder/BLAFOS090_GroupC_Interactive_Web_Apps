//main config//
const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

//items//
const shoes = 300 * 2;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;

//changing variables//
const location = "NAM";
let currency = "$";
let shipping = null;
let customers = "1";

//determine location
if (location === "RSA") {
  shipping = 400;
  currency = "R";
} else if (location === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
}

//calculate free shipping

if (shoes + toys + batteries + pens + shirts > 1000 && 60) {
  if (location === "NAM" || "RSA") {
    shipping = 0;
  }
}

if (shipping === 0 && customers > 1) {
  console.log(FREE_WARNING);
}

location === "NK"
  ? console.log(BANNED_WARNING)
  : console.log(
      "Price",
      currency,
      shoes + toys + batteries + pens + shirts,
      "Shipping cost",
      currency,
      shipping,
      "Total",
      currency,
      shoes + toys + batteries + pens + shirts + shipping
    );
