import mongoose  from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
       type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    category:{
        type: [String],
        required: true
    }
})

const Blog = mongoose.model('Blog',blogSchema)

export default Blog