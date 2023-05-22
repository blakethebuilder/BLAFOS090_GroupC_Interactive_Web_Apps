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

//Edit below the line

// Select book1 and update its status and buttons
const book1 = document.querySelector("#book1");
const status1Element = book1.querySelector(".status");
const reserve1Button = book1.querySelector(".reserve");
const checkout1Button = book1.querySelector(".checkout");
const checkin1Button = book1.querySelector(".checkin");

const status1 = status1Element.textContent;
const statusData1 = STATUS_MAP[status1];

status1Element.style.color = statusData1.color;
reserve1Button.disabled = !statusData1.canReserve;
checkout1Button.disabled = !statusData1.canCheckout;
checkin1Button.disabled = !statusData1.canCheckIn;

// Select book2 and update its status and buttons
const book2 = document.querySelector("#book2");
const status2Element = book2.querySelector(".status");
const reserve2Button = book2.querySelector(".reserve");
const checkout2Button = book2.querySelector(".checkout");
const checkin2Button = book2.querySelector(".checkin");

const status2 = status2Element.textContent;
const statusData2 = STATUS_MAP[status2];

status2Element.style.color = statusData2.color;
reserve2Button.disabled = !statusData2.canReserve;
checkout2Button.disabled = !statusData2.canCheckout;
checkin2Button.disabled = !statusData2.canCheckIn;

// Select book3 and update its status and buttons
const book3 = document.querySelector("#book3");
const status3Element = book3.querySelector(".status");
const reserve3Button = book3.querySelector(".reserve");
const checkout3Button = book3.querySelector(".checkout");
const checkin3Button = book3.querySelector(".checkin");

const status3 = status3Element.textContent;
const statusData3 = STATUS_MAP[status3];

status3Element.style.color = statusData3.color;
reserve3Button.disabled = !statusData3.canReserve;
checkout3Button.disabled = !statusData3.canCheckout;
checkin3Button.disabled = !statusData3.canCheckIn;
