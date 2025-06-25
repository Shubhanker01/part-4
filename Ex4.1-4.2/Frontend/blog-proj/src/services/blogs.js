import axios from 'axios'

const token = JSON.parse(localStorage.getItem('token'))
export const getAllBlogs = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_DEV}/blogs/api/getall`)
        const data = await res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const createBlog = async (id, { title, author, url }) => {
    try {
        const res = await axios.post(`${import.meta.env.VITE_DEV}/blogs/api/create/${id}`, {
            title: title,
            author: author,
            url: url
        }, {
            'headers': {
                Authorization: `Bearer ${token}`
            }
        })
        const data = await res.data
        return data
    } catch (error) {
        console.log(error)
    }
}

export const updateLikes = async (id) => {
    try {
        const res = await axios.put(`${import.meta.env.VITE_DEV}/blogs/api/like/${id}`)
        const data = await res.data
        return data
    } catch (error) {
        console.log(error)
    }
}