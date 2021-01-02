

let secretNum= 3;
let userInput=+prompt("Enter number from 1 t0 10");
if(userInput>1 && userInput<10 && userInput=="3"){
    document.write("Bingo! Correct answer");
}
else if(userInput>1 && userInput<10 && userInput==(++secretNum)){
    document.write("Close enough to the correct answer.");
}