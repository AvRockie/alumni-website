import React from 'react'

import  { useNavigate } from 'react-router-dom'

import './HomeAbout.css'

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
                  The Department of Computer Science & Engineering established in the year 1984, was the first CSE department introduced in Kerala. For the last three decades, the department has been imparting state-of-the-art education, training and research in the field of computer science and allied areas and regularly producing efficient and outstanding professionals. The department offers B.Tech, M.Tech and Ph.D. programmes with excellent infrastructure and well qualified and experienced faculty. Department is a KTU approved research centre with seven research scholars including a scholar under AICTE NDF scheme....
                </p>
              </div>
              <div className='hac__right'>
                <div className='homeAbout__img_outline' />
                <img className='homeAbout__img' src='https://avatars.githubusercontent.com/u/43471295?v=4' alt='' />
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