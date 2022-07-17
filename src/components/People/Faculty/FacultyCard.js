import React from 'react'
import { FiMail } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function FacultyCard({ name, designation, email, photo, id, ktu_id }) {

  const navigate = useNavigate();

  const goToProfile = () => {
    navigate(`/faculty/${id}`);
  }

  return (
    <div className='facultyCard' key={id} onClick={goToProfile}>
      <img className='faculty_img' src={photo} alt='' />
      <h1>{name}</h1>
      <h3>{designation}</h3>
      {email && (
        <a href={`mailto:${email}`}>
          <FiMail />
          {email}
        </a>
      )}
    </div>
  )
}

export default FacultyCard