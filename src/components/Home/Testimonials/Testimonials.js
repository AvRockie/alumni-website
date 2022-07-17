import React, { useRef } from 'react'
import Slider from "react-slick";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

import TestimonialCard from './TestimonialCard';

import './Testimonials.css'


const testimonialData = [
    {
        id: 1,
        name: 'Jack Sparrow',
        designation: 'Software Analyst, Google',
        image: 'https://cdn.mos.cms.futurecdn.net/8sxoFaLsiNaU4gXBfHiqiJ.jpg',
        text: 'Getting a shout-out from an influencer, celebrity, or well-known brand all counts as an influencer testimonial example. This can be a highly beneficial and powerful example of how your business serves well-known people in your industry. ',
        batch: 'CS, 2014-2018',
    },
    {
        id: 2,
        name: 'Daenerys Targaryen',
        designation: 'Developer, Amazon',
        image: 'https://media.glamour.com/photos/5cec17dd583d36831269eb26/4:3/w_2367,h_1775,c_limit/emilia-clarke-game-of-thrones.jpg',
        text: 'Getting a shout-out from an influencer, celebrity, or well-known brand all counts as an influencer testimonial example. This can be a highly beneficial and powerful example of how your business serves well-known people in your industry. ',
        batch: 'CS, 2014-2018',
    },
]

function Testimonials() {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: false,
        pauseOnHover: false
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    }

    return (
        <div className='testimonials'>
            <div className='section__container'>
                <div className='section'>
                    <h1 className='section__header'>Testimonials</h1>
                    <IoIosArrowDropleftCircle onClick={gotoPrev} className='testimonial__prev'/>
                    <div className='testimonials__slider'>
                        <Slider {...settings} ref={sliderRef}>
                            {testimonialData.map((test) => (
                                <TestimonialCard 
                                    id={test.id}
                                    key={test.id}
                                    name={test.name}
                                    text={test.text}
                                    batch={test.batch}
                                    image={test.image}
                                    designation={test.designation}
                                />
                            ))}
                        </Slider>
                    </div>
                    <IoIosArrowDroprightCircle onClick={gotoNext} className='testimonial__next'/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials