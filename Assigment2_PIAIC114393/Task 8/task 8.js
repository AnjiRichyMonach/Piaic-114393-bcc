
const submitBtn=document.querySelector('.submit');

const resultBtn=document.querySelector('.result');


submitBtn.addEventListener('click', ()=>{
    const userInput= +document.querySelector('.input_1').value;
    if(userInput<0){resultBtn.innerText="Number is less than 0, negative"}
    else if(userInput>0){resultBtn.innerText="Number is greater than 0, positive"}
    else if(userInput===0){resultBtn.innerText="Number is 0"}
})