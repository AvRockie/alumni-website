import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import StudentCard from './StudentCard'

import './Students.css'

const STUDENTLIST_URL = '/studentlist'

function Students() {

    const currentYear = new Date().getFullYear()

    const [students, setStudents] = useState('')
    const [year, setYear] = useState(currentYear)

    const previousYear = () => {
        if (year > currentYear)
            setYear(year - 1)
    }
    const nextYear = () => {
        if (year < currentYear + 3)
            setYear(year + 1)
    }

    useEffect(() => {
        async function getStudents() {
            try {
                const response = await axios.get(process.env.REACT_APP_DEPT_API + STUDENTLIST_URL);
                setStudents(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getStudents()
    }, [])

    const csaStudents = students && students.filter(x => Number(x.batch) === year && x.class === 'CSA');
    const csbStudents = students && students.filter(x => Number(x.batch) === year && x.class === 'CSB');

    const csa = csaStudents[0]
    const csb = csbStudents[0]


    return (
        <div className='students'>
            <div className='section__container'>
                <div className='section'>
                    <h1 className='section__header'>Students</h1>
                    <div className='students_header'>
                        <div className='section_slider'>
                            <BsFillArrowLeftCircleFill onClick={previousYear} className='slider_btn' />
                            <h2>Batch of {year}</h2>
                            <BsFillArrowRightCircleFill onClick={nextYear} className='slider_btn' />
                        </div>

                    </div>
                    <div className='student_list_container'>
                        <h4>CSA</h4>
                        <div className='students_info'>
                            {csa && csa.students_list.map((stu, id) => (
                                <StudentCard
                                    key={id}
                                    ktu_rollno={stu.ktu_rollno}
                                    name={stu.name}
                                />
                            ))}
                        </div>

                        <h4>CSB</h4>
                        <div className='students_info'>
                            {csb && csb.students_list.map((stu, id) => (
                                <StudentCard
                                    key={id}
                                    ktu_rollno={stu.ktu_rollno}
                                    name={stu.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students