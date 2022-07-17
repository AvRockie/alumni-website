import React from 'react'

import  { useNavigate } from 'react-router-dom'

import './HomeFacilities.css'

function HomeFacilities() {

    let navigate = useNavigate()

    return (
      <div className='homeFacilities'>
        <div className='home_hod_section__container'>
            <div className='white_section__header_facility'>Facility</div>
            <div className='home_facility_info'>
                <div className='home_facility_card'>
                    <div className='home_facility_content'>
                        <h1>Advanced computing lab</h1>
                        <p>Computer network of the advanced computing lab supports IPv4 and IPv6. The heterogeneous network has systems within experimental project for network monitoring and maintenance with intelligent networks. The college connects to the internet through leased lines.</p>
                    </div>
                    <div className='home_facility_image'>
                        <img className='home_facility__img' src='https://avatars.githubusercontent.com/u/43471295?v=4' alt='' />  
                    </div>
                </div>

                <div className='home_facility_card'>
                    <div className='home_facility_image'>
                        <img className='home_facility__img' src='https://avatars.githubusercontent.com/u/43471295?v=4' alt='' />  
                    </div>
                    <div className='home_facility_content'>
                        <h1>Computer hardware lab</h1>
                        <p>Equipped with 80386/486/P II based systems, Add-on cards, PC diagnostic aids, serial cards, sound blaster cards, DSP kits, PC trainer, IDE & SCSI cards and several prototype motherboards.</p>
                    </div>
                </div>
                <div className='home_facility_card'>
                    <div className='home_facility_content'>
                        <h1>Own web server</h1>
                        <p>We host our own Web Server, FTP Server and Mail Server powered by Debian. Our lab is equipped with a SGI workstation, a RAID array, an Apple PC and a GPS which is a part of our GIS lab.</p>
                    </div>
                    <div className='home_facility_image'>
                        <img className='home_facility__img' src='https://avatars.githubusercontent.com/u/43471295?v=4' alt='' />  
                    </div>
                </div>
                <button className='facility_btn' onClick={() => navigate('facilities')}>View All Facilities</button>
            </div>
        </div>
          
      </div>
    )
  }

export default HomeFacilities