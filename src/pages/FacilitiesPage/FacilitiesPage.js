import React from 'react'

import { SideHeader, PageHeader, Facility } from '../../components'
import CustomTitle from '../../utils/CustomTitle'

import './FacilitiesPage.css'

function FacilitiesPage() {
  return (
    <div className='facilitiesPage'>
      <CustomTitle title="MEC Alumni | Gallery"/>
      <PageHeader image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      <div className='page__section'>
        <SideHeader title="Gallery"/>
       
      </div>
    </div>
  )
}

export default FacilitiesPage