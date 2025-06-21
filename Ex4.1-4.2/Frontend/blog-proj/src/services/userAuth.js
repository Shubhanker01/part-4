import axios from 'axios'

export const userLogin = async (username, password) => {
    try {
        let res = await axios.post(`${import.meta.env.VITE_DEV}/user/api/login`, {
            username: username,
            password: password
        })

        let data = await res.data
        return data
    } catch (error) {
        console.log(error)
        alert(error.response.data.message)
    }
}