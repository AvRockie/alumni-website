import React, { useState, useContext, useEffect } from 'react'

import { SideHeader, Why, Placementstats, Internshipstats, PageHeader } from '../../components'
import CustomTitle from '../../utils/CustomTitle'

import { TabContext } from '../../contexts/TabContext'
import './PlacementsPage.css'

function PlacementsPage() {

  const { dropdownTab } = useContext(TabContext);
  const [tab, setTab] = useState(dropdownTab)

  const selectedTab = () => {
    if(tab === 1)
      return <Why />
    else if(tab === 2)
      return <Placementstats />
    else if(tab === 3)
      return <Internshipstats />

  }

  useEffect(() => {
    setTab(dropdownTab)
  }, [dropdownTab])

  return (
    <div className='placementsPage'>
      <CustomTitle title="MEC CS | Placements"/>
      <PageHeader image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      <div className='page__section'>
        <SideHeader title="Placements"/>
        <div className='section__column'>
          <div className='page_navbar'>
            <h1 className='page_nav__header'>Placements</h1>
            <div className='page_nav_link'>
              <p style={{ opacity: tab === 1 ? 1 : 0.5 }} onClick={() => setTab(1)}>Why MEC?</p>
              <p style={{ opacity: tab === 2 ? 1 : 0.5 }} onClick={() => setTab(2)}>Placement Statistics</p>
              <p style={{ opacity: tab === 3 ? 1 : 0.5 }} onClick={() => setTab(3)}>Internship Statistics</p>
            </div>
          </div>
          {selectedTab()}
        </div>
      </div>
    </div>
  )
}

export default PlacementsPage