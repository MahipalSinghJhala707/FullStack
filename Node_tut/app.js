const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs')

const product = require('./product')
app.use(express.json())


app.post('/api/v1/addproduct', (req,res)=>{
  const newData = req.body
  newData.id = product.length + 1;
  product.push(newData)
  res.json(
        {
          data : product
        }
      )
    }
    )

// app.get('/api/v1/singleproduct/:id', (req,res)=>{
//   const id = parseInt(req.params.id)
//   const filterProduct = product.filter((product)=>{
//     return product.id === id
//   })
//   res.json(
//     {
//       // data : product[id]
//       data : filterProduct
//     }
//   )
// })
// app.get('/api/v1/getproduct', (req,res)=>{
//   // res.send(product)
//   res.json(
//     {
//       length : product.length,
//       data : product
//     }
//   )
// })





// app.get('/about', (req,res)=>{
//      res.render('about')
// })

// app.post('/about', (req, res) => {
//     // const newUser = req.body; // Get data sent in the request body
  
//     // Add new user data to userData array
  
//     // Respond with updated userData array
//     res.json({
//       message: "User data received successfully",
//       data: userData
//     });
//   });



app.listen(
    port,
    ()=>{
        console.log("Server is stared");
})





// app.get('/', (req,res)=>{
//     // res.status(500).send("hi")
//     res.download('app.js')
//     // res.send("yoyo honey singh....")
// })
// const userData = [{username : 'abc',age : 22} , {username : 'xyz',age : 5}];



// Create server using express
// app.listen(3000);
// app.listen(
//     3000,
//     ()=>{
//         console.log("Server is stared");
// })

