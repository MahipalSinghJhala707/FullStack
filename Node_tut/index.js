// console.log('hello')
// console.log(window) ;
// console.log(process) ;

//NOTE importing in the nodejs using "common js modules"  ...

// fs module
const fs = require('fs');
const os = require('os');
const path = require('path');


// //NOTE readFileSync
// //NOTE BLOCKING CODE IN THE NODEJS
// console.log('reading file started')

// const data = fs.readFileSync('./Node_tut/index.txt','utf-8')

// console.log(data)
// console.log('reading file ended')

// //NOTE readFile

// console.log('async file start')

// //NON BLOCKING
// fs.readFile('./Node_tut/index.txt', 'utf-8', (err,data)=>{
// console.log(data)
// })


// console.log('async file ended')


// //NOTE writeFile and writeFileSync

// fs.writeFileSync('./example.txt','hello')

// fs.writeFile('text.txt','async data', ()=>{
//     console.log('file created')
// })

// //NOTE appendFile , appendFileSync
// fs.appendFile('index.txt', ' adding using append', ()=>{
//     console.log('new data added')
// })
// fs.renameSync('Node_tut/index.txt','Node_tut/demo.txt')


// console.log(os.hostname());
// console.log(os.cpus());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.arch());


// console.log(path.dirname('C:/Users/Mahipal Singh Jhala/FullStack/Node_tut/index.js'));
// console.log(path.basename('C:/Users/Mahipal Singh Jhala/FullStack/Node_tut/index.js'));
// console.log(path.parse('C:/Users/Mahipal Singh Jhala/FullStack/Node_tut/index.js'));
// const parseObj = path.parse('C:/Users/Mahipal Singh Jhala/FullStack/Node_tut/index.js')
// console.log(parseObj);
// console.log(path.resolve('User','nigga','wassap.js'));
// console.log(path.join('User','nigga','wassap.js'));

//__dirname and __filename
// console.log(__dirname);
// console.log(__filename);


const finalPath = path.join(__dirname,'example.txt')
console.log(fs.readFileSync(finalPath ,'utf-8'));
