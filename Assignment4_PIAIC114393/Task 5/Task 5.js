

const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');
const P_3 = document.getElementById('p_3');
const P_4 = document.getElementById('p_4');

let userInput = prompt("Enter a positive number")

while (userInput < 0 || isNaN(userInput)) {
    userInput = prompt("Enter a positive number")
}
+(userInput)

P_1.innerText = `Number: ` + userInput;
P_2.innerText = `Round off value: ` + Math.round(userInput)
P_3.innerText = `Floor value: ` + Math.floor(userInput)
P_4.innerText = `Ceil value: ` + Math.ceil(userInput)