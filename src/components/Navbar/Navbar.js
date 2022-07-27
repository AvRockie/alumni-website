import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

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
    /* dropdown: [
      {
        tab: 1,
        name: 'POs',
      },
      {
        tab: 2,
        name: 'Courses Offered',
      },
      {
        tab: 3,
        name: 'Syllabus',
      },
    ] */
  },
  {
    route: 'people',
    name: 'Events',
    /* dropdown: [
      {
        tab: 1,
        name: 'Head of Department',
      },
      {
        tab: 2,
        name: 'Faculty',
      },
      {
        tab: 3,
        name: 'Students',
      },
      {
        tab: 4,
        name: 'Alumni',
      },
    ] */
  },
  {
    route: 'placements',
    name: 'Chapters',
    /* dropdown: [
      {
        tab: 1,
        name: 'Why MEC?',
      },
      {
        tab: 2,
        name: 'Placement Statistics',
      },
      {
        tab: 3,
        name: 'Internship Statistics',
      }
    ] */
  },
  {
    route: 'facilities',
    name: 'Gallery',
  },
  // {
  //   route: 'resources',
  //   name: 'Resources',
  // },
  {
    route: 'activities',
    name: 'Engage',
    /* dropdown: [
      {
        tab: 1,
        name: 'Achievements',
      },
      {
        tab: 2,
        name: 'Student Clubs',
      },
      {
        tab: 3,
        name: 'Projects',
      },
      {
        tab: 4,
        name: 'Events',
      }
    ] */
  },
  {
    route: 'contact',
    name: 'Contact Us',
  },
]

function Navbar() {

  const { updateDropdownTab } = useContext(TabContext);

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
            <button className='button_login'>Login</button>
            <button className='button_reg'>Register</button>
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