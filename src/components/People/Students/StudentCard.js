import React from 'react'

function StudentCard({ ktu_rollno, name }) {
  return (
    <div className='studentCard'>
        <div className='student__avatar'>A</div>
        <div className='student__detils'>
            <h1>{name}</h1>
            <a href='http://localhost:3000/people'>{ktu_rollno}</a>
        </div>
    </div>
  )
}

export default StudentCard