import React from 'react'
import { FiCalendar } from "react-icons/fi";

import './HomeEventCard.css'

function HomeEventCard({event}) {

  return (
    <div className='homeEventCard'>
        <div className='event_img'>
            <img src='https://avatars.githubusercontent.com/u/43471295?v=4' alt='' />
        </div>
        <div className='event_details'>
            <h1 className='homeEventCard__title'>{event &&event.title}</h1>
            <p className='homeEventCard__desc'>{event && event.description}</p>
            <div className='event_info'>
                <div className='event__content'>
                    <FiCalendar className='event_info_icon'/>
                    <h3>{event && event.event_date}</h3>
                </div>
                <div className='event__content'>
                    {/* <button className='event_btn det_btn'>Details</button> */}
                    {event && (
                        <button className='event_btn reg_btn'>
                            <a href={event && event.registration_link} target='_blank' rel="noreferrer">Register</a>
                        </button>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeEventCard