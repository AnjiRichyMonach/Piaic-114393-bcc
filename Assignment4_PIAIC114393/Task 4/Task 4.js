


const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');

const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

let userInput;
let index;

do {
    userInput = prompt("Please Enter valid Email");


} while (!pattern.test(userInput));

alert('Correct password'); 