const blogSchema = require('../models/blog.models')

const createNewBlog = async (req, res) => {
    try {
        if (req.user === undefined) return;
        let { userId } = req.params
        let { title, author, url } = req.body
        if (!title || !author || !url) {
            return res.status(404).send("Please enter full information")
        }
        await blogSchema.create({
            title: title,
            author: author,
            url: url,
            user: userId,
            likes: 0
        })
        return res.status(201).json({ message: "Successfully added" })
    } catch (error) {
        console.log(error)
    }
}

const getAllBlogs = async (req, res) => {
    try {
        let blogs = await blogSchema.find({}).populate('user')
        return res.json(blogs)
    } catch (error) {
        console.log(error)
    }
}

// delete a blog
const deleteSingleBlog = async (req, res) => {
    try {
        if (req.user === undefined) return;
        let id = req.params.id
        await blogSchema.deleteOne({ _id: id })
        return res.status(204).json({ message: "Successfully deleted!!!" })
    } catch (error) {
        console.log(error)
    }
}

// update a blog
const updateBlog = async (req, res) => {
    try {
        if (req.user === undefined) return;
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

const updateLikes = async (req, res) => {
    try {
        let { blogId } = req.params
        if (!blogId) {
            return res.status(400).json({ message: "No id given for blog" })
        }
        let data = await blogSchema.findOne({ _id: blogId })
        if (!data) {
            return res.status(400).json({ message: "Invalid Id" })
        }
        data.likes = data.likes + 1
        await data.save()
        return res.status(200).json({ message: "You liked the post" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = { createNewBlog, getAllBlogs, deleteSingleBlog, updateBlog, updateLikes }
