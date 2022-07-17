import React from 'react'
import btech_img from '../../../assets/svg/btech_img.svg'
import mtech_img from '../../../assets/svg/mtech.svg'

import './Courses.css'

function Courses() {
    
  return (
    <div className='courses'>
        <div className='section__container'>
            <div className='section'>
                <h1 className='section__header'>Courses</h1>
            </div>
            <div className='courses_container'>
                <div className='single_course'>
                    <div className='courses_img'>
                        <img src={btech_img} alt="" />
                    </div>
                    <div className='course_name'>
                        <h1>B. Tech</h1>
                        <p>in<br/> Computer Science and Engineering</p>
                        
                    </div>
                </div>
                <div className='single_course right_align'>
                    <div className='courses_img'>
                        <img src={mtech_img} alt="" />
                    </div>
                    <div className='course_name'>
                        <h1>M. Tech</h1>
                        <p>in<br/> Computer Science and Engineering
                            with Specialization <br/> in<br/>
                            Image Processing
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses