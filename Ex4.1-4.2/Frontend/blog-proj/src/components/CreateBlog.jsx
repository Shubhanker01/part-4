import React, { useState } from 'react'
import { createBlog } from '../services/blogs'

function CreateBlog({ id, toggleVisibility }) {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [url, setUrl] = useState("")

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let res = await createBlog(id, { title: title, author: author, url: url })
            console.log(res)
            alert(res.message)
            setTitle('')
            setAuthor('')
            setUrl('')
            toggleVisibility()
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" name='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <label>Author</label>
                <input type='text' value={author} onChange={(e) => setAuthor(e.target.value)} ></input>
                <br />
                <label>URL</label>
                <input type='text' value={url} onChange={(e) => setUrl(e.target.value)} ></input>
                <button>Submit</button>

            </form>
        </>
    )
}

export default CreateBlog