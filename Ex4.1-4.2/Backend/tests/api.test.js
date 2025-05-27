const { test, after } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const api = supertest(app)

test('notes are returned as json', async () => {
    await api.get('/blogs/api/getall')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

after(async () => {
    console.log("test is terminated")
    await mongoose.connection.close()
})
