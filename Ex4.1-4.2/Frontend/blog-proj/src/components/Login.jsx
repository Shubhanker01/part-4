import React, { useState } from 'react'
import { userLogin } from '../services/userAuth'
import DisplayBlogs from './DisplayBlogs'
import Logout from './Logout'
import decodetoken from '../utils/decodeToken'
import CreateBlog from './CreateBlog'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [name, setName] = useState('')
    const [id, setId] = useState('')
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const data = await userLogin(username, password)
            if (data !== undefined) {
                window.localStorage.setItem('token', JSON.stringify(data.token))
                alert("Successfully logged in!!!!")
                setSuccess(true)
                setName(decodetoken().name)
                setId(decodetoken().id)
            }
            else {
                // alert("Some error occured")
                console.log("Some error occured")
            }
            setUsername('')
            setPassword('')
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='text'>Username</label>
                <input type="text" name='text' value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label htmlFor='password'>Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='password'></input>
                <br />
                <button>Submit</button>
            </form>
            {
                success == true ? <>
                    <p>{name} is currently logged in</p>
                    <Logout setSuccess={setSuccess} />
                    <CreateBlog id={id} />
                    <DisplayBlogs />
                </> : <></>
            }

        </>
    )
}

export default Login