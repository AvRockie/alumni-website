import axios from 'axios';
import { ErrorMessage, Field, FieldArray, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { FaSave } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { toastConfig } from '../../../../utils/ToastConfig'
import './FacultyUpdate.css'

const FACULTY_URL = '/faculty/'

const FacultyUpdate = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [faculty, setFaculty] = useState(null)
    const [gettingdata, setGettingdata] = useState(true)
    const [facultyToken, setFacultyToken] = useState('')
    const getFaculty = async () => {
        setGettingdata(true)
        try {
            const response = await axios.get(process.env.REACT_APP_DEPT_API + FACULTY_URL + id)
            // console.log(response.data)
            setFaculty(response.data)
            setGettingdata(false)

        } catch (err) {
            toast.error(err, toastConfig)
        }
    }
    useEffect(() => {
        async function checkAccess() {
            const facultyToken = localStorage.getItem('faculty_token')
            const facultyId = localStorage.getItem('user_id')
            if (!facultyToken || facultyId !== id) {
                alert('Acess denied')
                navigate('/')
            }
            setFacultyToken(facultyToken)
        }
        checkAccess()
        getFaculty()
        // eslint-disable-next-line
    }, [])

    return (
        <div className='fpu-main-container'>
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
            {!gettingdata && faculty ?
                <div>
                    <Formik
                        initialValues={faculty}
                        enableReinitialize={true}
                        onSubmit={async (values) => {
                            let data = { id, ...values }
                            const formData = new FormData()
                            for (let key in data) {
                                if (typeof (data[key]) === 'object') {
                                    formData.append(key, JSON.stringify(data[key]))
                                } else {
                                    formData.append(key, data[key])
                                }
                            }
                            formData.append('photo', data.photo)
                            axios.put(process.env.REACT_APP_DEPT_API + FACULTY_URL + id + '/auth/update', formData, {
                                headers: {
                                    Authorization: `Bearer ${facultyToken}`
                                }
                            }).then(() => {
                                toast.success("Profile Updated", toastConfig)
                                setTimeout(() => {
                                    navigate(`/faculty/${id}`)
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
                                <div className='fpu-container'>
                                    <div className='fpu-col1'>
                                        <div className='fpu-card fpu-personal-card'>
                                            <h2>Personal Details</h2>
                                            <div className='fpu-personal-card-img'>
                                                <div>
                                                    <img src={faculty && faculty.photo} alt="profile" />
                                                </div>
                                                <div className='fpu-personal-card-img-col2'>
                                                    <p htmlFor="photo">Change Profile Image</p>
                                                    <label className='fpu-file-btn'>
                                                        <input id="file" name="photo" type="file" onChange={(event) => {
                                                            setFieldValue("photo", event.currentTarget.files[0]);
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
                                                <label htmlFor="ktu_id">KTU ID</label>
                                                <Field type="text" name="ktu_id" disabled={!gettingdata} />
                                            </div>
                                            <div>
                                                <label htmlFor="designation">Designation</label>
                                                <Field as="select" name="designation">
                                                    <option value="" disabled>select</option>
                                                    <option value="Principal">Principal</option>
                                                    <option value="HOD & Professor">HOD & Professor</option>
                                                    <option value="Professor">Professor</option>
                                                    <option value="Associate Professor">Associate Professor</option>
                                                    <option value="Assistant Professor (Sr Scale)">Assistant Professor (Sr Scale)</option>
                                                    <option value="Assistant Professor">Assistant Professor</option>
                                                    <option value="System Analyst">System Analyst</option>
                                                    <option value="Jr. System Analyst">Jr. System Analyst</option>
                                                    <option value="Foreman">Foreman</option>
                                                    <option value="Computer Programmer">Computer Programmer</option>
                                                    <option value="Tradesman">Tradesman</option>
                                                </Field>
                                            </div>
                                            <div>
                                                <label htmlFor="contact_no">Contact Number</label>
                                                <Field type="text" name="contact_no" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='fpu-col2'>
                                        <div className='fpu-card'>
                                            <h2>Academic Details</h2>
                                            <div className='fpu-academic-row1'>
                                                <div className='fpu-academic-row1-col'>
                                                    <h4>Courses Handled</h4>
                                                    <FieldArray name="courses_handled">
                                                        {({ insert, remove, push }) => (
                                                            <div>
                                                                {values.courses_handled && values.courses_handled.length > 0 &&
                                                                    values.courses_handled.map((member, index) => (
                                                                        <div className="fpu-academic-sub-row" key={index}>
                                                                            <div className="fpu-academic-sub-row-col1">
                                                                                <Field
                                                                                    name={`courses_handled.${index}`}
                                                                                    type="text"
                                                                                />
                                                                                <ErrorMessage
                                                                                    name={`courses_handled.${index}`}
                                                                                    component="div"
                                                                                    className="field-error"
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
                                                                    Add Course
                                                                </button>
                                                            </div>
                                                        )}
                                                    </FieldArray>
                                                </div>
                                                <div className='fpu-academic-row1-col'>
                                                    <h4>Areas of Interest</h4>
                                                    <FieldArray name="areas_of_interest">
                                                        {({ insert, remove, push }) => (
                                                            <div>
                                                                {values.areas_of_interest && values.areas_of_interest.length > 0 &&
                                                                    values.areas_of_interest.map((member, index) => (
                                                                        <div className="fpu-academic-sub-row" key={index}>
                                                                            <div className="fpu-academic-sub-row-col1">
                                                                                <Field
                                                                                    name={`areas_of_interest.${index}`}
                                                                                    type="text"
                                                                                />
                                                                                <ErrorMessage
                                                                                    name={`areas_of_interest.${index}`}
                                                                                    component="div"
                                                                                    className="field-error"
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
                                                                    Add Area of Interest
                                                                </button>
                                                            </div>
                                                        )}
                                                    </FieldArray>
                                                </div>
                                            </div>
                                            <div className='fpu-academic-row2-col'>
                                                <h4>Qualifications</h4>
                                                <FieldArray name="qualifications">
                                                    {({ insert, remove, push }) => (
                                                        <div>
                                                            {values.qualifications && values.qualifications.length > 0 &&
                                                                values.qualifications.map((member, index) => (
                                                                    <div className="fpu-academic-sub-row" key={index}>
                                                                        <div className="fpu-academic-sub-row-col1">
                                                                            <Field
                                                                                name={`qualifications.${index}`}
                                                                                type="text"
                                                                            />
                                                                            <ErrorMessage
                                                                                name={`qualifications.${index}`}
                                                                                component="div"
                                                                                className="field-error"
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
                                                                Add Qualification
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
                </div> :
                <p>Loading...</p>
            }
        </div >
    )
}

export default FacultyUpdate