import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import './Placementstats.css'
import PlacementCard from './PlacementCard';

const PLACEMENT_URL = '/placement'

function Placementstats() {

  const [placementData, setPlacementData] = useState('')
  const [year, setYear] = useState(2019)

  const previousYear = () => {
    if (year > 2005) {
      setYear(year - 1)
    }
  }
  const nextYear = () => {
    if (year < 2021)
      setYear(year + 1)
  }

  useEffect(() => {
    async function getPlacementData() {
      try {
        const response = await axios.get(process.env.REACT_APP_MEC_API + PLACEMENT_URL);
        setPlacementData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPlacementData()
  }, [])

  const csPlacement = placementData && placementData.filter(x => x.no_of_offers.CSE > 0 && x.type_placement === 'placement' && x.year === year);

  return (
    <div className='placementstats'>
      <div className='section__container'>
        <div className='section'>
          <h1 className='section__header'>Placements</h1>
          <div className='section_slider'>
            <BsFillArrowLeftCircleFill onClick={previousYear} className='slider_btn' />
            <h2>{year}</h2>
            <BsFillArrowRightCircleFill onClick={nextYear} className='slider_btn' />
          </div>
          <div className='placement__container'>
            <div className='placementCard_header'>
              <h3>Sl.no</h3>
              <h3>Recruiters</h3>
              <h3>Offers</h3>
            </div>
            {csPlacement && csPlacement.map((comp, id) => (
              <PlacementCard
                id={comp.id}
                key={comp.id}
                slno={id + 1}
                logo={comp.company.logo}
                name={comp.company.name}
                offers={comp.no_of_offers.CSE}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Placementstats