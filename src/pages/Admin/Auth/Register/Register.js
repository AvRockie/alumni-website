import axios from 'axios'
import React, { useState } from 'react'
import './Register.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPass, setShowPass] = useState(false)


    const toggleShowPass = () => {
        setShowPass(!showPass)}


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
            <h2>Register</h2>
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
                        <button className='admin_button_register'>Register</button>                    </form>
        </div>
    )
}

export default Register