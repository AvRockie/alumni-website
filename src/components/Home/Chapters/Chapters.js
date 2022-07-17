import React from 'react'

export default function NewsRoom(props){
    return(
        <div className="news_container">
            <h1>Chapters</h1>
            <div className="news_topic">
                <img className="news_image" src={props.img} alt="img"></img>
                <div className="news_content">
                    <span className="news_title">{props.title}</span>
                    <p className="news_description">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}