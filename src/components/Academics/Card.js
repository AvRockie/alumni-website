import './Card.css';
import React from 'react';


export default function Card(){
    return(
    <div className="newscard_container">
        <div className="card_img">
            <img className="img" src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"></img>
            
        </div>
        <div className="card_news">
            <h1>Title Newslllllll</h1>
            <div>Lorem ipsum dolor sit</div>

        </div>
    </div>
    )

}