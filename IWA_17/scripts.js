// scripts.js

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getDaysInMonth = (date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

// Only edit below

const createArray = (length) => {
  const result = [];
  let counter = 0;

  while (result.length < length) {
    result.push(counter++);
  }

  return result;
};

const createData = () => {
  const current = new Date();
  current.setDate(1);

  const startDay = current.getDay();
  const daysInMonth = getDaysInMonth(current);

  const weeks = createArray(Math.ceil(daysInMonth / 7));
  const days = createArray(7);
  const result = [];

  for (const weekIndex of weeks) {
    const weekData = {
      week: weekIndex + 1,
      days: [],
    };

    for (const dayIndex of days) {
      const day = dayIndex - startDay + weekIndex * 7 + 1;
      const isValid = day > 0 && day <= daysInMonth;

      weekData.days.push({
        dayOfWeek: dayIndex + 1,
        value: isValid ? day : "",
      });
    }
    result.push(weekData);
  }

  return result;
};

const addCell = (existing, classString, value) => {
  const result = /* html */ `
        ${existing}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

  return result;
};

const createHtml = (data) => {
  let result = "";

  for (const { week, days } of data) {
    let inner = "";
    inner = addCell(inner, "table__cell table__cell_sidebar", `Week ${week}`);

    for (const { dayOfWeek, value } of days) {
      const isToday = new Date().getDate() === value;
      const isWeekend = dayOfWeek === 6 || dayOfWeek === 0;
      const isAlternate = week % 2 === 0;

      let classString = "table__cell";

      if (isToday) classString += " table__cell_today";
      if (isWeekend) classString += " table__cell_weekend";
      if (isAlternate) classString += " table__cell_alternate";

      inner = addCell(inner, classString, value);
    }

    result += `
      
    <tr>${inner}</tr>
`;
  }

  return result;
};

// Only edit above

const current = new Date();
document.querySelector("[data-title]").innerText = `${
  MONTHS[current.getMonth()]
} ${current.getFullYear()}`;

const data = createData();
document.querySelector("[data-content]").innerHTML = createHtml(data);
