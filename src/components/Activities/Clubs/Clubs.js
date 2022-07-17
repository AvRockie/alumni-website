import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Clubs.css'

import ClubCard from './ClubCard'

const CLUB_URL = "/clubs"

function Clubs() {

  const [clubs, setClubs] = useState('')

  useEffect(() => {
    async function getClubs() {
      try {
        const response = await axios.get(process.env.REACT_APP_DEPT_API + CLUB_URL);
        setClubs(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getClubs()
  }, [])


  return (
    <div>
      <div className='section__container'>
        <div className='section'>
          <h1 className='section__header'>Student Clubs</h1>
          <div className='clubs_container'>
            {clubs && clubs.map((club) => (
              <ClubCard
                key={club._id}
                id={club._id}
                name={club.name}
                description={club.description}
                logo={club.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clubs