
let a=2; 
let b=1;

//--a; 
    // First it will decrement the value of a then assign to variable a
    //a=a-1
    // a=1      
--a;
console.log("Value of a: ",a);
console.log("Value of b: ",b);



//--a - --b;
    //(1-1) - (1-1) = 0
    // First it will decrement the value of a then assign to variable a, similarly with b
    //a=1-1
    // a=0
    //  b=1-1
    // b=0
--a - --b;
console.log("value of a: ", a)
console.log("value of b: ", b)


//--a - --b + ++b;
    //(0-1) - (0-1) + ++b;  now the value of b=-1
    //(0-1) - (0-1) + (-1+1)= 0  now the value of b= 0
    // First it will decrement the value of b then assign to variable b, now current value of 
    // b=-1 then for incrementation of b -1 will be used and b value updated to 0. 
    //a=0-1
    // a=-1
    // b=0
--a - --b + ++b;
console.log("value of a: ", a)
console.log("value of b: ", b)


//--a - --b + ++b +b--;
    //(-1-1) - (0-1) + ++b +b--;  now the value of b=-1, a=-2
    //(-1-1) - (0-1) + (-1+1) +b--  now the value of b= 0, a=-2
    //(-1-1) - (0-1) + (-1+1) +(0)= -1  now the value of b= -1 but here it 
    //will use b=0 bcz its post decrement, it solves expression with previous value
    // then decrement in variable and , a=-2
    // First it will decrement the value of b then assign to variable b, now current value of 
    // b=-1 then for incrementation of b -1 will be used and b value updated to 0. Now b=0 used in expression
    // after b decrementation its value will be -1 and thats now its original value.
    //a=-1-1
    // a=-2
    // b=-1

let result=  --a - --b + ++b + b--;
console.log("value of a: ", a)
console.log("value of b: ", b)
console.log("Result of expression: ", result)

document.write(`a is: ${a}`+"<br>"+ `b is: ${b}`+"<br>"+ `result is: ${result}`)