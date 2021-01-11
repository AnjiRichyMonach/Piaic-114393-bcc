
const P_1 = document.getElementById('p_1')
const P_2 = document.getElementById('p_2')


let a = [24, 53, 78, 91, 12]
let b = Math.max.apply(null, a)

p_1.innerText = `Array items: ` + a;
p_2.innerText = `The largest number is: ` + b