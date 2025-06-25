import React, { useState } from 'react'
import Toggleable from './Toggleable'
import { updateLikes } from '../services/blogs'

function Blog({ title, author, likes, url, id }) {
    const [displayBlogVisible, setDisplayBlogVisible] = useState(false)
    const toggleBlogVisibility = () => {
        setDisplayBlogVisible(!displayBlogVisible)
    }
    const updateLike = async () => {
        try {
            const data = await updateLikes(id)
            alert(data.message)
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

            </div>
        </>
    )
}

export default Blog