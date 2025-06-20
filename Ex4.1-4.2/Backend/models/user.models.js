const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        minlength: 3
    }
})

const Users = mongoose.model('users', userSchema)
module.exports = Users
