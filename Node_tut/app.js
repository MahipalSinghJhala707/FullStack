const express = require('express');

const app = express();

// app.get('/about', (req,res)=>{
//     res.send("yoyo honey singh")
// })


const userData = [{username : 'abc',age : 22} , {username : 'xyz',age : 5}];

app.post('/about', (req, res) => {
    // const newUser = req.body; // Get data sent in the request body
  
    // Add new user data to userData array
  
    // Respond with updated userData array
    res.json({
      message: "User data received successfully",
      data: userData
    });
  });


// Create server using express
app.listen(
    4000,
    ()=>{
        console.log("Server is stared");

})

