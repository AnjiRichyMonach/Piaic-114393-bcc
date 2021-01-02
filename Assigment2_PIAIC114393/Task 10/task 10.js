
const pword = "12arEEJ#@";
let userInput = prompt("Enter password");
while (userInput.length === 0) {
  userInput = prompt("Please enter your password");
}



if (pword === userInput) {
    alert('Correct! The password you entered matches the original password');
}

else { alert('Incorrect password') }
