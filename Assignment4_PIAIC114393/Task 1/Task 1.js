

const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');

let string = "Hyderabad";
let newString = string.replace("Hyder", "Islam")
P_1.innerText = `City: ` + string;
P_2.innerText = `After replacement: ` + newString;