const privateFirstname = "Alex"
const privateSurname = "Naidoo"
export const publicRole = "Head of Marketing"

export const display = privateFirstname + privateSurname + '('+ publicRole + ')'
document.querySelector('#alex').innerText = display


