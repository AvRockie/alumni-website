import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        let data = { email, password }
        axios.post(process.env.REACT_APP_ADMIN_LOGIN, data).then((res) => {
            let data = res.data
            console.log(res, data)
            if (data.status === "ok" && data.token) {
                localStorage.setItem("token", data.token)
                alert("Login sucessful")
                setEmail('')
                setPassword('')
            }
            else if (data.status === "error") {
                alert(data.error)
                setPassword('')
            } else {
                alert("Something went wrong")
            }
        }).catch(err => {
            alert(err.message)
        })
    }

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={submitHandler}>
                <label>
                    <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login