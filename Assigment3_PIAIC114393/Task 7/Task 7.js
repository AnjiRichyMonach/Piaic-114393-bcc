
const P_1 = document.getElementById('p_1')


let a = [10, 20, 4, 40, 60, 70]
let b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArray = [];



const func_1 = () => {

    for (let i = 0; i < a.length; i++) {
        if (newArray.indexOf(a[i]) === -1) {
            newArray.push(a[i])
        }
    }
}



const func_2 = () => {

    for (let j = 0; j < b.length; j++) {
        if (newArray.indexOf(b[j]) === -1) {
            newArray.push(b[j])
        }
    }

}

func_1();
func_2();
newArray.sort((a, b) => a - b);
p_1.innerText = "New sorted Array: " + newArray