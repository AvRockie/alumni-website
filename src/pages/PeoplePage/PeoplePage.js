import React, { useState, useContext, useEffect } from 'react'
import { SideHeader, PageHeader, Faculty, Students, Hod, Alumni } from '../../components'
import CustomTitle from '../../utils/CustomTitle'

import { TabContext } from '../../contexts/TabContext'
import './PeoplePage.css'

function PeoplePage() {

  const { dropdownTab } = useContext(TabContext);
  const [tab, setTab] = useState(dropdownTab)

  const selectedTab = () => {
    if(tab === 1)
      return <Hod />
    else if(tab === 2)
      return <Faculty />
    else if(tab === 3)
      return <Students />
    else if(tab === 4)
      return <Alumni />
  }

  useEffect(() => {
    setTab(dropdownTab)
  }, [dropdownTab])

  return (
    <div className='peoplePage'>
      <CustomTitle title="MEC CS | People"/>
      <PageHeader image="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
      <div className='page__section'>
        <SideHeader title="People"/>
        <div className='section__column'>
          <div className='page_navbar'>
            <h1 className='page_nav__header'>People</h1>
            <div className='page_nav_link'>
              <p style={{ opacity: tab === 1 ? 1 : 0.5 }} onClick={() => setTab(1)}>Head of Department</p>
              <p style={{ opacity: tab === 2 ? 1 : 0.5 }} onClick={() => setTab(2)}>Faculty</p>
              <p style={{ opacity: tab === 3 ? 1 : 0.5 }} onClick={() => setTab(3)}>Students</p>
              <p style={{ opacity: tab === 4 ? 1 : 0.5 }} onClick={() => setTab(4)}>Alumni</p>
            </div>
          </div>
          {selectedTab()}
        </div>
      </div>
    </div>
  )
}

export default PeoplePage