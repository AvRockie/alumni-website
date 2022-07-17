import React from 'react'

import Newsroom from "../../components/Home/NewsRoom/Newsroom"
import Chapters from "../../components/Home/Chapters/Chapters"
import Events from "../../components/Home/Events/Events"
import { ImageSlider, HomeStats, HomeAbout, HomeHod, HomeMisc, Toppers, HomePlacement, Testimonials, Gallery } from '../../components'
import HomeFacilities from '../../components/Home/HomeFacilities/HomeFacilities'
import CustomTitle from '../../utils/CustomTitle'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <CustomTitle title="MEC CS"/>
      <ImageSlider />z
      <div className='page__section'>
        <div className='section__column'>
            <HomeAbout />
            <Newsroom />
            <Events />
            <Chapters />
            <Gallery />
        </div>
      </div>
    </div>
  )
}

export default LandingPage