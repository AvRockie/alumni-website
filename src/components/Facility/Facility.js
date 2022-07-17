import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './Facility.css'
import FacilityCard from './FacilityCard'

const FACILITIES_URL = '/facilities'

function Facility() {
    const [facilities, setFacilities] = useState([])

    useEffect(() => {
        async function getFacilities() {
            try {
                const response = await axios.get(process.env.REACT_APP_DEPT_API + FACILITIES_URL);
                setFacilities(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        getFacilities()
    }, [])

    return (
        <div className='facility'>
            <div className='section__container'>
                <div className='section'>
                    <h1 className='section__header'>Facilities</h1>
                    <p className='about__p'>MEC has excellent infrastructural facilities and well maintained laboratories. There are 150 computers in two software development labs with varying processing powers from 500Hz to 2.5GHz running Linux and Windows and 1 Sun Ultra Sparc Server running Solaris OS. Thin clients based on Linux Terminal Server Project LTSP with both Pentium based PCs and Sparc based java boxes as clients. Small Beowulf cluster and a few of our lab computers run openMosix clustering. Grid computing is implemented. Lab contains the Dual Processor Industry Standard Blade Server containing 6 Server Blades with clusters running Hadoop and Sector/Sphere and 8 64bit or Dual Processor Rack Mounted Server in addition to 3 IBM X series servers. Two Graphics Processing Units GPUs are being used - Tesla C2070 and GeForce GTX480. </p>
                    <div className='facility_container'>
                        {facilities && facilities.map(fac => (
                            <FacilityCard key={fac._id} title={fac.title} description={fac.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Facility