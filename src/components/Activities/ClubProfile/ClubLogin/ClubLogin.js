import axios from 'axios'
import React, { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { toastConfig } from '../../../../utils/ToastConfig'

const CLUB_LOGIN_URL = "/clubs/login"

const ClubLogin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault();
        let data = { email, password }
        setLoading(true)
        axios.post(process.env.REACT_APP_DEPT_API + CLUB_LOGIN_URL, data).then((res) => {
            setLoading(false)
            let data = res.data
            // console.log(res, data)
            if (data.status === "ok" && data.club_token) {
                localStorage.setItem("user_id", data.id)
                localStorage.setItem("club_token", data.club_token)
                toast.success("Login sucessfull", toastConfig)
                navigate(`/clubs/${data.id}`)
            }
            else if (data.status === "error") {
                toast.error(data.error, toastConfig);
                setPassword('')
            } else {
                toast.error(data.error, toastConfig);
            }
        }).catch(err => {
            alert(err.message)
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

            <h1 className='section__header'>Club Login</h1>
            <div className='facultylogin-card'>
                <div className='row'>

                    <div className='col-6'>
                        <div className='facultylogin-form'>
                            <form onSubmit={submitHandler}>
                                <div>
                                    <label>
                                        <HiOutlineMail />
                                        <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <RiLockPasswordLine />
                                        <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
                                    </label>
                                </div>
                                <button className={loading ? "facultylogin-btn disabled-btn" : "facultylogin-btn"}
                                    type="submit">
                                    {loading ? "Logging in..." : "Log in"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubLogin