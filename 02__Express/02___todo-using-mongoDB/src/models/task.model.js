import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        default: null
    },
    isCompleted: {
        type: Boolean,
        default: false
    },
  },
  { timestamps: true },
);


 
export  const Task = model("Task", taskSchema);