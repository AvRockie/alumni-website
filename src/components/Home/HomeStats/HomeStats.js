import React from 'react'
import CountUp from 'react-countup';

import './HomeStats.css'

function HomeStats() {
  return (
    <div className='homeStats'>
        <div className='section__container'>
            <div className='section'>
                <div className='stats_container'>
                    <div className='homeStat'>
                        <h1><CountUp end={500} duration={3} enableScrollSpy={true}/>+</h1>
                        <p>UG Students</p>
                    </div>
                    <div className='homeStat'>
                        <h1><CountUp end={30} duration={3} enableScrollSpy={true}/>+</h1>
                        <p>Staffs</p>
                    </div>
                    <div className='homeStat'>
                        <h1><CountUp end={20} duration={3} enableScrollSpy={true}/>+</h1>
                        <p>Faculty</p>
                    </div>
                    <div className='homeStat'>
                        <h1><CountUp end={50} duration={3} enableScrollSpy={true}/>+</h1>
                        <p>Publications</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeStats