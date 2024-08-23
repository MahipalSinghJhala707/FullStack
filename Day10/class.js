// note this is destructuring the array
// const arr = [1,2,3,[4,[5,6]]];
// const [a,b,c,[d,[e,f]]] = arr;

// console.log(a,b,c,d,e,f);

// note this is destructuring of the object

// Destructuring of function params

// function sum([a,b,c]){
//     return a+b+c;
// }


// console.log(sum([1,2,3]));


// // rest param 
// function printNumber(...el){
//     el.forEach((num)=>{
//         console.log(num);
//     })
// }

// printNumber([1,2,3,4,5,6,7,8,9]);
// const details = {
//     firstName : 'Garv',
//     age : 2024-2004,
//     address:{
//         state : 'Udaipur'
//     }
// }
// const {firstName,age,address:{state}} = details;

// console.log(firstName,age,state);


// SPREAD OPERATOR(...)
// const arr = [1,2,3,4,5];
// console.log(...arr);

// copy an array or object
// const arr2 = [...arr];
// console.log(arr2.push(6));
// console.log(arr,arr2);

// adding two arrays
// const clothing = ['shirt','Jeans'];
// const electronic = ['tv','ac'];

// const shoppingCart = ['shoes',...clothing,...electronic,'Mobile'];
// console.log(shoppingCart);

// Object

// const obj1={
//     a:1,
//     b:2,
// }
// const obj2 = {
//     b:3,
//     c:4,
// }
// const obj3 = {...obj1};
// console.log(obj3);

// NOTE in the case of duplicate properties the later spread object will replace the property of previous one
// const obj4 = {...obj1,...obj2};

// NOTE Rest Parameter (...)
// NOTE it packs the remaining values in an array :

// const numberArray = [1,2,3,4,5];
// const [one,two,...others] = numberArray;
// console.log(one,two,others);

// Destructuring in the function params
// function sum([a,b,c]) {
//     // console.log(item);
//     // const a = item[0];
//     // const b = item[1];
//     // const c = item[2];
//     return a+b+c;
// }
// console.log(sum([1,2,3]));

// function printNumber(...el) {
//     console.log(el);
//     el.forEach((n)=>{
//         console.log(n);        
//     })
// }
// printNumber(1,2,3,4,5,6,7,8);



