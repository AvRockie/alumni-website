import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'

const FACULTY_VERIFY_URL = '/faculty/verify'

function FacultyProtectedRoutes() {
    const { id } = useParams()
    const [authed, setAuthed] = useState(false)
    async function checkAuth() {
        const facultyToken = localStorage.getItem('faculty_token')
        if (!facultyToken) {
            setAuthed(false)
            return
        }
        await axios.post(process.env.REACT_APP_DEPT_API + FACULTY_VERIFY_URL, { id, faculty_token: facultyToken }).then((res) => {
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
        // eslint-disable-next-line
    }, [])
    return (
        authed ? <Outlet /> : <h3>Access Denied</h3>
    )
}

export default FacultyProtectedRoutes