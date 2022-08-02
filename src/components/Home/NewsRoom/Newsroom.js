import React from 'react'
import './Newsroom.css'

export default function NewsRoom(props){
    return(
        <div className="news_container">
            <h1>{props.header}</h1>
            <div className="news_topic">
                <img className="news_image" src={props.img} alt="img"></img>
                <div className="news_content">
               <div className="news_title">
                <div className='title'>{props.title}</div>
                
                <div className='news_date'>{props.date}
               </div> 
                </div>
                    <p className="news_description">{props.desc}</p>
                </div>
            </div>
        </div>
    )

}