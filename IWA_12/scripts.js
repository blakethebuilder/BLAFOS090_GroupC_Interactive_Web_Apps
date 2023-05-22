// scripts.js

const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

// Select the book via ID
const book1 = document.querySelector("#book1");

// Get the data value
const status1Element = book1.querySelector(".status");
const status1 = status1Element.textContent;

const reserve1Element = book1.querySelector(".reserve");
const checkout1Element = book1.querySelector(".checkout");
const checkin1Element = book1.querySelector(".checkin");

// Update styles and enable/disable buttons based on the status
const statusData = STATUS_MAP[status1];

status1Element.style.color = statusData.color;
reserve1Element.textContent = statusData.canReserve ? "enabled" : "disabled";
checkout1Element.textContent = statusData.canCheckout ? "enabled" : "disabled";
checkin1Element.textContent = statusData.canCheckIn ? "enabled" : "disabled";

// Select the book via ID
const book2 = document.querySelector("#book2");

// Get the data value
const status2Element = book1.querySelector(".status");
const status2 = status2Element.textContent;

// Update styles and enable/disable buttons based on the status
const statusData2 = STATUS_MAP[status2];

status2Element.style.color = statusData.color;
reserve2Element.textContent = statusData.canReserve ? "enabled" : "disabled";
checkout2Element.textContent = statusData.canCheckout ? "enabled" : "disabled";
checkin2Element.textContent = statusData.canCheckIn ? "enabled" : "disabled";

// Select the book via ID
const book3 = document.querySelector("#book3");

// Get the data value
const status3Element = book1.querySelector(".status");
const status3 = status2Element.textContent;

// Update styles and enable/disable buttons based on the status
const statusData3 = STATUS_MAP[status2];

status3Element.style.color = statusData.color;
reserve3Element.textContent = statusData.canReserve ? "enabled" : "disabled";
checkout3Element.textContent = statusData.canCheckout ? "enabled" : "disabled";
checkin3Element.textContent = statusData.canCheckIn ? "enabled" : "disabled";
