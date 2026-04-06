import express from "express"  // This module is a function, that's why need to run it
// import serveIndex from "serve-index" third party middleware function

const app = express()

// app.get('/', (req, res)=>{
//     res.send('Successful response')
// })
// // it was a requestListener function in raw node. it handled request in get method. by defalt

// app.listen(3000,()=>{
//     console.log('Example app is listening port 3000');
    
// })



// with express we can write and use middleware functions

// Middleware = checking before pass data. can be multiple step
// authenticate and authorize 

// define middleware function, we call
// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });
// obviously it will placed before requestListener function


//
//
//
// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("Successful response");
// });


// app.listen(3000, () => {
//   console.log("Example app is listening port 3000");
// });



//
//
//
// app.use((req, res, next) => {
//   console.log("Time:", Date.now());
//   next();
// });

// app.use("/request-type",(req,res,next)=>{
//     console.log('request type:', req.method);
//     next()
    
// })
// // this function only run for requests sent to localhost:3000/reqquest-type

// app.get("/", (req, res) => {
//   res.send("Successful response");
// });

// app.listen(3000, () => {
//   console.log("Example app is listening port 3000");
// });

import serveIndex from "serve-index";
//
//
//
// Express come with a built in middleware function. express.static
// we can use third party middleware function(serve-index).
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/request-type", (req, res, next) => {
  console.log("request type:", req.method);
  next();
});

// app.use('/public', express.static('public'))   // express.static has limited access
// app.use('/public', express.static('public/text.txt'))   //
// app.use('/public', serveIndex('public'))  // serveIndex can do better
app.use('/public', serveIndex('public'))  // serveIndex can do better

app.get("/", (req, res) => {
  res.send("Successful response, Montajur");

});

app.listen(3000, () => {
  console.log("Example app is listening port 3000");
});
