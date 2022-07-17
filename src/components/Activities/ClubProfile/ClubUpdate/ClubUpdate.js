import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './ClubUpdate.css'
import { FaSave, FaTrashAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from '../../../../utils/ToastConfig'

const CLUB_URL = '/clubs/'

const ClubUpdate = () => {
    let { id } = useParams();
    const navigate = useNavigate()
    const [club, setClub] = useState(null)
    const [gettingdata, setGettingdata] = useState(false)
    const [clubToken, setClubToken] = useState('')
    const getClub = async () => {
        setGettingdata(true)
        try {
            const response = await axios.get(process.env.REACT_APP_DEPT_API + CLUB_URL + '/' + id)
            // console.log(response.data)
            setClub(response.data)
            setGettingdata(false)

        } catch (err) {
            toast.error(err, toastConfig)
        }
    }
    useEffect(() => {
        async function checkAccess() {
            const clubToken = localStorage.getItem('club_token')
            const clubId = localStorage.getItem('user_id')
            if (!clubToken || clubId !== id) {
                alert('Acess denied')
                navigate('/')
            }
            setClubToken(clubToken)
        }
        checkAccess()
        getClub()
        // eslint-disable-next-line
    }, [])
    return (
        <div className='cpu-main-container'>
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
            <h1 className='section__header'>Update Profile</h1>
            {!gettingdata && club ?
                <div>
                    <Formik
                        initialValues={club}
                        enableReinitialize={true}
                        onSubmit={async (data) => {
                            const formData = new FormData()
                            for (let key in data) {
                                if (typeof (data[key]) === 'object') {
                                    formData.append(key, JSON.stringify(data[key]))
                                } else {
                                    formData.append(key, data[key])
                                }
                            }
                            formData.append('club_logo', data.club_logo)
                            axios.put(process.env.REACT_APP_DEPT_API + CLUB_URL + id + '/auth/update', formData, {
                                headers: {
                                    Authorization: `Bearer ${clubToken}`
                                }
                            }).then(() => {
                                toast.success("Profile Updated", toastConfig)
                                setTimeout(() => {
                                    navigate(`/clubs/${id}`)
                                }, 2500)
                            }).catch(err => {
                                alert(err.response.data.message)
                            })
                        }}
                    >
                        {({ values, setFieldValue }) => (
                            <Form>
                                <div>
                                    <button type="submit" className='fpu-submit-btn'>
                                        <FaSave /> Save Changes
                                    </button>
                                </div>
                                <div className='cpu-container'>
                                    <div className='cpu-col1'>
                                        <div className='cpu-card cpu-personal-card'>
                                            <h2>Club Details</h2>
                                            <div className='cpu-personal-card-img'>
                                                <div>
                                                    <img src={club && club.logo} alt="logo" />
                                                </div>
                                                <div className='cpu-personal-card-img-col2'>
                                                    <p htmlFor="photo">Change Logo</p>
                                                    <label className='cpu-file-btn'>
                                                        <input id="file" name="club_logo" type="file" onChange={(event) => {
                                                            setFieldValue("club_logo", event.currentTarget.files[0]);
                                                        }} />
                                                    </label>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="name">Name</label>
                                                <Field name="name" placeholder="name" />
                                            </div>

                                            <div>
                                                <label htmlFor="email">Email</label>
                                                <Field name="email" type="email" disabled={!gettingdata} />
                                            </div>

                                            <div>
                                                <label htmlFor="description">Description</label>
                                                <Field as="textarea" name="description" />
                                            </div>
                                            <div>
                                                <label htmlFor="faculty_in_charge">Faculty in-charge</label>
                                                <Field name="faculty_in_charge" />
                                            </div>
                                            <div>
                                                <label htmlFor="faculty_email">Faculty email</label>
                                                <Field type="email" name="faculty_email" />
                                            </div>
                                            <div>
                                                <label htmlFor="contact_email">Contact email for club</label>
                                                <Field name="contact_email" />
                                            </div>
                                            <div>
                                                <label htmlFor="website">Website</label>
                                                <Field name="website" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cpu-col2'>
                                        <div className='cpu-card cpu-team-card'>
                                            <h2>Team Details</h2>
                                            <div>
                                                <label htmlFor="student_in_charge">Name of Student lead</label>
                                                <Field name="student_in_charge" />
                                            </div>
                                            <div>
                                                <label htmlFor="student_designation">Designation of Student lead</label>
                                                <Field name="student_designation" />
                                            </div>

                                            <div>
                                                <label htmlFor="student_email">Email of student lead</label>
                                                <Field name="student_email" />
                                            </div>
                                            <div>
                                                <h3>Core Team members (Add in heirarchical order)</h3>
                                                <FieldArray name="core_team">
                                                    {({ insert, remove, push }) => (
                                                        <div>
                                                            {values.core_team && values.core_team.length > 0 &&
                                                                values.core_team.map((member, index) => (
                                                                    <div className="cpu-sub-row" key={index}>
                                                                        <div className="cpu-sub-row-col">
                                                                            <div>
                                                                                <label htmlFor={`core_team.${index}.name`}>Name</label>
                                                                            </div>
                                                                            <Field
                                                                                name={`core_team.${index}.name`}
                                                                                type="text"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`core_team.${index}.name`}
                                                                                component="div"
                                                                                className="field-error"
                                                                            />
                                                                        </div>
                                                                        <div className="col">
                                                                            <div>
                                                                                <label htmlFor={`core_team.${index}.designation`}>Designation</label>
                                                                            </div>
                                                                            <Field
                                                                                name={`core_team.${index}.designation`}
                                                                                type="text"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`core_team.${index}.name`}
                                                                                component="div"
                                                                                className="field-error"
                                                                            />
                                                                        </div>
                                                                        <div className="col">
                                                                            <button
                                                                                type="button"
                                                                                className="secondary"
                                                                                onClick={() => remove(index)}
                                                                            >
                                                                                <FaTrashAlt />
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            <button
                                                                type="button"
                                                                className="cpu-add-btn"
                                                                onClick={() => push({ name: '', designation: '' })}
                                                            >
                                                                Add Member
                                                            </button>
                                                        </div>
                                                    )}
                                                </FieldArray>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='cpu-col3'>
                                        <div className='cpu-card'>
                                            <h2>Social Media Links</h2>
                                            <FieldArray name="social_media_handles">
                                                {({ insert, remove, push }) => (
                                                    <div>
                                                        {values.social_media_handles && values.social_media_handles.length > 0 &&
                                                            values.social_media_handles.map((sm, index) => (
                                                                <div className="cpu-sm-sub-row" key={index}>
                                                                    <div className='cpu-sm-sub-row-col'>
                                                                        <div>
                                                                            <label htmlFor={`social_media_handles.${index}.title`}>Site</label>
                                                                            <Field as="select"
                                                                                name={`social_media_handles.${index}.title`}
                                                                                type="text"
                                                                            >
                                                                                <option value="" disabled>select</option>
                                                                                <option value="Instagram">
                                                                                    Instagram
                                                                                </option>
                                                                                <option value="Linkedin">
                                                                                    LinkedIn
                                                                                </option>
                                                                                <option value="Youtube">
                                                                                    Youtube
                                                                                </option>
                                                                                <option value="Twitter">
                                                                                    Twitter
                                                                                </option>
                                                                                <option value="Medium">
                                                                                    Medium
                                                                                </option>
                                                                                <option value="Discord">
                                                                                    Discord
                                                                                </option>
                                                                            </Field>
                                                                            <ErrorMessage
                                                                                name={`social_media_handles.${index}.title`}
                                                                                component="div"
                                                                                className="field-error"
                                                                            />
                                                                        </div>
                                                                        <div className="col">
                                                                            <label htmlFor={`social_media_handles.${index}.link`}>Link</label>
                                                                            <Field
                                                                                name={`social_media_handles.${index}.link`}
                                                                                type="text"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`social_media_handles.${index}.link`}
                                                                                component="div"
                                                                                className="field-error"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='cpu-sm-sub-row-col'>
                                                                        <button
                                                                            type="button"
                                                                            className="secondary"
                                                                            onClick={() => remove(index)}
                                                                        >
                                                                            <FaTrashAlt />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        <button
                                                            type="button"
                                                            className="cpu-add-btn "
                                                            onClick={() => push({ title: '', link: '' })}
                                                        >
                                                            Add Link
                                                        </button>
                                                    </div>
                                                )}
                                            </FieldArray>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>
                : <p>Loading...</p>}
        </div>
    )
}

export default ClubUpdate