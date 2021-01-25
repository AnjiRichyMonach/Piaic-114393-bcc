


const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');

let STRING = "the quick brown fox jumps over the lazy dog";

let searchFor = 'the';
let count = 0;
pos = STRING.indexOf(searchFor);

while (pos > -1) {
    ++count;
    pos = STRING.indexOf(searchFor, ++pos);
}

P_1.innerText = `There are ` + count + ` occurance of word "` + searchFor + `"`
