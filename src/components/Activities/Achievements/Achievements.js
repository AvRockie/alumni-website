import React, { useState, useEffect } from 'react'
import axios from 'axios'

import AchievementCard from './AchievementCard';

import './Achievements.css'

const ACHIEVEMENTS_URL = '/achievements'

function Achievements() {

  const [achievements, setAchievements] = useState('')

  useEffect(() => {
    async function getClubs() {
      try {
        const response = await axios.get(process.env.REACT_APP_DEPT_API + ACHIEVEMENTS_URL);
        setAchievements(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getClubs()
  }, [])

  return (
    <div className='achievements'>
      <div className='section__container'>
        <div className='section'>
          <h1 className='section__header'>Achievements</h1>
          <p className='about__p'>
            Student achievements are enormous for our college and they are shown to the doors of many fests, hackathons and such events for development by community learning culture.
          </p>
          <div className='achievements__container'>
            {achievements && achievements.map((ach) => (
              <AchievementCard
                key={ach._id}
                id={ach._id}
                date={ach.date_published}
                title={ach.title}
                description={ach.description}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Achievements