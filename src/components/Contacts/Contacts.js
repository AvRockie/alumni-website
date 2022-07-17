import React from 'react'

import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

import './Contacts.css'

function Contacts() {
  return (
    <div className='contacts'>
        <div className='section__container'>
            <div className='section'>
                <h1 className='section__header'>Contact Us</h1>
                <div className='contacts_container'>
                  <div className='contact_info'>
                    <div className='contact_header'>
                      <h1>Contact Details</h1>
                      <p>lorem ipsum doler amor helow by heldsgs</p>
                    </div>
                    <div className='contact_contents'>
                      <div className='contact_item'>
                        <FiPhone className='contact__icon'/>
                        <a href='tel:+919998887777'>+91 9998887777</a>
                      </div>
                      <div className='contact_item'>
                        <FiMail className='contact__icon'/>
                        <a href='mailto:janedoe@mec.ac.in' target='_blank' rel="noreferrer">janedoe@mec.ac.in</a>
                      </div>
                      <div className='contact_item'>
                        <FiMapPin className='contact__icon'/>
                        <a href='https://www.google.com/maps/place/Government+Model+Engineering+College/@10.0167876,76.3176257,15.03z/data=!4m19!1m13!4m12!1m4!2m2!1d76.3323983!2d9.9686122!4e1!1m6!1m2!1s0x3b080c5006491601:0xcf23e14245d4694d!2smec!2m2!1d76.3285124!2d10.0283637!3m4!1s0x3b080c5006491601:0xcf23e14245d4694d!8m2!3d10.0283637!4d76.3285124' target='_blank' rel="noreferrer">Model Engineering College Road, Karimakkad, Thrikkakara, Edappally, Kochi, Kerala 682021</a>
                      </div>
                    </div>
                    <div className='circle1' />
                    <div className='circle2' />
                    <div className='circle3' />
                  </div>
                  <div className='contact_map'>
                    <img src='https://images.unsplash.com/photo-1562504208-03d85cc8c23e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
                  </div>
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contacts