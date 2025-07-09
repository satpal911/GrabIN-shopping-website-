import express from 'express'
import createDb from './database/db.js'
import cors from 'cors'
import dotenv from 'dotenv'
import route from './Routes/Blog.routes.js'
import userRoute from './Routes/user.routes.js'

dotenv.config()

const port = process.env.port
const app = express()

app.use(cors({
        origin:"http://localhost:5173",
        credentials:true
}))
app.use(express.json())
app.use('/api',userRoute)
app.use('/api/blog',route)

createDb()
.then(()=>{
        app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
})
.catch((error)=>{
        console.log(`server error ${error}`)
})


