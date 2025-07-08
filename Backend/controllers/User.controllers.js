import User from "../models/User.models.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const registerUser = async (req,res) => {                       //Register controller
    try {
        // console.log(req.body)
        const {name, email, password} = req.body

        if(!name || !email || !password){                             //required field condition
            return res.status(400).json({
                status: 0,
                message:" field is required"
            })
        }
        const userMatch = await User.findOne({email})  
        console.log(userMatch)                  //check existing user
        if(userMatch){
            return res.status(400).json({
                status:0,
                message:"user already exist"
            })
        }

        const hashPassword = await bcrypt.hash(password,10)            //bcrypt the password in hash
        const newUser = new User({
            name,
            email,
            password: hashPassword
        })
        await newUser.save()

        res.status(201).json({
            status: 1,
            message:"User registered successfully",
        })
    } catch (error) {
        res.status(500).json({
            message:'registration failed',
            error: error.message
        })
    }
}

export const loginUser = async (req,res) => {                     //Login controller
    try {
        const {email, password} = req.body


        
        const user = await User.findOne({email})
        console.log(user)

        const hashPassword = await bcrypt.compare(password, user.password)

        if(!User || !hashPassword){
           return res.status(400).json({
                status: 0,
                message: "invalid email or password"
            })
        }

        res.status(200).json({
            status:1,
            message:"user login successfully"
        })
    } catch (error) {
        res.status(500).json({
            status:0,
            message: "login failed",
            error:error.message
        })
    }
}