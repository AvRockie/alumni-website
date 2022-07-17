import React, { useRef } from 'react'
import Slider from "react-slick";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

import TopperCard from './TopperCard/TopperCard'

import './Toppers.css'

const toppersData = [
    {
        id: 1,
        name: 'John Wick',
        image: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/tivvhptvbuc6cs3l_1596777854.jpeg',
        semester: '3',
        sgpa: 10
    },
    {
        id: 2,
        name: 'Jason Bourne',
        image: 'https://w0.peakpx.com/wallpaper/855/287/HD-wallpaper-jason-bourne-2016-poster-movie-jason-bourne-matt-damon-blue-actor.jpg',
        semester: '3',
        sgpa: 10
    },
    {
        id: 3,
        name: 'John Wick',
        image: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/tivvhptvbuc6cs3l_1596777854.jpeg',
        semester: '3',
        sgpa: 10
    },
    {
        id: 4,
        name: 'Jason Bourne',
        image: 'https://w0.peakpx.com/wallpaper/855/287/HD-wallpaper-jason-bourne-2016-poster-movie-jason-bourne-matt-damon-blue-actor.jpg',
        semester: '3',
        sgpa: 10
    },
    {
        id: 5,
        name: 'John Wick',
        image: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/tivvhptvbuc6cs3l_1596777854.jpeg',
        semester: '3',
        sgpa: 10
    },
    {
        id: 2,
        name: 'Jason Bourne',
        image: 'https://w0.peakpx.com/wallpaper/855/287/HD-wallpaper-jason-bourne-2016-poster-movie-jason-bourne-matt-damon-blue-actor.jpg',
        semester: '3',
        sgpa: 10
    },
    {
        id: 6,
        name: 'John Wick',
        image: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/tivvhptvbuc6cs3l_1596777854.jpeg',
        semester: '3',
        sgpa: 10
    },
    {
        id: 7,
        name: 'Jason Bourne',
        image: 'https://w0.peakpx.com/wallpaper/855/287/HD-wallpaper-jason-bourne-2016-poster-movie-jason-bourne-matt-damon-blue-actor.jpg',
        semester: '3',
        sgpa: 10
    },
]

function Toppers() {

    const sliderRef = useRef();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
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
        <div className='toppers'>
            <div className='section__container'>
                <div className='section'>
                    <h1 className='section__header '>Current Toppers</h1>
                    <div className='toppers__container'>
                        <BsFillArrowLeftCircleFill onClick={gotoPrev} className='topper_arrow_left'/>
                        <div className='toppers_slider'>
                            <Slider {...settings}  ref={sliderRef}>
                                {toppersData.map((tpr) => (
                                    <TopperCard 
                                        key={tpr.id}
                                        name={tpr.name}
                                        image={tpr.image}
                                        semester={tpr.semester}
                                        sgpa={tpr.sgpa}
                                    />
                                ))}
                            </Slider>
                        </div>
                        <BsFillArrowRightCircleFill onClick={gotoNext} className='topper_arrow_right'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toppers