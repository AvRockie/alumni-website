/* import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Hod.css'

const FACULTY_URL = '/faculty'

function Hod() {

  const [faculty, setFaculty] = useState('')

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(process.env.REACT_APP_DEPT_API + FACULTY_URL);
        setFaculty(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  }, [])

  const hod = faculty && faculty.filter(x => x.designation === 'HOD & Professor')
  const hodData = hod[0]

  return (
    <div className='hod'>
      <div className='section__container'>
        <div className='section'>
          <h1 className='section__header'>Head of Department</h1>
        </div>
        <div className='hod_container'>
          <div className='hod_content'>
            <h1>{hodData && hodData.name}</h1>
            <h4>{hodData && hodData.designation}</h4>
            <div className='hod_item'>
              <h3>AREAS OF INTEREST</h3>
              {hodData && hodData.areas_of_interest.map((area, id) => (
                <p key={id}>{area}</p>
              ))}
            </div>
            <div className='hod_item'>
              <h3>CONTACT</h3>
              <p>{hodData && hodData.email}</p>
              <p>{hodData && hodData.contact_no}</p>
            </div>
          </div>
          <div className='hod_image'>
            <img src={hodData && hodData.photo} alt='' />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hod */