import express from 'express'
const userRoute = express.Router()


import {registerUser,loginUser} from '../controllers/User.controllers.js'

userRoute.post('/register',registerUser)
userRoute.post('/login',loginUser)


export default userRoute