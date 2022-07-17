import React from 'react'

import { SideHeader, PageHeader } from '../../components'
import CustomTitle from '../../utils/CustomTitle'

import './ResourcesPage.css'

function ResourcesPage() {
  return (
    <div className='resourcesPage'>
      <CustomTitle title="MEC CS | Resources"/>
      <PageHeader image="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80"/>
      <div className='page__section'>
        <SideHeader title="Resources"/>
        <h1>Resources</h1>
      </div>
    </div>
  )
}

export default ResourcesPage