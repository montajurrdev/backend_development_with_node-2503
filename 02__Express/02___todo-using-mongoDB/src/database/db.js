import mongoose from "mongoose";


async function connectDb(){
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database Connected");
        
    }
    catch(error){
        throw new Error(error)
        
    }
    
}

export default connectDb;