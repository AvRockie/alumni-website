import React, { useState, useContext, useEffect } from 'react'

import { SideHeader, PageHeader, Pos, Courses, Syllabus } from '../../components'
import CustomTitle from '../../utils/CustomTitle'

import { TabContext } from '../../contexts/TabContext'
import './AcademicsPage.css'

function AcademicsPage() {

  const { dropdownTab } = useContext(TabContext);
  const [tab, setTab] = useState(dropdownTab)

  const selectedTab = () => {
    if(tab === 1)
      return <Pos />
    else if(tab === 2)
      return <Courses />
    else if(tab === 3)
      return <Syllabus />

  }

  useEffect(() => {
    setTab(dropdownTab)
  }, [dropdownTab])
  

  // console.log(tab)

  return (
    <div className='academicsPage'>
      <CustomTitle title="MEC CS | Academics"/>
      <PageHeader image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      <div className='page__section'>
        <SideHeader title="Academics"/>
        <div className='section__column'>
          <div className='page_navbar'>
            <h1 className='page_nav__header'>Academics</h1>
            <div className='page_nav_link'>
              <p style={{ opacity: tab === 1 ? 1 : 0.5 }} onClick={() => setTab(1)}>POs</p>
              <p style={{ opacity: tab === 2 ? 1 : 0.5 }} onClick={() => setTab(2)}>Courses Offered</p>
              <p style={{ opacity: tab === 3 ? 1 : 0.5 }} onClick={() => setTab(3)}>Syllabus</p>
            </div>
          </div>
          {selectedTab()}
        </div>
      </div>
    </div>
  )
}

export default AcademicsPage