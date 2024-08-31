// function testFunctionForRest(...num1) {
//     return num1
// }

// const x = testFunctionForRest(100,200,300,400,500)
// console.log(x);
// function testFunctionForRest2(var1, var2 ,...num1) {
//     return num1
// }

// const y = testFunctionForRest2(100,200,300,400,500)
// console.log(y);


const object = {
    userName : "Mahipal",
    age : 20
}

// for(let key in object){
//     console.log(key ,"|",object[key])
// }
function handleFunction(anyObject) {
    console.log(`${anyObject.userName} is ${anyObject.age} years old !!!`);
}

// handleFunction(object);
handleFunction({
    userName : "Kirtan",
    age : 21
});

