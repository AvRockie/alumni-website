import React from 'react'
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


import "./IdCard.css"

function IdCard({props}) {

  const navigate = useNavigate();

  

  return (
    <div className='facultyCard'   >
      <img className='faculty_img' src={props.img} alt=''></img>
      <h1>{props.name}</h1>
      <h3>{props.id}</h3>
      <h3>{props.mail}</h3>
    </div>
  )
}

export default IdCard