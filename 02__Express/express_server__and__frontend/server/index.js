const express = require("express")
const cors = require("cors")

const app = express();

const port = 8000;

const products = require('./json/products.json')


const users = [
    {
        firstName: "Montajur",
        lastName: "Rahman",
        email: "montajurrdev@gmail.com",
        password: "123456"
    },
    {
        firstName: "ali",
        lastName: "hossein",
        email: "ali@outlook.com",
        password: "123456"
    }

]


app.use(cors())
app.use(express.json())


app.get('/products',(req,res)=>{
    res.json(products)
})

app.post('/create', (req, res)=>{
    users.push(req.body)
    // console.log(users);
res.send(users)
})

app.get("/users", (req, res) => {
  res.send(users);
});


app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})


// CRUD Operation 
// Create, Read, Update, Delete
// Method → post, get, put, delete 