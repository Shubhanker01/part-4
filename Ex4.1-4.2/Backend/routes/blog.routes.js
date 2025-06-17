const express = require('express')
const router = express.Router()
const { createNewBlog, getAllBlogs, updateBlog, deleteSingleBlog } = require('../controllers/blogs.controller')

router.route('/create').post(createNewBlog)
router.route('/getall').get(getAllBlogs)
router.route('/update/:id').post(updateBlog)
router.route('/deleteblog/:id').delete(deleteSingleBlog)

module.exports = router