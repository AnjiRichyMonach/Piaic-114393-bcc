

const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');

let string = "472";
let number = +string;

P_1.innerText = `value: ` + string + "\n Type: " + typeof string
P_2.innerText = `value: ` + number + "\n Type: " + typeof number;