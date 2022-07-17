import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from '../../../utils/ToastConfig'
import { useNavigate } from 'react-router-dom';

const FACULTY_URL = '/faculty/'

const FacultyChangePassword = () => {
    const [firstPassword, setFirstPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const faculty_token = localStorage.getItem('faculty_token')
    const id = localStorage.getItem('user_id')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstPassword !== confirmedPassword) {
            toast.error("Passwords don't match", toastConfig)
            setFirstPassword('')
            setConfirmedPassword('')
            return
        }
        if (firstPassword.length < 6) {
            toast.error("Password must have atleast 6 characters", toastConfig)
            setFirstPassword('')
            setConfirmedPassword('')
            return
        }
        let data = { newpassword: confirmedPassword, faculty_token }
        axios.put(process.env.REACT_APP_DEPT_API + FACULTY_URL + id + '/auth/change-password', data, {
            headers: {
                Authorization: `Bearer ${faculty_token}`
            }
        }).then(res => {
            toast.success("Password changed successfuly", toastConfig)
            setTimeout(() => {
                navigate(`/faculty/${id}`)
            }, 3000)
        }).catch(err => {
            toast.error(err.message, toastConfig)
        })

    }

    return (
        <div className='section__container'>
            <ToastContainer
                position="bottom-right"
                autoClose={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="colored"
            />
            <h1 className='section__header'>Update Password</h1>
            {faculty_token ?
                <div className='change-password-card'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>
                                <input
                                    name="password"
                                    type="text"
                                    placeholder='new password'
                                    required
                                    onChange={(e) => setFirstPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    name="password"
                                    type="text"
                                    placeholder='confirm password'
                                    required
                                    onChange={(e) => setConfirmedPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div> : <p>Access denied - You are not logged in</p>}
        </div>
    )
}

export default FacultyChangePassword
