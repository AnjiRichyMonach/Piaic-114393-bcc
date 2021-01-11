
const P_1 = document.getElementById('p_1')
const P_2 = document.getElementById('p_2')
const P_3 = document.getElementById('p_3')

let aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
let o = ["th", "st", "nd", "rd"];


p_1.innerText = "1" + o[1] + ` choice is ` + aCities[0];
p_2.innerText = "2" + o[2] + ` choice is ` + aCities[1];
p_3.innerText = "3" + o[3] + ` choice is ` + aCities[2];

