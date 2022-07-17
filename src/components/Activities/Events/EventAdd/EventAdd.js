import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, FieldArray } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FaSave } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from '../../../../utils/ToastConfig'

const ADD_EVENT_URL = '/events/auth/add'

const EventAdd = () => {
    let { id } = useParams();
    const navigate = useNavigate()
    const [clubToken, setClubToken] = useState('')
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
            <h1 className='section__header'>Add Event</h1>

            <div>
                <Formik
                    initialValues={{ title: "", poster_image: "", venue: "", description: "", event_date: "", registration_deadline: "", registration_link: "", collaborating_clubs: [] }}
                    enableReinitialize
                    onSubmit={async (values) => {
                        const data = { club: id, ...values }
                        const formData = new FormData()
                        for (let key in data) {
                            if (typeof (data[key]) === 'object') {
                                formData.append(key, JSON.stringify(data[key]))
                            } else {
                                formData.append(key, data[key])
                            }
                        }
                        formData.append('poster_image', data.poster_image)
                        axios.post(process.env.REACT_APP_DEPT_API + ADD_EVENT_URL, formData, {
                            headers: {
                                Authorization: `Bearer ${clubToken}`
                            }
                        }).then(() => {
                            toast.success("Event Added Successfully", toastConfig)
                            setTimeout(() => {
                                navigate(`/clubs/${id}`)
                            }, 2500)
                        }).catch(err => {
                            alert(err.response.data.message)
                        })
                    }
                    }
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
                                        <h2>Event Details</h2>
                                        <div className='cpu-personal-card-img'>
                                            <div className='cpu-personal-card-img-col2'>
                                                <p htmlFor="poster_image">Event Poster</p>
                                                <label className='cpu-file-btn'>
                                                    <input id="file" name="poster_image" type="file" onChange={(event) => {
                                                        setFieldValue("poster_image", event.currentTarget.files[0]);
                                                    }} />
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="title">Event Title</label>
                                            <Field name="title" placeholder="Event Title" />
                                        </div>

                                        <div>
                                            <label htmlFor="description">Description</label>
                                            <Field as="textarea" name="description" />
                                        </div>
                                    </div>
                                </div>
                                <div className='cpu-col2'>
                                    <div className='cpu-card cpu-personal-card'>
                                        <div>
                                            <label htmlFor="event_date">Date of event</label>
                                            <Field name="event_date" type="date" />
                                        </div>
                                        <div>
                                            <label htmlFor="registration_deadline">Registration deadline</label>
                                            <Field name="registration_deadline" type="date" />
                                        </div>
                                        <div>
                                            <label htmlFor="venue">Venue</label>
                                            <Field name="venue" />
                                        </div>
                                        <div>
                                            <label htmlFor="registration_link">Registration Link</label>
                                            <Field name="registration_link" />
                                        </div>
                                    </div>
                                    <div className='cpu-card cpu-personal-card'>
                                        <div className='fpu-academic-row1-col'>
                                            <h4>Collaborating Clubs</h4>
                                            <FieldArray name="collaborating_clubs">
                                                {({ insert, remove, push }) => (
                                                    <div>
                                                        {values && values.collaborating_clubs && values.collaborating_clubs.length > 0 &&
                                                            values.collaborating_clubs.map((member, index) => (
                                                                <div className="fpu-academic-sub-row" key={index}>
                                                                    <div className="fpu-academic-sub-row-col1">
                                                                        <Field
                                                                            name={`collaborating_clubs.${index}`}
                                                                            type="text" placeholder="Name of Club"
                                                                        />
                                                                    </div>
                                                                    <div className="fpu-academic-sub-row-col2">
                                                                        <button
                                                                            type="button"
                                                                            className="secondary"
                                                                            onClick={() => remove(index)}
                                                                        >
                                                                            X
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        <button
                                                            type="button"
                                                            className="fpu-add-btn"
                                                            onClick={() => push('')}
                                                        >
                                                            Add Club
                                                        </button>
                                                    </div>
                                                )}
                                            </FieldArray>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div >
    )
}

export default EventAdd