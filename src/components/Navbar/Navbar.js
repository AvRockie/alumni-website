import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { TabContext } from '../../contexts/TabContext'

import './Navbar.css'

import meclogo from '../../assets/png/meclogo.png'
// import logo_white from '../../assets/svg/logo_white.svg'

const navItems = [
  {
    route: '',
    name: 'Home',
  },
  {
    route: 'about',
    name: 'About',
  },
  {
    route: 'academics',
    name: 'Newsroom',
    
  },
  {
    route: 'people',
    name: 'Events',
    
  },
  {
    route: 'placements',
    name: 'Chapters',
   
  },
  {
    route: 'facilities',
    name: 'Gallery',
  },
 
  {
    route: 'activities',
    name: 'Engage',
  
  },
  {
    route: 'contact',
    name: 'Contact Us',
  },
]

function Navbar() {

  const { updateDropdownTab } = useContext(TabContext);

  let navigate = useNavigate()

  return (
    <div className='navbar'>
      <div className='navbar__header'>
        <div className='nav_hr' />
        <div className='navheader__component'>
          <div className='nav_logo'>
            <img src={meclogo} alt=" " className='navbar_img'/>
          </div>
          <div className="nav_title"> Govt. Model Engineering College<div className='secondary'>Alumni Association</div></div>
          <div className="nav_buttons">
            <button onClick={() => navigate('/admin-login')} className='button_login'>Login</button>
            <button onClick={() => navigate('/admin-register')} className='button_reg'>Register</button>
          </div>
        </div>
      </div>
      <div className='navbar_comp'>
        {navItems.map((nav, id) => (
            <NavLink 
              key={id} 
              to={`/${nav.route}`} 
              className='nav__link'
              style={({ isActive }) => ({
                color: isActive ? 'var(--secondary-color)' : 'rgba(0,0,0)',
                fontWeight: isActive ? '800' : '600',
              })}
            >
              <span onClick={() => updateDropdownTab(1)}>{nav.name}</span>
              <div className='navDropdown'>
                {nav.dropdown && nav.dropdown.map((drop, idd) => (
                  <NavLink 
                    key={idd} 
                    to={`/${nav.route}`} 
                    className='nav__dropdown_link'
                    onClick={() => updateDropdownTab(drop.tab)}
                  >
                    {drop.name}
                  </NavLink>
                ))}
              </div>
            </NavLink>
        ))}
      </div>
      
    </div>
  )
}

export default Navbar