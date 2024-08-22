
const prompt = require('prompt-sync')();

const userInput = prompt("Enter :");

let x = parseInt(userInput);

if(x>0){
	console.log("Positive no.");
}
else if(x==0){
	console.log("No. is Zero");
}
else{
	console.log("Negative no.");
}
