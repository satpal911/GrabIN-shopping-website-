import mongoose from "mongoose";
import dotenv from 'dotenv'
const createDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    } catch (error) {
        console.log(`database connecting error ${error}`)
    }
}

export default createDb