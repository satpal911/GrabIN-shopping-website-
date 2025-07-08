import express from 'express'
import createDb from './database/db.js'
import cors from 'cors'
const port = 4000
import route from './Routes/Blog.routes.js'
import userRoute from './Routes/user.routes.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api',userRoute)



createDb()
.then(()=>{
        app.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
})
.catch((error)=>{
        console.log(`server error ${error}`)
})


