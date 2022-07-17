import React from 'react'

import './PageHeader.css'

function PageHeader({ image }) {
  return (
    <div className='page_header'>
        <img src={image} alt="" />
    </div>
  )
}

export default PageHeader