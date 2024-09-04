console.log('hello')
// console.log(window) ;
// console.log(process) ;

//NOTE importing in the nodejs using "common js modules"  ...

// fs module
const fs = require('fs') ;

//NOTE readFileSync
//NOTE BLOCKING CODE IN THE NODEJS
console.log('reading file started')

const data = fs.readFileSync('./Node_tut/index.txt','utf-8')

console.log(data)
console.log('reading file ended')

//NOTE readFile

console.log('async file start')

//NON BLOCKING
fs.readFile('./Node_tut/index.txt', 'utf-8', (err,data)=>{
console.log(data)
})


console.log('async file ended')


//NOTE writeFile and writeFileSync

fs.writeFileSync('./example.txt','hello')

fs.writeFile('text.txt','async data', ()=>{
    console.log('file created')
})

//NOTE appendFile , appendFileSync
fs.appendFile('index.txt', ' adding using append', ()=>{
    console.log('new data added')
})


fs.renameSync('index.txt','demo.txt')