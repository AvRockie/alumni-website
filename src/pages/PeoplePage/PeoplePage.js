import React, { useState, useContext, useEffect } from 'react'
import { SideHeader, PageHeader, Faculty, Students, Hod, Alumni } from '../../components'
import CustomTitle from '../../utils/CustomTitle'
import eventsData from '../../data/eventsData'
import Card from '../../components/Academics/Card'


import { TabContext } from '../../contexts/TabContext'
import './PeoplePage.css'

function PeoplePage() {

   return (
    <div className='peoplePage'>
      <CustomTitle title="MEC Alumni | Events"/>
      <PageHeader image="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      <div className='page__section'>
        <SideHeader title="Events"/>
        <div className='section__column'>
        <div className='news_body'>

        {
              eventsData.map((ed) => (
                <Card
                  key={ed.id}
                  img={ed.img} 
                  title={ed.title} 
                  desc={ed.desc}
                />
            ))
            }
            </div>

         
        </div>
      </div>
    </div>
  )
}

export default PeoplePage