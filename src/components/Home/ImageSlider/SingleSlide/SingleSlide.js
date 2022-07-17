import React from 'react'

import './SingleSlide.css'

import dots from '../../../../assets/svg/dots.svg'

function SingleSlide({ title, desc, image }) {
  return (
    <div className='singleSlide'>
        <div className='singleSlide__container'>
            
            <div className='slideImg__div'>
                <img src={image} alt="" />
            </div>
            {/* <div className='singleSlide__content'>
                <h1>{title}</h1>
                <p>{desc}</p>
            </div> */}
        </div>
    </div>
  )
}

export default SingleSlide