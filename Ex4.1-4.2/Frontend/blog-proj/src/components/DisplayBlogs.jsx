import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '../services/blogs'
import Toggleable from './Toggleable'
import Blog from './Blog'

function DisplayBlogs() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        async function getBlogs() {
            let data = await getAllBlogs()
            console.log(data)
            setBlogs(data)
        }
        getBlogs()

    }, [])
    return (
        <>
            <h1>Blogs</h1>
            {
                blogs.map((blog) => {
                    return (
                        <div key={blog.id}>
                            <Blog title={blog.title} author={blog.author} likes={blog.likes} url={blog.url} id={blog.id}></Blog>
                        </div>
                    )
                })
            }
        </>
    )
}

export default DisplayBlogs