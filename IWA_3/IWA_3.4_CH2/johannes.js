const privateFirstname = "Johannes"
const privateSurname = "Potgieter"
export const publicRole  = "Intern"

export const display = privateFirstname + privateSurname + '('+ publicRole + ')'
document.querySelector('#johannes').innerText = display

