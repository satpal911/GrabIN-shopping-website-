import User from "../models/User.models.js";
import jwt from 'jsonwebtoken'

const registerUser = async (req,res) => {                       //Register controller
    try {
        const {name, phone, email, password} = req.body

        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({
                message:'email already registered'
            })
        }

        const newUser = new User({name, phone, email, password})
        await newUser.save()

        res.status(201).json({
            message:"User registered successfully",
            userId: newUser._id
        })
    } catch (error) {
        res.status(500).json({
            message:'registration failed',
            error: error.message
        })
    }
}

const loginUser = async (req,res) => {
    try {
        const {email,password} = req.body   
        
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message:"invalid email or password"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch){
            res.status(400).json({
                message:"invalid email or password"
            })
        }
    } catch (error) {
        
    }
}