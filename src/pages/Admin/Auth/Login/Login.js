import axios from 'axios'
import React, { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)

    const toggleShowPass = () => {
        setShowPass(!showPass)
    }

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
        <div className="admin_container">
            <h2>Login</h2>
            <form onSubmit={submitHandler} className="admin_form_container">
                        <div className='admin_input_container'>
                            <label className='admin_label'>Email</label>
                            <input className='admin_input' type="email" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className='admin_input_container'>
                            <label className='admin_label'>Password</label>
                            <input className='admin_input' type={showPass ? 'text' : 'password'} placeholder="***" value={password} onChange={e => setPassword(e.target.value)} />
                            {showPass ? <BsEye className='admin_input_eye' onClick={toggleShowPass}/> : <BsEyeSlash className='admin_input_eye' onClick={toggleShowPass}/>}
                        </div>
                        <button className='admin_button_login'>Login</button>                    </form>
        </div>
    )
}

export default Login