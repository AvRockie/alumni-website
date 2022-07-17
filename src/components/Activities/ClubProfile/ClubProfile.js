import React, { useState, useEffect } from 'react'
// import slugify from 'slugify'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { MdOutlineMail } from "react-icons/md";
import { BsGlobe2, BsShieldLock } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { FiInstagram, FiLinkedin, FiYoutube, FiTwitter, FiEdit, FiLogOut } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from '../../../utils/ToastConfig';

import './ClubProfile.css'
import ClubTeam from './ClubTeam/ClubTeam';

const CLUB_URL = '/clubs'
const CLUB_VERIFY_URL = '/clubs/verify'

function ClubProfile() {

    const [section, setSection] = useState(1)
    const [isAuthedUser, setIsAuthedUser] = useState(false)
    const [club, setClub] = useState('')

    const { id } = useParams()
    useEffect(() => {
        async function getClubs() {
            try {
                const response = await axios.get(process.env.REACT_APP_DEPT_API + CLUB_URL + '/' + id);
                setClub(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getClubs()
        // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        checkAuth()
        // eslint-disable-next-line 
    }, [club])

    async function checkAuth() {
        const clubToken = localStorage.getItem('club_token')
        const id = localStorage.getItem('user_id')
        if (!clubToken) {
            setIsAuthedUser(false)
            return
        }
        if (!club) {
            return
        }
        await axios.post(process.env.REACT_APP_DEPT_API + CLUB_VERIFY_URL, { id, club_token: clubToken }).then((res) => {
            const data = res.data
            if (data && data.status === 'ok') {
                setIsAuthedUser(true)
            } else {
                setIsAuthedUser(false)
            }
        })
    }
    const renderIcon = (title) => {
        if (title === 'Instagram')
            return <FiInstagram className='cpc_socialIcon' />
        else if (title === 'Linkedin')
            return <FiLinkedin className='cpc_socialIcon' />
        else if (title === 'Youtube')
            return <FiYoutube className='cpc_socialIcon' />
        else if (title === 'Twitter')
            return <FiTwitter className='cpc_socialIcon' />
        else if (title === 'Discord')
            return <FiInstagram className='cpc_socialIcon' />
        else if (title === 'Medium')
            return <FiInstagram className='cpc_socialIcon' />
    }

    const logout = () => {
        const authToken = localStorage.getItem('club_token')
        const user_id = localStorage.getItem('user_id')
        if (!authToken || !user_id) {
            toast.error("not logged in", toastConfig)
        } else {
            localStorage.removeItem('club_token')
            localStorage.removeItem('user_id')
            toast.success("successfully logged out", toastConfig)
            checkAuth()
        }
    }

    return (
        <div className='clubProfile'>
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
            <div className='section__container'>
                {isAuthedUser ?
                    <div className='clubprofile-authed-container'>
                        <h1 className='section__header'>Club Profile</h1>
                        <div >
                            <Link to='update'>
                                <button className='clubprofile-authed-edit-btn'><FiEdit />Edit Your Profile</button>
                            </Link>
                            <Link to='change-password'>
                                <button className='clubprofile-authed-pass-btn'><BsShieldLock />Change Password</button>
                            </Link>
                            <button onClick={logout} className='clubprofile-authed-logout-btn'>
                                <FiLogOut />Logout</button>
                        </div>
                    </div> :
                    <div className='section'>
                        <h1 className='section__header'>Club Profile</h1>
                    </div>
                }


                <div className='clubProfile__container'>
                    <div className='clubProfile__header'>
                        <div className='cph__left'>
                            <div className='cph__left_img'>
                                <img src={club && club.logo} alt='' />
                            </div>
                        </div>
                        <div className='cph__right'>
                            <h1>{club && club.name}</h1>
                            <p>{club && club.description}</p>
                        </div>
                    </div>
                    <div className='clubProfile__content'>
                        <div className='cpc__left'>
                            <div className='cpc__left_section'>
                                <h3>Contact</h3>
                                <div className='cpc__left_links'>
                                    <MdOutlineMail color='#555555' />
                                    <a href={`mailto:${club && club.contact_email}`}>{club && club.contact_email}</a>
                                </div>
                                {club && club.website && (
                                    <div className='cpc__left_links'>
                                        <BsGlobe2 color='#555555' />
                                        <a target="_blank" rel='noreferrer' href='tle.mec.ac.in'>tle.mec.ac.in</a>
                                    </div>
                                )}
                            </div>
                            <div className='cpc__left_section'>
                                <h3>Social Media</h3>
                                <div className='cpc__left_social'>
                                    {club && club.social_media_handles.map((social, id) => (
                                        <a href={social.link} target="_blank" rel="noreferrer" key={id}>
                                            <div className='cpc_icon_contaner'>
                                                {renderIcon(social.title)}
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='cpc__right'>
                            <div className='cpc__right_header'>
                                <h6 style={{ fontWeight: section === 1 ? 600 : 300, borderBottom: section === 1 ? '2px solid #AE9142' : 'none' }} onClick={() => setSection(1)}>Team</h6>
                                <h6 style={{ fontWeight: section === 2 ? 600 : 300, borderBottom: section === 2 ? '2px solid #AE9142' : 'none' }} onClick={() => setSection(2)}>Events</h6>
                                <h6 style={{ fontWeight: section === 3 ? 600 : 300, borderBottom: section === 3 ? '2px solid #AE9142' : 'none' }} onClick={() => setSection(3)}>Resources</h6>
                            </div>
                            <div className='cpc__right_content'>
                                {club &&
                                    <ClubTeam
                                        faculty_email={club.faculty_email}
                                        faculty_in_charge={club.faculty_in_charge}
                                        student_designation={club.student_designation}
                                        student_email={club.student_email}
                                        student_in_charge={club.student_in_charge}
                                        core_team={club.core_team}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClubProfile