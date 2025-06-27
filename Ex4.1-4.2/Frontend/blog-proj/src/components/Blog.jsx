import React, { useState } from 'react'
import Toggleable from './Toggleable'
import { updateLikes, deleteBlog } from '../services/blogs'
import decodetoken from '../utils/decodeToken'

function Blog({ title, author, likes, url, id, blogs, setBlogs, createrId }) {
    const [displayBlogVisible, setDisplayBlogVisible] = useState(false)
    const user = decodetoken()
    const toggleBlogVisibility = () => {
        setDisplayBlogVisible(!displayBlogVisible)
    }
    const updateLike = async () => {
        try {
            const data = await updateLikes(id)
            alert(data.message)
            setBlogs(blogs.map(blog => {
                if (blog.id == id) {
                    blog.likes++;
                }
                return blog
            })

            )
        } catch (error) {
            console.log(error)
        }
    }
    const removeBlog = async (id) => {
        try {
            let userConfirm = window.confirm(`Remove blog ${title}`)
            if (userConfirm) {
                let data = await deleteBlog(id)
                window.alert(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='blog'>
                <p>Title {title}</p>
                <Toggleable toggleVisibility={toggleBlogVisibility} buttonLabel={"view"} visible={displayBlogVisible}>
                    <p>Author {author}</p>
                    <p>URL: {url}</p>
                    <p>Likes {likes}</p>
                    <button onClick={updateLike}>Like</button>
                </Toggleable>
                {
                    createrId == user.id ? <>
                        <button onClick={() => { removeBlog(id) }}>Remove</button>
                    </> : <></>
                }

            </div>
        </>
    )
}

export default Blog