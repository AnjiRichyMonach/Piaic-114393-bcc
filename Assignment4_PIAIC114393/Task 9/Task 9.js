

const P_1 = document.getElementById('p_1');
const P_2 = document.getElementById('p_2');

function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}
P_1.innerText = '<p><strong><em>Only print this</em></strong></p>'
P_2.innerText = (removeTags('<p><strong><em>Only print this</em></strong></p>'));