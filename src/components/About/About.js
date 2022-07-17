import React from 'react'

import './About.css'

import aboutData from '../../data/aboutData'

function About() {
    
  return (
    <div className='about'>
        <div className='section__container'>
            <div className='section'>
                <h1 className='section__header'>Our Aim</h1>
                <p className='about__p'>
                    {aboutData.aim}
                 
                </p>
            </div>
            <div className='section'>
                <h1 className='section__header'>Vision</h1>
                <p className='about__p'>{aboutData.vision}</p>
            </div>
            <div className='section'>
                <h1 className='section__header'>Mission</h1>
                <div className='about_mission_div'>
                    {aboutData.mission.map((mis) => (
                        <div className='about_mission' key={mis.id}>
                            <p className='about__p primary bold'>{mis.id}:</p>
                            <p className='about__p'>{mis.m}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default About