const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const blogSchema = require('../models/blog.models')
const supertest = require('supertest')
const app = require('../index')
const assert = require('node:assert')
const api = supertest(app)

const initialBlogs = [
    {
        title: "my title",
        author: "author1",
        url: "http://author1blogs",
        likes: 299,
    },
    {
        title: "my title2",
        author: "author2",
        url: "http://author1blogs",
        likes: 399,
    },
]

beforeEach(async () => {
    await blogSchema.deleteMany({})
    let blogObject = new blogSchema(initialBlogs[0])
    await blogObject.save()
    blogObject = new blogSchema(initialBlogs[1])
    await blogObject.save()
})
test('notes are returned as json', async () => {
    await api.get('/blogs/api/getall')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

// test that verifies that the unique identifier property of the blog posts is named id
test('unique identifier of blog post is named id', async () => {
    let res = await api.get('/blogs/api/getall')
    let data = await res.body
    assert.strictEqual(typeof (data[0].id), 'string')
})

test('notes are added', async () => {
    const newBlog = {
        title: "my title3",
        author: "author3",
        url: "http://author1blogs",
        likes: 500,
    }
    await api.post('/blogs/api/create').send(newBlog).expect(201).expect('Content-Type', /application\/json/)

    const blogs = await api.get('/blogs/api/getall')
    const data = await blogs.body
    // also verify total no of blogs is increased by one
    assert.strictEqual(data.length, initialBlogs.length + 1)

})

test('delete single blog', async () => {
    let blogs = await blogSchema.find({})
    console.log(blogs)
    // delete the 3rd added blog
    await api.delete(`/blogs/api/delete/${blogs[1]._id}`).expect(204)
})

test('update a single blog', async () => {
    let updatedBlog = {
        title: "Updated title"
    }
    let blogs = await blogSchema.find({})
    await api.post(`/blogs/api/update/${blogs[1]._id}`).send(updatedBlog).expect(200)

})
after(async () => {
    console.log("test is terminated")
    await mongoose.connection.close()
})
