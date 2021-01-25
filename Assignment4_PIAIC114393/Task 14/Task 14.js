


const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');
const P_3 = document.getElementById('p_3');

let todayDate = new Date();

P_1.innerText = `Current date: ` + todayDate;
let hours = (todayDate.getHours()) - 1;
todayDate.setHours(hours)
P_2.innerText = `1 hour ago it was : ` + todayDate;