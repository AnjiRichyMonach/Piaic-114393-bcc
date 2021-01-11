
const p_1 = document.getElementById('p_1');
const p_2 = document.getElementById('p_2');


let array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let newArray = [];

const func = () => {

    for (let i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i])
        }
    }

}

func();
p_1.innerText = `Old Array: ` + array;
p_2.innerText = `Filtered Array: ` + newArray;
