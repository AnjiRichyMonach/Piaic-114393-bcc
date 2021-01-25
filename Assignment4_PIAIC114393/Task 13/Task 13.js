
const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');
const P_3 = document.getElementById('p_3');

let todayDate = new Date("Dec 05 2015 22:32:23 ");

P_1.innerText = todayDate;
let TodayMilli = todayDate.getTime();

let todayMin = todayDate.getMinutes();
let diff = TodayMilli - todayMin;
let diffMin = diff / (1000 * 60 * 60);
let accurateMin = Math.floor(diffMin);


P_2.innerText = `Elapsed milliseconds since January 1, 1970: ` + TodayMilli;

P_3.innerText = `Elapsed minutes since January 1, 1970: ` + accurateMin;




