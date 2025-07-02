import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs'
import { config } from 'dotenv'

config()

cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
})

export const uploadOnCloudinary = async(file)=>{
    try {
        if(!file || !file.path){
            console.log("please  upload a file")
        return null
        }

        const res = await cloudinary.uploader.upload(file.path, {
            resource_type: "auto"
        })
      
        try {
      fs.unlinkSync(file.path);
    } catch (unlinkErr) {
      console.warn(`Failed to delete local file: ${unlinkErr.message}`);
    }
    return res.secure_url;
    
    } catch (error) {
        console.log(`cloudinary upload error ${error.message}`)
        throw error
    }
}