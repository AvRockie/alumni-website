import React from 'react'

import './TopperCard.css'

function TopperCard({ name, image, semester, sgpa }) {
    return (
        <div className='topperCard'>
            <img className='topperCard_img' src={image} alt='' />
            <h1>{name}</h1>
            <h3>Semester {semester}</h3>
            <h4>SGPA {sgpa}</h4>
        </div>
    )
}

export default TopperCard