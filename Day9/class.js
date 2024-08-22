// sclice

const arr = [1,2,3,4,5,6];
console.log(arr);

// const slicedOutput = arr.slice(1,5);
// console.log(slicedOutput);

// splice
// splice(index, deletCount, newElement ) add ,remove elements ;
// splice changes the original method

// const arr2 = arr.splice(2,2);
// console.log(arr2);
// console.log(arr);
// arr.splice(2,0,7,8);
// console.log(arr);


// Note - forEach
// Note - callback function
// Note the method which accepts a callback function is called higher order method 
// Note - arrow ()=>{}
// Note - function(){}


// const ret_forEach =arr.forEach((el)=>{
//     console.log(el);
    
// })
// console.log(ret_forEach);
// const ret_forEach =arr.forEach((el)=>{
//     console.log(el*2);
    
// })


// Note - Map(higher order methods)

// const mappedOutput = arr.map((x)=>{
//     return x*2;
// })

// console.log(mappedOutput);

// Note - used to perform some transformation on the array always accepts a callback and returns a new array which is the result of transformation we applied in the callback.

// Note Filter (Higher Order method)

// const filterArr = arr.filter((x)=>{
//     return (x+1)%2;
// })

// const filterArr = arr.filter((x)=>{
//     return true;
// })


// console.log(filterArr);


// Note - Find Method (Higher Order method)
// const findOutput = arr.find((x)=>{
//     return x>2;
// })
// console.log(findOutput);

// console.log(console.log("hello, World!"));

// Note - REDUCE METHOD(Higher Order method)
// Note - used to reduce the array into a single value (sum kerne ke kaam me aajayegi ye method)

// const reduceOutput= arr.reduce((sum,i)=>{
//     return sum+i;
// },0)

// console.log(reduceOutput);


















