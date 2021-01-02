

const submitBtn=document.querySelector('.submit');
const resultBtn=document.querySelector('.result');

const resultFunc=(op,input1,input2)=>{
    if(op==="-"){resultBtn.innerText= `${input1} ${op} ${input2} = ${input1-input2}`}
    if(op==="+"){resultBtn.innerText= `${input1} ${op} ${input2} = ${input1+input2}`}
    if(op==="*"){resultBtn.innerText= `${input1} ${op} ${input2} = ${input1*input2}`}
    if(op==="%"){resultBtn.innerText= `${input1} ${op} ${input2} = ${input1%input2}`}
    if(op==="/"){resultBtn.innerText= `${input1} ${op} ${input2} = ${input1/input2}`}
    }

    submitBtn.addEventListener('click', ()=>{
    const Input1=+document.querySelector('.input_1').value;
    const Input2=+document.querySelector('.input_2').value;
    let operator=prompt("Enter operation(-,+,*,/,%)");
    resultFunc(operator, Input1, Input2);
 
        
    })

