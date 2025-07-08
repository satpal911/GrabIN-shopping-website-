import express from 'express'
const userRoute = express.Router()


import {registerUser} from '../controllers/User.controllers.js'

userRoute.post('/register',registerUser)


export default userRoute