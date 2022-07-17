import React from 'react'
// import slugify from 'slugify'
import { Link } from 'react-router-dom'

function ClubCard({ id, name, description, logo }) {
  return (
    <div className='clubCard' key={id}>
      <div className='club_img'>
        <img src={logo} alt='' />
      </div>
      <div className='club_content'>
        <h1>{name}</h1>
        <p>{description}</p>
        <Link to={`/clubs/${id}`}>Read more</Link>
      </div>
    </div>
  )
}

export default ClubCard