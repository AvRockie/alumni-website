import React, { useState, useContext, useEffect } from 'react'
import Card from '../../components/Academics/Card'

import { SideHeader, Achievements, Projects, Clubs, PageHeader } from '../../components'
import Events from '../../components/Activities/Events/Events'
import CustomTitle from '../../utils/CustomTitle'

import { TabContext } from '../../contexts/TabContext'
import './ActivitiesPage.css'
import engageData from '../../data/engageData'

function ActivitiesPage() {



  return (
    <div className='activitiesPage'>
      <CustomTitle title="MEC CS | Engage" />
      <PageHeader image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <div className='page__section'>
        <SideHeader title="Engage" />
        <div className='section__column'>
        <div className='engage_body'>

<Card {...engageData}/>
<Card {...engageData} />
<Card {...engageData}/>
<Card {...engageData}/>
<Card {...engageData}/>
</div>


       
        </div>
      </div>
    </div>
  )
}

export default ActivitiesPage