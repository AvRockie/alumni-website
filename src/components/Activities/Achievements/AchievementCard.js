import React from 'react'
import { FaAward } from "react-icons/fa";


function AchievementCard({ id, date, title, description }) {
  return (
    <div className='achievementCard' key={id}>
        <FaAward className='award_icon'/>
        <p>{description}</p>
        <h6>{date}</h6>
    </div>
  )
}

export default AchievementCard