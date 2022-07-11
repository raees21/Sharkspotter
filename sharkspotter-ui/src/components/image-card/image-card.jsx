import React from 'react';
import './image-card.css';

import map from '../../images/map.png';

function ImageCard(props)  {
    const {title,text,date,position="right"} = props;

    return (
       <article className={`image-card ${position=="right" ? "image-right" : "image-left"}`}>
            <section className={`image-card-content ${position=="right" ? "margin-right" : "margin-left"}`}>
                <h4 className="image-card-title">{title}</h4>
                <p className="image-card-text">{text}</p>
                <p className="image-card-date">Date: {date}</p>
            </section>
            <img className="image-card-image" src={map} alt="Map"/>
       </article>
    );
}

export default ImageCard;