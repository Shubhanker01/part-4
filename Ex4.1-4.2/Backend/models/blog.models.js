const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
})

module.exports = mongoose.model('blogs', blogSchema)