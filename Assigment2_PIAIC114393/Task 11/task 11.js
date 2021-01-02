

const submitBtn= document.querySelector('.submit');



submitBtn.addEventListener('click', ()=>{
    const time= document.querySelector('.input_1').value;
    if(time>=0000 && time<1200){document.write('Good morning!')}
    else if(time>=1200 && time<1700){document.write('Good Afternoon!')}
    else if(time>=1700 && time<2100){document.write('Good Evening!')}
    else if(time>=2100 && time<=2359){document.write('Good night!')}
})