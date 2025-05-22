require('dotenv').config()
const express = require('express')
const app = express()
const connectToDb = require('./db/db')
const PORT = 3000
app.use(express.json())
const blogRouter = require('./routes/blog.routes')

app.use('/blogs/api', blogRouter)

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})

connectToDb()
