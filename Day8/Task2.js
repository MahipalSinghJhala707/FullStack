
const prompt = require('prompt-sync')();

const userInput = prompt("Enter :");

let age = parseFloat(userInput);

if(age>=18){
	console.log("You are eligible to vote");
}
else{
	console.log("You are  not eligible to vote");
}
