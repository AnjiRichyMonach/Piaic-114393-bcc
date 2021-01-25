


const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');


let dice_1 = Math.floor(Math.random() * 6) + 1;
P_1.innerText = `Random dice value: ` + dice_1


let dice_2 = Math.floor(Math.random() * 6) + 1;
P_2.innerText = `Random dice value: ` + dice_2