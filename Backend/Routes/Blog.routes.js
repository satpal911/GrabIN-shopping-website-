import uploadSingleImage from "../middleware/upload.js";
import { createBlog, getBlog, getOneBlog, deleteAll, deleteOne, editBlog } from "../controllers/Blog.controllers.js";
import express from  'express'
const route = express.Router()

route.post('/',uploadSingleImage('image'),createBlog)
route.get('/',getBlog)
route.get('/:id',getOneBlog)
route.delete('/',deleteAll)
route.delete('/:id',deleteOne)
route.put('/:id',uploadSingleImage('image'),editBlog)

export default route