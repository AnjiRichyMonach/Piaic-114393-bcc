

const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');
const P_3 = document.getElementById('p_3');
const P_4 = document.getElementById('p_4');

let num_1 = 16.765;
let num_2 = 12.37982;
let num_3 = -9.3079499;

P_2.innerText = ` ${num_1},2    ----->   ` + num_1.toFixed(2);
P_3.innerText = ` ${num_2},2    ----->   ` + num_2.toFixed(2);
P_4.innerText = ` ${num_3},2    ----->   ` + num_3.toFixed(4);