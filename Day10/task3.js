const p = require('prompt-sync')();

let x = parseInt(p("Enter the no. here : "));


if (x==0) {
    console.log("Zero");
} 
else if(x%2==0) {
    console.log("even");
}

else if(x%2==1) {
    console.log("odd");
}
else{
    console.log("Invalid input :(");   
}