import e from 'express'
import connectDb from './src/database/db.js';
import { Task } from './src/models/task.model.js';
const app = e()


const port =  process.env.PORT
app.use(e.json())
app.use(e.urlencoded())


app.post("/tasks/create/", async (req, res)=>{
    const {title, details} = req.body;
    const createdTask = await Task.create({title, details})
    return res.json({data: createdTask})
    
})


app.get('/', (req, res)=>{
    res.send("Welcome");
})

app.listen(port, async ()=>{
    await connectDb()
    console.log(`Server is running on port ${port}`);
    
})