import React from 'react'
import { FiShare2, FiCalendar, FiMapPin, FiClock } from "react-icons/fi";


function EventCard({ club, collaborating_clubs, description, event_date, organizing_club, poster_image, registration_deadline, registration_link, title, venue }) {

    var date1 = new Date();
    var date2 = new Date(registration_deadline);
    var diffDays = parseInt((date2 - date1) / (1000 * 60 * 60 * 24), 10); 

  return (
    <div className='eventCard'>
        <div className='event_img'>
            <img src='https://avatars.githubusercontent.com/u/43471295?v=4' alt='' />
        </div>
        <div className='event_details'>
            <div className='event_title'>
                <h1>{title}</h1>
                <FiShare2 className='share_icon'/>
            </div>
            <h3>{organizing_club}</h3>
            <div className='event_info'>
                <div className='event__content'>
                    <FiCalendar className='event_info_icon'/>
                    <h3>{event_date}</h3>
                </div>
                <div className='event__content'>
                    <FiMapPin className='event_info_icon'/>
                    <h3>{venue}</h3>
                </div>
            </div>
            <div className='event_info'>
                <div className='event__content'>
                    <FiClock className='event_info_icon'/>
                    <h3>{diffDays} days left to register</h3>
                </div>
                <div className='event__content'>
                    <button className='event_btn det_btn'>Details</button>
                    <button className='event_btn reg_btn'>
                        <a href={registration_link} target='_blank' rel="noreferrer">Register</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventCard