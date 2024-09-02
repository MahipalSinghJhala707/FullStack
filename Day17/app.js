// console.log("Hello Mahipal")


// Date an time in js

let myDate = new Date()
// console.log(myDate.getMonth() + 1) months starts with 0 .
// console.log(myDate.getDay())
// console.log(myDate.getDate())
// console.log(myDate.toString())
// // console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())

// console.log(typeof myDate)

let myTimeStamp = Date.now()
let myDate2 = new Date("01-09-2024")

// console.log(myTimeStamp);
// console.log(myDate2.getTime());

console.log(myDate2.toLocaleString('default', {
    // weekday: 'long'
    // dateStyle:"full"

}));




