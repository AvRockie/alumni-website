import React, { useState } from 'react'

import { useScrollPosition } from '../../hooks/useScrollPosition';
import './SideHeader.css'

function SideHeader({ title }) {

  const [text, setText] = useState(true)

  const scrollPosition = useScrollPosition()

  // const showLogo = () => {
  //   if (scrollPosition >= 260) {
  //     setText(true)
  //   } else {
  //     setText(false)
  //   }
  // }

  // window.addEventListener('scroll', showLogo)

  return (
    <div className='sideHeader'>   
        {text && (
          <h1>{title}</h1>
        )}  
        {!text && (
          <h1>{}</h1>
        )}  
    </div>
  )
}

export default SideHeader