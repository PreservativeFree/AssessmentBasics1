const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool!");

let stringUserInput;

reader.question("Please enter the desired password ", function(input) {
    stringUserInput = input;
    if(stringUserInput.length >= 10) {
        console.log("Excellent, this is a strong password!");
    } else {
        console.log("Sorry this is a weak password please try again");
    } 
    reader.close();
});