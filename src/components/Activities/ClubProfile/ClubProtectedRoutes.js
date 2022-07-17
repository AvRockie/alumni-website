import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'

const CLUB_VERIFY_URL = "/clubs/verify"

function ClubProtectedRoutes() {
    const { id } = useParams()
    const [authed, setAuthed] = useState(false)
    async function checkAuth() {
        const clubToken = localStorage.getItem('club_token')
        if (!clubToken) {
            setAuthed(false)
            return
        }
        await axios.post(process.env.REACT_APP_DEPT_API + CLUB_VERIFY_URL, { id, club_token: clubToken }).then((res) => {
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

export default ClubProtectedRoutes