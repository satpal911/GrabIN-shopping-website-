import Blog from "../models/Blog.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const createBlog = async(req,res)=>{
    try {
        let {title, description, price, category} = req.body
        category = category.split(',').map(c => c.toLowerCase().trim());


        const  file = req.file
       
        if (!title || !description || !price || !category) {
  return res.status(400).json({
    message: "All fields are required"
  });
}

    if(!file){
        return res.status(400).json({
            message:"please upload a file"
        })
    }

    const imageUrl = await uploadOnCloudinary(file)
     const newBlog = new Blog({
            title,
            description,
            price,
            category,
            image: imageUrl || ""
        })

       await newBlog.save()
       res.status(201).json({
        status:1,
        message:"Blog created successfully",
        data:{
            
            ...newBlog.toObject(),
            id: newBlog._id
        }
       })
    } catch (error) {
        res.status(500).json({
            status:0,
            message:`server error ${error.message}`
        })
    }
}

export const getBlog = async (req,res) => {
    try {
        const getAll = await Blog.find()
        res.status(200).json({
            status:1,
            message:"Blogs get successfully",
            data : getAll
        })
    } catch (error) {
        res.status(500).json({
            status:0,
            message:`server error ${error.message}`
        })
    }
}

export const getOneBlog = async (req,res) => {
    const {id} = req.params
    try {
        const getOne = await Blog.findById(id)
        res.status(200).json({
            status:1,
            message:"One blog get successfully",
            data: {...getOne.toObject(),
                id: getOne._id
            }
        })
    } catch (error) {
        res.status(500).json({
            status:0,
            message:`server error ${error.message}`
        })
    }
}

export const deleteAll = async (req,res) => {
    try {
        const deleteAll = await Blog.deleteMany()
        res.status(200).json({
            status:1,
            message:"data deleted successfully",
            data: deleteAll
        })
    } catch (error) {
        res.status(500).json({
            status:0,
            message:`server error ${error.message}`
        })
    }
}

export const deleteOne = async (req,res) => {
    const {id} = req.params
    try {
        const deleteOne = await Blog.findByIdAndDelete(id)
        res.status(200).json({
            status:1,
            message:"One blog deleted successfully",
            data: deleteOne
        })
    } catch (error) {
        res.status(500).json({
            status:0,
            message:`server error ${error.message}`
        })
    }
}

export const editBlog = async (req,res) => {
    const {id} = req.params
    let{title, description, price, category, existingImage} = req.body
    const file  = req.file

    const updatedFields = {title, description, price}

    if (category) {
    category = category.split(',').map(c => c.toLowerCase().trim());

    updatedFields.category = category;
            }

    try {
         if (file) {
      const imageUrl = await uploadOnCloudinary(file); // ✅ Upload image
      updatedFields.image = imageUrl;
    } else if (existingImage) {
      updatedFields.image = existingImage; // ✅ Keep old image if no new one uploaded
    }

        const editBlog = await Blog.findByIdAndUpdate(id,updatedFields,{new:true})
        res.status(200).json({
            status:1,
            message:"data updated successfully",
            data: {...editBlog.toObject(),
                id: editBlog._id
            }
        })
    } catch (error) {
        res.status(500).json({
            status:0,
            message:`server error ${error.message}`
        })
    }
}