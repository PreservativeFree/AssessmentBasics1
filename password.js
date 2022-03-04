const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the password validator tool!");

let stringUserInput;
let doesInputNumber = false;
reader.question("Please enter the desired password, your password must start with the word Kiwi ", function(input) {
    stringUserInput = input;
    stringUserInput= input.slice(0,4);
    //console.log(stringUserInput);
   // for(let i; input.length; i++) {
   //     if(input[i].isInteger(9)) {
    //        doesInputNumber = true;
    //    }
   // }
    if(input.length >= 10 && stringUserInput == "Kiwi") {
        console.log("Excellent, this is a strong password!");
    } else {
        console.log("Sorry this is a weak password please try again");
    } 
    reader.close();
});