

const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');
const P_3 = document.getElementById('p_3');


let userInput = prompt('Enter your age')
let todayDate = new Date();
let todayYear = todayDate.getFullYear();
let birth = todayYear - userInput;
todayDate.setUTCFullYear(birth)
P_1.innerText = `Your age is: ` + userInput


P_2.innerText = `Your birth year is ` + birth;