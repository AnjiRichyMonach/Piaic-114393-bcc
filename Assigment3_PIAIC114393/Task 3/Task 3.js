
const BTN_1 = document.getElementById('btn_1')
const BTN_2 = document.getElementById('btn_2')
const BTN_3 = document.getElementById('btn_3')
const BTN_4 = document.getElementById('btn_4')

let P = document.getElementById("p")
let P_1 = document.getElementById("p_1")
let P_2 = document.getElementById("p_2")
let P_3 = document.getElementById("p_3")
let P_4 = document.getElementById("p_4")
let P_5 = document.getElementById("p_5")
let P_6 = document.getElementById("p_6")
let P_7 = document.getElementById("p_7")

let array = [" Red ", "Yellow ", "Purple ", "Black "];
P.innerText = `Array :` + array;

const func_1 = (INPUT_1) => {
    array.unshift(INPUT_1);
    P_1.innerText = `Updated Array :` + array;
}

BTN_1.addEventListener('click', () => {
    const INPUT_1 = document.getElementById('input_1').value
    func_1(INPUT_1);
})

const func_2 = (INPUT_2) => {
    array.push(INPUT_2);
    P_2.innerText = `Updated Array :` + array;
}

const func_3 = () => {
    array.unshift("Violet ", "Margenda ")
    P_3.innerText = `Updated Array after adding two colors:` + array;
}


const func_4 = () => {
    array.shift();
    P_4.innerText = `Updated Array after deleting first color:` + array;
}

const func_5 = () => {
    array.pop();
    P_5.innerText = `Updated Array after deleting last color:` + array;
}


BTN_2.addEventListener('click', () => {
    const INPUT_2 = document.getElementById('input_2').value
    func_2(INPUT_2);
    func_3();
    func_4();
    func_5();
})


const func_6 = (INPUT_6, INPUT_7) => {
    array.splice(INPUT_7, 0, INPUT_6);
    P_6.innerText = `Updated Array after adding color: ` + array;
}


BTN_3.addEventListener('click', () => {
    const INPUT_6 = document.getElementById('input_6').value
    const INPUT_7 = document.getElementById('input_7').value
    func_6(INPUT_6, INPUT_7);
})


const func_7 = (INPUT_8, INPUT_9) => {
    array.splice(INPUT_8, INPUT_9);
    P_7.innerText = `Updated Array after deleting color: ` + array;
}

BTN_4.addEventListener('click', () => {
    const INPUT_8 = document.getElementById('input_8').value
    const INPUT_9 = document.getElementById('input_9').value
    func_7(INPUT_8, INPUT_9);
})






