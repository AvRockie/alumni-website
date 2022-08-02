import axios from 'axios'
import React, { useState } from 'react'
import './Register.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const Register = () => {
    const [fullname,setFname] = useState('')
    const[className, setClassname] = useState('')
    const[Rollno,setRollno] = useState('')
    const[YOP,setYOP] = useState('')
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
                            <label className='admin_label'>Name</label>
                            <input className='admin_input' type="fname" placeholder='John Doe' value={fullname} onChange={e => setFname(e.target.value)} />
                        </div>

                        <div className='admin_input_container'>
                            <label className='admin_label'>Class</label>
                            <select className='admin_input' id="admin_input" name="admin_label" placeholder='Select your class'>
                            <input type="text" placeholder='Select your class'/>
                            <option value="CSA">CSA</option>
                            <option value="CSB">CSB</option>
                            <option value="ECA">ECA</option>
                            <option value="ECB">ECB</option>
                            <option value="EEE">EEE</option>
                            <option value="EBE">EBE</option>
                            <option value="MECH">MECH</option>
                            </select>

                        </div>



                        <div className='admin_input_container'>
                            <label className='admin_label'>Faculty</label>
                            <select className='admin_input' id="admin_input" name="admin_label" >
                            <input type="text" placeholder='Faculty Y/N'/>
                            <option value="false">No</option>
                            <option value="true">Yes</option>
                            </select>

                        </div>


                        <div className='admin_input_container'>
                            <label className='admin_label'>Roll No</label>
                            <input className='admin_input' type="string" placeholder='10' value={Rollno} onChange={e => setRollno(e.target.value)} />
                        </div>
                        <div className='admin_input_container'>
                            <label className='admin_label'>Year of Passing</label>
                            <input className='admin_input' type="string" placeholder='2019' value={YOP} onChange={e => setYOP(e.target.value)} />
                        </div>

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