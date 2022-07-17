import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        let data = { email, password }
        axios.post(process.env.REACT_APP_ADMIN_REGISTER, data).then(() => {
            alert("Registered sucessfully")
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <div>
            <h3>Register Admin</h3>
            <form onSubmit={submitHandler}>
                <label>
                    <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register