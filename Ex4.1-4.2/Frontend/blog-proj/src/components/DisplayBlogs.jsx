import React, { useEffect } from 'react'
import { getAllBlogs } from '../services/blogs'

function DisplayBlogs() {

    useEffect(() => {
        async function getBlogs() {
            let data = await getAllBlogs()
            console.log(data)
        }
        getBlogs()

    }, [])
    return (
        <>
            <h1>Blogs</h1>

        </>
    )
}

export default DisplayBlogs