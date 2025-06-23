import React from 'react'

function Logout({ setSuccess }) {
    const handleLogout = () => {
        alert("You logged out")
        localStorage.removeItem('token')
        setSuccess(false)
    }
    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout