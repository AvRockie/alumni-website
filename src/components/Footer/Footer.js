import React from 'react'
import './Footer.css'

import meclogo from '../../assets/png/meclogo.png'
import facebook from '../../assets/png/facebook.png'
import instagram from '../../assets/png/instagram.png'
import youtube from '../../assets/png/youtube.png'
import linkedin from '../../assets/png/linkedin.png'
//import { Link } from "react-router-dom";


function Footer() {
    
  return (
    <div className='Footer_container'>
        <div className='footer_top'>
            <h1>Quick Links</h1>
             </div>
        <div className='footer_bottom'>
            <div className='footer_logo'>
                <img className='footer_img' src={meclogo} alt=" " />
            </div>
            <div className='footer_social'>
                <img  src={facebook} alt=" facebook"></img>
                <img  src={youtube} alt="youtube"></img>
                <img src={instagram} alt="instagram"></img>
                <img src={linkedin} alt="linkedin"></img>
            </div>
            <div className='footer_contact'>
                <h1>Contact Us</h1>
                <p>The Principal<br/>
                    Model Engineering College<br/>
                    Thrikkakara, Kochi<br/>
                    Kerala, PIN: 682021<br/>
                    Contact Id: principal@mec.ac.in<br/>
                    Phone/Fax: +91-484-2577379</p>
            </div>

        </div>
     
    </div>

  )
}

export default Footer