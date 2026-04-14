import e from 'express'
import connectDb from './src/database/db.js';
import { Task } from './src/models/task.model.js';
const app = e()


const port =  process.env.PORT
app.use(e.json())
app.use(e.urlencoded())


app.get("/tasks/:taskID", async (req, res) => {
    const {taskID} = req.params;
  const singleTask = await Task.findById(taskID);

  return res.status(200).json({ data: singleTask });
});


app.get("/tasks/", async (req, res) => {
const allTasks = await Task.find()
 
  return res.status(200).json({ data: allTasks });
});

app.post("/tasks/create/", async (req, res)=>{
    const {title, details} = req.body;
    const createdTask = await Task.create({title, details})
    return res.status(201).json({data: createdTask})
    
})

app.delete("/tasks/:taskId", async (req, res) => {
    const { taskId } = req.params;
   const singleTask = await Task.findByIdAndDelete(taskId);
//   return res.json({ data: singleTask });
  return res.status(204).end()   // status send korle ar kichu jay na
});


app.patch("/tasks/:taskId", async (req, res) => {
    const {taskId} = req.params;
  const { title, details } = req.body;
  const updateTask = await Task.findByIdAndUpdate(taskId, {
    title,
    details,
  },
{
    new: true,
})
  return res.status(201).json({ data: updateTask });
});

app.get('/', (req, res)=>{
    res.send("Welcome");
})

app.listen(port, async ()=>{
    await connectDb()
    console.log(`Server is running on port ${port}`);
    
})