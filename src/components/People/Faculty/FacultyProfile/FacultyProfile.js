import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { BsEnvelope, BsShieldLock, BsTelephone } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import './FacultyProfile.css'
import { toastConfig } from '../../../../utils/ToastConfig';
import { FiEdit, FiLogOut } from 'react-icons/fi';

const FACULTY_URL = '/faculty'
const FACULTY_VERIFY_URL = '/faculty/verify'

function FacultyProfile() {

    let { id } = useParams();

    const [faculty, setFaculty] = useState()
    const [isAuthedUser, setIsAuthedUser] = useState(false)
    async function checkAuth() {
        const facultyToken = localStorage.getItem('faculty_token')
        if (!facultyToken) {
            setIsAuthedUser(false)
            return
        }
        await axios.post(process.env.REACT_APP_DEPT_API + FACULTY_VERIFY_URL, { id, faculty_token: facultyToken }).then((res) => {
            const data = res.data
            // console.log(data)
            if (data && data.status === 'ok') {
                setIsAuthedUser(true)
            } else {
                setIsAuthedUser(false)
            }
        })
    }
    useEffect(() => {
        async function getFaculties() {
            try {
                const response = await axios.get(process.env.REACT_APP_DEPT_API + FACULTY_URL + '/' + id);
                setFaculty(response.data);
                checkAuth()
            } catch (error) {
                console.error(error);
            }
        }
        getFaculties()
        // eslint-disable-next-line
    }, [id])

    const logout = () => {
        const authToken = localStorage.getItem('faculty_token')
        const user_id = localStorage.getItem('user_id')
        if (!authToken || !user_id) {
            toast.error("not logged in", toastConfig)
        } else {
            localStorage.removeItem('faculty_token')
            localStorage.removeItem('user_id')
            toast.success("successfully logged out", toastConfig)
            checkAuth()
        }
    }

    return (
        <div className='facultyProfile'>
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
                    <div className='fp-authed-container'>
                        <h1 className='section__header'>Faculty Profile</h1>
                        <div >
                            <Link to='update'>
                                <button className='fp-authed-edit-btn'><FiEdit />Edit Your Profile</button>
                            </Link>
                            <Link to='change-password'>
                                <button className='fp-authed-pass-btn'><BsShieldLock />Change Password</button>
                            </Link>
                            <button onClick={logout} className='fp-authed-logout-btn'>
                                <FiLogOut />Logout</button>
                        </div>
                    </div> :
                    <div className='section'>
                        <h1 className='section__header'>Faculty Profile</h1>
                    </div>
                }
                <div className='section'>
                    <div className='fp__container'>
                        <div className='fp__header'>
                            {faculty && (
                                <img src={faculty.photo} alt="" />
                            )}
                            <div className='fp__header_content'>
                                <h1>{faculty && faculty.name}</h1>
                                <p>{faculty && faculty.designation}</p>

                                <h3 className='fp__header_badge'>KTU id <span>{faculty && faculty.ktu_id}</span></h3>
                            </div>
                        </div>
                        <div className='fp__content'>
                            <div className='fp__contentLeft'>
                                <div className='fp_section'>
                                    <h3>Courses Handled</h3>
                                    <div className='fp_div'>
                                        {faculty && faculty.courses_handled.map((item, id) => (
                                            <li key={id}>{item}</li>
                                        ))}
                                    </div>
                                </div>
                                <div className='fp_section'>
                                    <h3>AREAS OF INTEREST</h3>
                                    <div className='fp_div'>
                                        {faculty && faculty.areas_of_interest.map((item, id) => (
                                            <li key={id}>{item}</li>
                                        ))}
                                    </div>
                                </div>
                                <div className='fp_section'>
                                    <h3>Qualifications</h3>
                                    <div className='fp_div'>
                                        {faculty && faculty.qualifications.map((item, id) => (
                                            <li key={id}>{item}</li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='fp__contentRight'>
                                <div className='fp_links_div'>
                                    <h3>Contact Info</h3>
                                    <a className='fp_single_link' href={`tel:${faculty && faculty.contact_no}`}>
                                        <BsTelephone />
                                        {faculty && faculty.contact_no}
                                    </a>
                                    <a className='fp_single_link' href={`mailto:${faculty && faculty.email}`}>
                                        <BsEnvelope />
                                        {faculty && faculty.email}
                                    </a>
                                </div>
                                <div className='fp_links_div'>
                                    <h3>Additional Links</h3>

                                    <a className='fp_additional_link' href='/'>
                                        Python Blog
                                    </a>
                                    <a className='fp_additional_link' href='/'>
                                        Linkedin
                                    </a>
                                    <a className='fp_additional_link' href='/'>
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FacultyProfile