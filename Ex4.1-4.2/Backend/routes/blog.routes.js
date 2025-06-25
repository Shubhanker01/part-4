const express = require('express')
const router = express.Router()
const { createNewBlog, getAllBlogs, updateBlog, deleteSingleBlog, updateLikes } = require('../controllers/blogs.controller')
const { verifyToken } = require('../middleware/verifyJsonToken')

router.route('/create/:userId').post(verifyToken, createNewBlog)
router.route('/getall').get(getAllBlogs)
router.route('/update/:id').post(verifyToken, updateBlog)
router.route('/delete/:id').delete(verifyToken, deleteSingleBlog)
router.route('/like/:blogId').put(updateLikes)

module.exports = router