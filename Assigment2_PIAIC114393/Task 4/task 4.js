

const calcBtn = document.getElementById('calc');
let resultBtn=document.getElementById('result');

// const extractVal = (a) => { // 
//     return parseInt(a.target.value); // we must have to return value from this function
// }
// const --.addeventlistner('change',extractVal)

calcBtn.addEventListener('click', () => {
    const Input_1 = document.querySelector('.input_1').value;
    const Input_2 = document.querySelector('.input_2').value;
    const Input_3 = document.querySelector('.input_3').value;
    const Input_4 = parseInt(document.querySelector('.input_4').value);
    let grade, remarks;
    let  sum= (+Input_1 + +Input_2 + +Input_3);
    let per=sum/Input_4*100;
    if(per>=60){
        grade='B';
        remarks='you need to improve';
    }
    if(per>=70){
        grade='A';
        remarks='Good';
    }
    if(per>=80){
        grade='A-one';
        remarks='Excellent'
    }
    if(per<60){
        grade='Fail';
        remarks='Sorry';
    }
    resultBtn.innerText=(`Total marks: ${Input_4} \n Marks Obtained: ${sum} \n Percentage: ${per} \n Grade: ${grade} \n Remarks: ${remarks}`);
})



