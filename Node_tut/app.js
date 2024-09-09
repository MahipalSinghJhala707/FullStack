const express = require('express');

const app = express();

app.get('/about', (req,res)=>{
    res.send("yoyo honey singh")
})


// Create server using express
app.listen(3000,()=>{
    console.log("Server is stared");
    
})

const userData = [{username : 'abc',age : 22} , {username : 'xyz',age : 5}];

app.post('/about' , (req,res)=>{
    
})