import React, { useState, useContext, useEffect } from 'react'
import Card from '../../components/Academics/Card'
import newsData from '../../data/newsData'
import { SideHeader, PageHeader, Pos, Courses, Syllabus } from '../../components/'
import CustomTitle from '../../utils/CustomTitle'

import { TabContext } from '../../contexts/TabContext'
import './AcademicsPage.css'

function AcademicsPage() {


  

  return (
    <div className='academicsPage'>
      <CustomTitle title="MEC Alumni | Newsroom"/>
      <PageHeader image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      <div className='page__section'>
        <SideHeader title="Newsroom"/>
        <div className='section__column'>
          <div className='news_body'>
            {
              newsData.map((nd) => (
                <Card
                  key={nd.id}
                  img={nd.img} 
                  title={nd.title} 
                  desc={nd.desc}
                />
            ))
            }
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default AcademicsPage