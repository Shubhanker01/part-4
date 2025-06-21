import axios from 'axios'

export const getAllBlogs = async () => {
    try {
        const res = await axios.get(`${import.meta.env.VITE_DEV}/blogs/api/getall`)
        const data = await res.data
        return data
    } catch (error) {
        console.log(error)
    }
}