import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function TestimonialCard({ id, name, text, designation, image, batch }) {
  return (
    <div className='testimonialCard' key={id}>
      <div className='testimonial_img'>
        <img src={image} alt="" />
      </div>
      <div className='testimonial_content'>
        <div className='test_text'>
          <ImQuotesLeft className='quotes_left'/>
          <p>{text}</p>
          <ImQuotesRight className='quotes_right' />
        </div>
        <h1>{name}</h1>
        <h2>{batch}</h2>
        <h3>{designation}</h3>
      </div>
    </div>
  )
}

export default TestimonialCard