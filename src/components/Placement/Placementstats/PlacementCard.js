import React from 'react'
import Tooltip from '@mui/material/Tooltip';

function PlacementCard({ id, slno, logo, name, offers }) {

  const capitalize = (s) => {
    return s[0].toUpperCase() + s.slice(1);
  }

  return (
    <div className='placementCard' key={id}>
        <h3>{slno}</h3>
        <div className='placementCard__logo'>
            <Tooltip title={capitalize(name)} placement="right">
              <img src={logo} alt="" />
            </Tooltip>
        </div>
        <h3>{offers}</h3>
    </div>
  )
}

export default PlacementCard