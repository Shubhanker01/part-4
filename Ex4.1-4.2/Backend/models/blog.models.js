const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema({
    title: String,
    author: String,
    url: String,
    likes: Number,
}, {
    toJSON: {
        virtuals: true,
        transform: function (doc, ret) {
            delete ret._id;
        }
    }
})

blogSchema.virtual('id').get(function () {
    return this._id.toHexString()
})

module.exports = mongoose.model('blogs', blogSchema)