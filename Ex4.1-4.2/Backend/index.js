require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDb = require('./db/db')
const PORT = 3000
app.use(express.json())
app.use(cors())
const blogRouter = require('./routes/blog.routes')
const userRouter = require('./routes/user.routes')

app.use('/user/api',userRouter)
app.use('/blogs/api', blogRouter)

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})


connectToDb()
module.exports = app
