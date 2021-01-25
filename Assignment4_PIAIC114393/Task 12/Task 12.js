
const P_1 = document.getElementById('p_1');

let today = new Date();

let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
if (today.getDate() < 16) {
    P_1.innerText = `First fifteen days of the month`
}
else {
    P_1.innerText = `Last days of the month.`
}
