import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Loader from '../../Loader/Loader';
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


    const sortedFaculty = faculty && faculty.sort(function (a, b) {   
        return a.designation_rank - b.designation_rank || a.order_no - b.order_no;
    });

    return (
        <div className='faculty'>
            <div className='section__container'>
                <div className='section'>
                    <h1 className='section__header'>Faculty</h1>
                    <div className='faculty_info'>
                        {sortedFaculty ? sortedFaculty.map((fac) => (
                            <FacultyCard
                                key={fac._id}
                                id={fac._id}
                                name={fac.name}
                                designation={fac.designation}
                                email={fac.email}
                                photo={fac.photo && fac.photo.url}
                                ktu_id={fac.ktu_id}
                            />
                        )) : <Loader color="#AE9142" size={70} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faculty