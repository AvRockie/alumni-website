import React from 'react'

import './HomeHod.css'

function HomeHod() {
  return (
    <div className='homeHod'>
      <div className='home_hod_section__container'>
        <div className='section'>
          <div className='homeAbout_section'>
            <div className='hod__right'>
              <div className='hod_rectangle1' />
              <img className='homehod__img' src='https://avatars.githubusercontent.com/u/43471295?v=4' alt='' />
              <div className='hod_rectangle2' />
            </div>
            <div className='hod__left'>
              <h1 className='white_section__header'>Message from HOD</h1>
              <p className='hod__p'>
                The Department of Computer Science & Engineering, established in the year 1984,is the first CSE department introduced in Kerala.The focus of the department is to provide students with a conductive atmosphere to develop analytical and practical skills and train them in the frontier areas of Computer Science and Engineering to acquire good academic knowledge via smart teaching and learning process, and also to equip themto face real-world challenges. The department has a vibrant learning environment in which both students and faculty members nurture the spirit of creativity, innovation and effectively contribute to technology advancement. The faculty members display a high level of dedication and enthusiasm towards both teaching and state-of-the-art research, and give individual attention to all students...
              </p>
              <h3>-Dr. Preetha Theresa Joy</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeHod