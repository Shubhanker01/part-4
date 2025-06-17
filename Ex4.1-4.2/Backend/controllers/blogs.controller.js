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
        return res.status(201).json({ message: "Successfully added" })
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

// delete a blog
const deleteSingleBlog = async (req, res) => {
    try {
        let id = req.params.id
        await blogSchema.deleteOne({ _id: id })
    } catch (error) {
        console.log(error)
    }
}

// update a blog
const updateBlog = async (req, res) => {
    try {
        let { title, author, url } = req.body
        let id = req.params.id
        let data = await blogSchema.findOne({ _id: id })
        if (!data) {
            return res.status(400).json({ error: "Invalid id" })
        }
        await blogSchema.findOneAndUpdate({ _id: id }, {
            title: title !== undefined ? title : data.title,
            author: author !== undefined ? author : data.author,
            url: url !== undefined ? url : data.url
        })
        return res.json({ message: "Successfully updated" })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createNewBlog, getAllBlogs, deleteSingleBlog, updateBlog }
