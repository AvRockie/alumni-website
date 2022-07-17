import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { VscCircleFilled } from "react-icons/vsc";

import HomeEventCard from './HomeEventCard/HomeEventCard';

import './HomeMisc.css'

const EVENT_URL = "/events"

function HomeMisc() {

    const [curEvent, setCurEvent] = useState(0)
    const [events, setEvents] = useState('')

    useEffect(() => {
      async function getClubs() {
        try {
          const response = await axios.get(process.env.REACT_APP_DEPT_API + EVENT_URL);
          setEvents(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      getClubs()
    }, [])

    const handeImgChange = (id) => {
        setCurEvent(id)
    }

    const numEvents = 2

    return (
        <div className='homeMisc'>
            <div className='section__container'>
                <div className='section'>
                    <div className='homeMisc__container'>                        
                        <div className='homeMisc__left'>
                            <h1 className='section__header'>Events</h1> 
                            <div className='eventSlider__container'>
                                <HomeEventCard 
                                    event={events[curEvent]}
                                />
                                <div className='event_bullets'>
                                    {[...Array(numEvents)].map((dot, id) => (
                                        <VscCircleFilled 
                                            key={id}
                                            className='event_blt'
                                            onClick={() => handeImgChange(id)}
                                            style={{ color: curEvent === id ? 'rgba(12, 35, 64, 0.8)' : 'rgba(12, 35, 64, 0.3)', transform: curEvent === id ? 'scale(1.1)' : 'scale(0.9)'}}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='homeMisc__right'>
                            <h1 className='section__header'>Announcements</h1>
                            <div className='ann_container'>
                                <li>B.Tech Computer Science & Engineering is NBA Accredited</li>
                                <li>B.Tech Computer Science & Engineering is NBA Accredited</li>
                            </div> 
                            <h1 className='section__header'>Our Programmes</h1> 
                            <div className='ann_container'>
                                <li>UG Programmes</li>
                                <li>PG Programmes</li>
                            </div> 
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeMisc