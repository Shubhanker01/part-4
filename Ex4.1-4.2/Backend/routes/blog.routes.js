const express = require('express')
const router = express.Router()
const { createNewBlog, getAllBlogs } = require('../controllers/blogs.controller')

router.route('/create').post(createNewBlog)
router.route('/getall').get(getAllBlogs)
module.exports = router