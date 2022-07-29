import React, { useState, useContext, useEffect } from 'react'
import Card from '../../components/Academics/Card'
import { SideHeader, Why, Placementstats, Internshipstats, PageHeader } from '../../components'
import CustomTitle from '../../utils/CustomTitle'
import chapterData from '../../data/chapterData'
import { TabContext } from '../../contexts/TabContext'
import './PlacementsPage.css'

function PlacementsPage() {

 
  return (
    <div className='placementsPage'>
      <CustomTitle title="MEC Alumni | Chapters"/>
      <PageHeader image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      <div className='page__section'>
        <SideHeader title="Chapters"/>
        <div className='section__column'>
          <div className='chapters_body'>
          {
              chapterData.map((cd) => (
                <Card
                  key={cd.id}
                  img={cd.img} 
                  title={cd.title} 
                  desc={cd.desc}
                />
            ))
            }
            


</div>


          
        </div>
      </div>
    </div>
  )
}

export default PlacementsPage