import React from 'react'
import { BsArrowRightCircle } from "react-icons/bs";

import syllabusData from '../../../data/syllabusData'
import './Syllabus.css'

function Syllabus() {
    
  return (
    <div className='syllabus'>
        <div className='section__container'>
            <div className='section'>
                <h1 className='section__header'>Syllabus</h1>

                <div className='syllabus_container'>
                  {syllabusData.map((syl) => (
                    <div className='syl__year' key={syl.year}>
                      <div className='syl_sem'>
                        <h1 style={{background: syl.color}}>S{syl.year*2 - 1}</h1>
                        <p style={{color: syl.color}}>KTU Syllabus of 1st Semester </p>
                        <a href={syl.oddSem} target="_blank" rel="noreferrer">
                          <BsArrowRightCircle className='syl__icon'/>
                        </a>
                      </div>
                      <div className='syl_sem'>
                      <h1 style={{background: syl.color}}>S{syl.year*2 - 1}</h1>
                        <p style={{color: syl.color}}>KTU Syllabus of 1st Semester </p>
                        <a href={syl.oddSem} target="_blank" rel="noreferrer">
                          <BsArrowRightCircle className='syl__icon'/>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                
            </div>
    
        </div>
    </div>
  )
}

export default Syllabus