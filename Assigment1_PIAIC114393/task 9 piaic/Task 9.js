
let num1=3;
let num2=5;

let sub=num2-num1;
let multiplication=num1* num2;
let div= (num2 / num1);
let module= num2 % num1;

const result=(operation, ans)=>{
    document.write( `${operation} of ${num1} and ${num2} is ${ans}`+"<br>");  
  }

result("Subtraction", sub);
result("Multiplication", multiplication);
result("Division", div);
result("Module", module);

// Above code is refactored 
// document.write( `Subtraction of ${num1} and ${num2} is ${sub}`+"<br>");
// document.write( `Multiplication of ${num1} and ${num2} is ${multiplication}`+"<br>");
// document.write( `Division of ${num1} and ${num2} is ${div}`+"<br>");
// document.write( `Module of ${num1} and ${num2} is ${module}`+"<br>");

