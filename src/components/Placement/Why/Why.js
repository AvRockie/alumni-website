import React from 'react'
import CountUp from 'react-countup';

import placementData from '../../../data/placementData'

import './Why.css'

function Why() {
  return (
    <div className='why'>
      <div className='section__container'>
        <div className='section'>
            <h1 className='section__header'>Why Recruit from MEC?</h1>
            <p className='about__p'>
                 {placementData.why1}
            </p>
            <p className='about__p'>
                 {placementData.why2}
            </p>
        </div>
        <div className='section'>
            <h1 className='section__header'>Highlights</h1>
            <div className='stats_container'>
              <div className='singleStat'>
                <h1><CountUp end={99} duration={3} enableScrollSpy={true}/>%</h1>
                <p>Students placed</p>
              </div>
              <div className='singleStat'>
                  <h1><CountUp end={100} duration={3} enableScrollSpy={true}/>+</h1>
                  <p>Job Offers</p>
              </div>
              <div className='singleStat'>
                  <h1><CountUp end={50} duration={3} enableScrollSpy={true}/></h1>
                  <p>Internships</p>
              </div>
              <div className='singleStat'>
                  <h1><CountUp end={48} duration={3} enableScrollSpy={true}/></h1>
                  <p>Recruiters</p>
              </div>
            </div>
          
        </div>
        <div className='section'>
            <h1 className='section__header'>Activities</h1>
            {placementData.activities.map((a) => (
                <div className='about_mission' key={a.id}>
                    <li className='about__p'>{a.act}</li>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Why