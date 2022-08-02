import React from 'react'
import newsData from '../../data/newsData'
import chapterData from '../../data/chapterData'
import IdCard from '../../components/IdCard/IdCard'


import Newsroom from "../../components/Home/NewsRoom/Newsroom"
import Events from "../../components/Home/Events/Events"
import { ImageSlider, HomeStats, HomeAbout, HomeHod, HomeMisc, Toppers, HomePlacement, Testimonials, Gallery } from '../../components'
import HomeFacilities from '../../components/Home/HomeFacilities/HomeFacilities'
import CustomTitle from '../../utils/CustomTitle'
import Card from '../../components/Academics/Card'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <CustomTitle title="MEC Alumni"/>
      <ImageSlider />z
      <div className='page__section'>
        <div className='section__column'>
            <HomeAbout />
            <Newsroom {...newsData[0]}/>
            <Events />
            <Newsroom {...chapterData[0]}/>
            <Gallery />
            
        </div>
      </div>
    </div>
  )
}

export default LandingPage