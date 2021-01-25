

const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');
const P_3 = document.getElementById('p_3');

let num_1 = '42'
let num_2 = '12345'
let num_3 = '666'


const findMean = (x) => {
    let sum = 0;

    for (let i = 0; i < x.length; i++) {

        sum = sum + +x[i]
    }
    return sum / +x.length;
}

P_1.innerText = `${num_1} ` + findMean(num_1);
P_2.innerText = `${num_2} ` + findMean(num_2);
P_3.innerText = `${num_3} ` + findMean(num_3);


