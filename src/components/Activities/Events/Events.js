import React, { useState, useEffect } from 'react'
import axios from 'axios'

import EventCard from './EventCard';
import './Events.css'

const EVENT_URL = "/events"


function Events() {

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

  console.log(events)

  return (
    <div className='events'>
        <div className='section__container'>
          <div className='section'>
                <h1 className='section__header'>Upcoming Events</h1> 
                <div className='events__container'>
                  {events && events.map((eve) => (
                    <EventCard 
                      key={eve._id}
                      club={eve.club}
                      collaborating_clubs={eve.collaborating_clubs}
                      description={eve.description}
                      event_date={eve.event_date}
                      organizing_club={eve.organizing_club}
                      poster_image={eve.poster_image}
                      registration_deadline={eve.registration_deadline}
                      registration_link={eve.registration_link}
                      title={eve.title}
                      venue={eve.venue}
                    />
                  ))}
                </div> 

          </div>
        </div>
    </div>
  )
}

export default Events