
const p_1 = document.getElementById('p_1');
const p_2 = document.getElementById('p_2');

let array = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
p_1.innerText = `Cities list: ` + array;
let newArray = array.slice(2, 4)
p_2.innerText = `Selected Cities list: ` + newArray;