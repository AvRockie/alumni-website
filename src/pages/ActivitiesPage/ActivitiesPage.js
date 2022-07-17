import React, { useState, useContext, useEffect } from 'react'

import { SideHeader, Achievements, Projects, Clubs, PageHeader } from '../../components'
import Events from '../../components/Activities/Events/Events'
import CustomTitle from '../../utils/CustomTitle'

import { TabContext } from '../../contexts/TabContext'
import './ActivitiesPage.css'

function ActivitiesPage() {

  const { dropdownTab } = useContext(TabContext);
  const [tab, setTab] = useState(dropdownTab)

  const selectedTab = () => {
    if (tab === 1)
      return <Achievements />
    else if (tab === 2)
      return <Clubs />
    else if (tab === 3)
      return <Projects />
    else if (tab === 4)
      return <Events />
  }

  useEffect(() => {
    setTab(dropdownTab)
  }, [dropdownTab])

  return (
    <div className='activitiesPage'>
      <CustomTitle title="MEC CS | Activities" />
      <PageHeader image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
      <div className='page__section'>
        <SideHeader title="Activities" />
        <div className='section__column'>
          <div className='page_navbar'>
            <h1 className='page_nav__header'>Activities</h1>
            <div className='page_nav_link'>
              <p style={{ opacity: tab === 1 ? 1 : 0.5 }} onClick={() => setTab(1)}>Achievements</p>
              <p style={{ opacity: tab === 2 ? 1 : 0.5 }} onClick={() => setTab(2)}>Student Clubs</p>
              <p style={{ opacity: tab === 3 ? 1 : 0.5 }} onClick={() => setTab(3)}>Projects</p>
              <p style={{ opacity: tab === 4 ? 1 : 0.5 }} onClick={() => setTab(4)}>Events</p>
            </div>
          </div>
          {selectedTab()}
        </div>
      </div>
    </div>
  )
}

export default ActivitiesPage