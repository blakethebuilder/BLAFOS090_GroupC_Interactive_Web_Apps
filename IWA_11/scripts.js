// Select the first order
const order1 = document.querySelector('[data-key="order1"]');

// Get the data values
const biscuits1 = order1.getAttribute("data-biscuits");
const donuts1 = order1.getAttribute("data-donuts");
const pancakes1 = order1.getAttribute("data-pancakes");
const status1 = order1.getAttribute("data-delivered");

// Update the first order elements
order1.querySelector(".biscuits .count").innerHTML = biscuits1;
order1.querySelector(".donuts .count").innerHTML = donuts1;
order1.querySelector(".pancakes .count").innerHTML = pancakes1;
order1.querySelector(".status dd").innerHTML = status1;

// Select the second order
const order2 = document.querySelector('[data-key="order2"]');

// Get the data values
const biscuits2 = order2.getAttribute("data-biscuits");
const donuts2 = order2.getAttribute("data-donuts");
const pancakes2 = order2.getAttribute("data-pancakes");
const status2 = order2.getAttribute("data-delivered");

// Update the second order elements
order2.querySelector(".biscuits .count").innerHTML = biscuits2;
order2.querySelector(".donuts .count").innerHTML = donuts2;
order2.querySelector(".pancakes .count").innerHTML = pancakes2;
order2.querySelector(".status dd").innerHTML = status2;

// Select the third order
const order3 = document.querySelector('[data-key="order3"]');

// Get the data values
const biscuits3 = order3.getAttribute("data-biscuits");
const donuts3 = order3.getAttribute("data-donuts");
const pancakes3 = order3.getAttribute("data-pancakes");
const status3 = order3.getAttribute("data-delivered");

// Update the second order elements
order3.querySelector(".biscuits .count").innerHTML = biscuits3;
order3.querySelector(".donuts .count").innerHTML = donuts3;
order3.querySelector(".pancakes .count").innerHTML = pancakes3;
order3.querySelector(".status dd").innerHTML = status3;
