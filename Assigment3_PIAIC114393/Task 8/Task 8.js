
const P_1 = document.getElementById('p_1')
const P_2 = document.getElementById('p_2')
const P_3 = document.getElementById('p_3')
const P_4 = document.getElementById('p_4')
const P_5 = document.getElementById('p_5')

let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
p_1.innerText = `Counting: ` + counting;

let reversedArray = counting;
reversedArray.reverse;
p_2.innerText = `Reversed Counting: ` + reversedArray;


let evenArray = [];
const findEvenFunc = () => {

    for (let i = 0; i < counting.length; i++) {
        if (counting[i] % 2 === 0) {
            evenArray.push(counting[i])
        }
    }

}

findEvenFunc();
p_3.innerText = "Even: " + evenArray;



let oddArray = [];
const findoddFunc = () => {

    for (let i = 0; i < counting.length; i++) {
        if (counting[i] % 2 !== 0) {
            oddArray.push(counting[i])
        }
    }

}

findoddFunc();
p_4.innerText = "Odd: " + oddArray;


let series = [];
counting.map((ele) => {
    if ([ele] % 2 === 0) {
        series.push(ele + "k")

    }

})


p_5.innerText = "Series: " + series;
