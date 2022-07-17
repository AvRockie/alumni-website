import React from 'react'
import { MdOutlineMail } from "react-icons/md";

import './ClubTeam.css'

function ClubTeam({ faculty_email, faculty_in_charge, student_designation, student_email, student_in_charge, core_team }) {

  return (
    <div className='clubTeam'>
        <div className='clubTeam__people'>
            <div className='clubTeam__card'>
                {/* <img src="https://avatars.githubusercontent.com/u/43471295?v=4" alt="" /> */}
                <div className='clubTeam__card_content'>
                    <h1>{faculty_in_charge}</h1>
                    <p>Faculty Advisor</p>
                    <div className='clubCard_email'>
                        <MdOutlineMail color='#AE9142'/>
                        <a href={`mailto:${faculty_email}`}>{faculty_email}</a>
                    </div>
                </div>
            </div>
            <div className='clubTeam__card'>
                {/* <img src="https://avatars.githubusercontent.com/u/43471295?v=4" alt="" /> */}
                <div className='clubTeam__card_content'>
                    <h1>{student_in_charge}</h1>
                    <p>{student_designation}</p>
                    <div className='clubCard_email'>
                        <MdOutlineMail color='#AE9142'/>
                        <a href={`mailto:${student_email}`}>{student_email}</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='clubTeam__members'>
            {core_team && core_team.map((core, id) => (
                <div className='club_member' key={id}>
                    <h3 className='club_member_pos'>{core.designation}</h3>
                    <h3 className='club_member_name'>{core.name}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ClubTeam