
let li = document.getElementById('li')

let array = ['SSC', 'HSC', 'BCS', 'BS', 'B.COM', 'MS', 'M.Phil', 'PhD']


text = "<ol type=1>";
array.forEach(myFunction);
text += "</ol>";
document.getElementById("li").innerHTML = text;

function myFunction(value) {
    text += "<li>" + ")  " + value + "</li>";
}

