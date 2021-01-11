
const P_1 = document.getElementById('p_1')
const P_2 = document.getElementById('p_2')

let array = ["cake", "apple pie", "cookie", "chips", "patties"]
let userInput = prompt("Welcome to the bakery ABC. What you want sir/madam");
USERINPUT = userInput.toLowerCase();



if (array.indexOf(USERINPUT) === -1) {
    p_1.innerText = "We are sorry " + USERINPUT + " is not available in our bakkery"
}

else {
    let a = array.indexOf(USERINPUT)
    p_1.innerText = USERINPUT + " is available at index " + a + " in our bakkery"

}