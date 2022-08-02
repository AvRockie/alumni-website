import React, { useRef } from 'react'
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import slideimage1 from '../../../assets/images/college.jpg'
import slideimage2 from '../../../assets/images/class sv.png'


import SingleSlide from './SingleSlide/SingleSlide';

import './ImageSlider.css'


const sliderData = [
    {
        id: 1,
        title:"CSA",
        desc:"The Department of Computer Science & Engineering established in the year 1984, was the first CSE department introduced in Kerala. For the last three decades, the department has been imparting state-of-the-art education, training and research in the.",
        image: slideimage1,
    },
    {
        id: 2,
        title:"CSA",
        desc:"The Department of Computer Science & Engineering established in the year 1984, was the first CSE department introduced in Kerala. For the last three decades, the department has been imparting state-of-the-art education, training and research in the.",
        image: slideimage2,
    },
    {
        id: 3,
        title:"CSA",
        desc:"The Department of Computer Science & Engineering established in the year 1984, was the first CSE department introduced in Kerala. For the last three decades, the department has been imparting state-of-the-art education, training and research in the.",
        image:"https://images.unsplash.com/photo-1589982334506-3cc7f62ffa6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
        id: 4,
        title:"CSA",
        desc:"The Department of Computer Science & Engineering established in the year 1984, was the first CSE department introduced in Kerala. For the last three decades, the department has been imparting state-of-the-art education, training and research in the.",
        image:"https://images.unsplash.com/photo-1465433360938-e02f97448763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
        id: 5,
        title:"Slytherin",
        desc:"The Department of Computer Science & Engineering established in the year 1984, was the first CSE department introduced in Kerala. For the last three decades, the department has been imparting state-of-the-art education, training and research in the.",
        image:"https://images.unsplash.com/photo-1594384151968-e1616fa703ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
]

function ImageSlider() {

    const sliderRef = useRef();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        fade: true,
        pauseOnHover: false
    };

    const gotoNext = () => {
        sliderRef.current.slickNext();
    }

    const gotoPrev = () => {
        sliderRef.current.slickPrev();
    }

  return (
    <div className='imageSlider'>
        <IoIosArrowBack onClick={gotoPrev} className='imageSlider__prev'/>
        <div className='imageSlider__container'>
            <Slider {...settings}  ref={sliderRef}>
                {sliderData.map((slide) => (
                    <SingleSlide 
                        key={slide.id}
                        title={slide.title}
                        desc={slide.desc}
                        image={slide.image}
                    />
                ))}
            </Slider>
        </div>
        <IoIosArrowForward onClick={gotoNext} className='imageSlider__next'/>
    </div>
  )
}

export default ImageSlider