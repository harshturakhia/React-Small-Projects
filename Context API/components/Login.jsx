import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import '../style.css'

const Login = () => {

    const [username, setUsername] = useState('')
    const [passsword, setPassword] = useState('')

    const { setUser } = useContext(UserContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        setUser({ username, passsword })
    }

    return (
        <div>
            <h1>Login</h1>

            <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' />
            <input type="text" id='username' value={passsword} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />

            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login