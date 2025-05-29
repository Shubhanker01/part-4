const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const blogSchema = require('../models/blog.models')
const supertest = require('supertest')
const app = require('../index')
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

after(async () => {
    console.log("test is terminated")
    await mongoose.connection.close()
})
