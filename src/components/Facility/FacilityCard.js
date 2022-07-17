import React from 'react'

function FacilityCard({title, description }) {
    return (
      <div className='facilityCard'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    )
  }

  export default FacilityCard