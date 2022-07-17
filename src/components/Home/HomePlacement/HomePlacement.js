import React from 'react'

import './HomePlacement.css'
import HomePlacementCard from './HomePlacementCard';

function HomePlacement() {


    return (
        <div className='homePlacement'>
            <div className='section__container'>
                <div className='section'>
                    <h1 className='section__header'>Placement Highlights</h1>
                    <div className='homePlace__slider'>
                        <HomePlacementCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePlacement