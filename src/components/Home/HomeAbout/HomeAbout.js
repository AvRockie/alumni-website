import React from 'react'

import  { useNavigate } from 'react-router-dom'

import './HomeAbout.css'
import image1 from'../../../assets/images/collegefrontview.jpeg'

function HomeAbout() {

  let navigate = useNavigate()


  return (
    <div className='homeAbout'>
        <div className='section__container'>
          <div className='section'>
            <div className='homeAbout_section'>
              <div className='hac__left'>
                <h1 className='section__header'>About</h1> 
                <p className='about__p'>
                Govt. Model Engineering College is celebrated for it's proud alumni members and their remarkable achievements. From it's amicable and inclusive environment that encourages bonding and exploration of various horizons to let individuals advance, the aura of excellence is bound to be within anyone who has stepped out of this corridors with handful of experiences and heartwarming memories.
We hope to refine the MEC impact by serving as an instrument of  interaction between our admirable alumni.
</p>
              </div>
              <div className='hac__right'>
                <div className='homeAbout__img_outline' />
                <img className='homeAbout__img' src={image1} alt='' />
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='homeAbout_button'>
              <button onClick={() => navigate('about')}>Our Vision and Mission</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeAbout