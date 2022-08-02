import React, { useState, useEffect } from 'react'
import axios from 'axios'


import IdCard from '../../components/IdCard/IdCard.js'
import './FacultyPage.css'
import cardData from '../../data/cardData.js'

const FACULTY_URL = '/faculty'

function FacultyPage() {

    const [faculty, setFaculty] = useState('')

    


    const sortedFaculty = faculty && faculty.sort(function (a, b) {   
        return a.designation_rank - b.designation_rank || a.order_no - b.order_no;
    });

    return (
        <div className='faculty'>
            <div className='section__container'>
                <div className='section'>
                    <h1 className='section__header'>Faculty</h1>
                    <div className='faculty_info'>
                        

                        {
                        
              cardData.map((cd) => (
                <IdCard
                  key={cd.id}
                  props={cd}
                />
            ))
            }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FacultyPage