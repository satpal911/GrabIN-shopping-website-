import mongoose from "mongoose";
const createDb = async()=>{
    try {
        await mongoose.connect("mongodb+srv://pal0005911:0GQMdWYdW1p989pO@cluster0.rcumisq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("database connected successfully")
    } catch (error) {
        console.log(`database connecting error ${error}`)
    }
}

export default createDb