/* import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FacultyCard from './FacultyCard'
import './Faculty.css'

const FACULTY_URL = '/faculty'

function Faculty() {

    const [faculty, setFaculty] = useState('')

    useEffect(() => {
        async function getFaculty() {
            try {
                const response = await axios.get(process.env.REACT_APP_DEPT_API + FACULTY_URL);
                setFaculty(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getFaculty()
    }, [])



    return (
        <div className='faculty'>
            <div className='section__container'>
                <div className='section'>
                    <h1 className='section__header'>Faculty</h1>
                    <div className='faculty_info'>
                        {faculty && faculty.map((fac) => (
                            <FacultyCard
                                key={fac._id}
                                id={fac._id}
                                name={fac.name}
                                designation={fac.designation}
                                email={fac.email}
                                photo={fac.photo}
                                ktu_id={fac.ktu_id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faculty */