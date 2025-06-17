const blogSchema = require('../models/blog.models')

const createNewBlog = async (req, res) => {
    try {
        let { title, author, url } = req.body
        if (!title || !author || !url) {
            return res.status(404).send("Please enter full information")
        }
        await blogSchema.create({
            title: title,
            author: author,
            url: url,
            likes: 0
        })
        return res.status(201).send("Your blog is successfully created")
    } catch (error) {
        console.log(error)
    }
}

const getAllBlogs = async (req, res) => {
    try {
        let blogs = await blogSchema.find({})
        return res.json(blogs)
    } catch (error) {
        console.log(error)
    }
}
module.exports = { createNewBlog, getAllBlogs }
