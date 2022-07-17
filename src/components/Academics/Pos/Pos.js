import React from 'react'

import './Pos.css'

import academicsData from '../../../data/academicsData'

function Pos() {
    
  return (
    <div className='pos'>
        <div className='section__container'>
            <div className='section'>
                <h1 className='section__header'>Program Educational Objectives</h1>
                <div className='pos_section'>
                    {academicsData.PEO.map((peo) => (
                        <div className='pos_div' key={peo.id}>
                            <p className='about__p primary bold'>{peo.id}:</p>
                            <p className='about__p'>{peo.o}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className='section'>
                <h1 className='section__header'>Program Specific Outcomes</h1>
                <div className='pos_section'>
                    {academicsData.PSO.map((pso) => (
                        <div className='pos_div' key={pso.id}>
                            <p className='about__p primary bold'>{pso.id}:</p>
                            <p className='about__p'>{pso.o}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className='section'>
                <h1 className='section__header'>Program Outcomes</h1>
                <div className='pos_section'>
                    {academicsData.PO.map((po) => (
                        <div className='pos_div' key={po.id}>
                            <p className='about__p primary bold'>{po.id}:</p>
                            <p className='about__p'>{po.o}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pos