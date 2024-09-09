const { log } = require('console');
const http = require('http');
const path = require('path');
const fs= require('fs');
const EventEmitter = require('events');


const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === '/about' && req.method === 'GET'){
        const finalPath = path.join(__dirname,'about.html')
        // Allways use write method before sending any response
        res.writeHead(201 , {'Content-Type':'text/HTML'})
        // res.end("about page")
        fs.readFile(finalPath, 'utf-8', (err,data)=>{
            if(err){
                res.end("err")
            }
            else{
                res.end(data)
            }
        })

    }
    else if(req.url === '/services'){
        res.end("about page")
    }
    else {
        res.end("Home page")
    }
});

server.listen(3000,()=>{
    log("server is running")
});


// http => request  , response

// npm i nodemon -g --save-dev


//REVIEW req.method => we have different req methods we can use to send request from client to the server most common used methods are : 
//NOTE GET => used to get the data from backend.
//NOTE POST => used to send data for the processing in the backend.
//NOTE PUT => used to update or replace the data
//NOTE PATCH => used to perform partial update
//NOTE DELETE => used to delete any entry in the backend


//TODO http , http  status code , request and response object , http methods , response , request cycle , web server , request and response headers

