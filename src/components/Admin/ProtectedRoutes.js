import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const ADMIN_VERIFY_URL = '/admin/verify'

function ProtectedRoutes() {
    const [authed, setAuthed] = useState(false)
    async function checkAuth() {
        const adminToken = localStorage.getItem('token')
        if (!adminToken) {
            setAuthed(false)
            return
        }
        await axios.post(process.env.REACT_APP_DEPT_API + ADMIN_VERIFY_URL, { token: adminToken }).then((res) => {
            const data = res.data
            // console.log(data)
            if (data && data.status === 'ok') {
                setAuthed(true)
            } else {
                setAuthed(false)
            }
        })
    }
    useEffect(() => {
        checkAuth()
    }, [])
    return (
        authed ? <Outlet /> : <h3>Access Denied</h3>
    )
}

export default ProtectedRoutes