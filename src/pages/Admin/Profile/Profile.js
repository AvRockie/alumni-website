import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logoutHelper } from '../Auth/Logout';

const Profile = () => { // eslint-disable-next-line
    const [authToken, setAuthToken] = useState(localStorage.getItem('token'))
    const navigate = useNavigate();
    useEffect(() => {
        async function getProfile() {
            try {
                const response = await axios.get(process.env.REACT_APP_ADMIN_PROFILE, {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                console.log(response.data)
            } catch (error) {
                alert(error.response.data.message)
                navigate('/')
            }
        }
        getProfile()
        // eslint-disable-next-line 
    }, [authToken])

    const logout = () => {
        let message = logoutHelper()
        alert(message)
        navigate('/')
    }

    return (
        <div>
            <h3>Admin profile</h3>
            {authToken && <button onClick={logout}>Logout</button>}
        </div>
    )
}

export default Profile