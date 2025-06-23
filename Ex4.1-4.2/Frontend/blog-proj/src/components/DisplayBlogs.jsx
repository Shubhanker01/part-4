import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '../services/blogs'

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

                            <p>Title {blog.title}</p>

                            <p>Author {blog.author}</p>

                            <p>Likes {blog.likes}</p>
                        </div>

                    )
                })
            }
        </>
    )
}

export default DisplayBlogs