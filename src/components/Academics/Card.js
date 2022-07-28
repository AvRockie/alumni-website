import './Card.css';
import React from 'react';


export default function Card(props){
    return(
              
            <div className="info_topic">
                <img className="info_image" src={props.img} alt="img"></img>
                <div className="info_content">
                    <span className="info_title">{props.title}</span>
                    <p className="info_description">{props.desc}</p>
                </div>
            </div>
       
    
    )

}