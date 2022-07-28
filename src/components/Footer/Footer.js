import React from 'react'
import './Footer.css'

import meclogo from '../../assets/png/meclogo.png'
import facebook from '../../assets/png/facebook.png'
import instagram from '../../assets/png/instagram.png'
import youtube from '../../assets/png/youtube.png'
import linkedin from '../../assets/png/linkedin.png'
import { Link } from "react-router-dom";


function Footer() {
    
  return (
    <div className='Footer_container'>
        <div className='footer_top'>
            <h1>Quick Links</h1>
            <div className='footer_top_content'>
                {/* <Link to='faculty/login'>Faculty Login</Link>            
                <Link to='clubs/login'>Club Login</Link>            
                <a href="https://ktu.edu.in/" target='_blank' rel='noreferrer'>KTU</a>
                <a href="http://ihrd.ac.in/" target='_blank' rel='noreferrer'>IHRD</a>
                <a href="https://edu.ezygo.app/#/institute" target='_blank' rel='noreferrer'>EZYGO</a>
                <a href="https://moodle.mec.ac.in/" target='_blank' rel='noreferrer'>MOODLE</a> */}
            </div>
            
        </div>
        <div className='footer_bottom'>
            <div className='footer_logo'>
                <img className='footer_img' src={meclogo} alt=" " />
            </div>
            <div className='footer_social'>
                <img  src={facebook} alt=" facebook"></img>
                <img  src={youtube}></img>
                <img src={instagram}></img>
                <img src={linkedin}></img>
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