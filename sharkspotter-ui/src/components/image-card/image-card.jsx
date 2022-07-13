import React from 'react';
import './image-card.css';

import Map from '../map/map';
import Button from '../button/button';

function ImageCard(props)  {
    const {title,text,date,position="right", coordinates: {lat, lng}, id} = props;
    const beachKey = `/sightings/${id}`;
    return (
       <article className={`image-card ${position=="right" ? "image-right" : "image-left"}`}>
            <section className={`image-card-content ${position=="right" ? "margin-right" : "margin-left"}`}>
                <h4 className="image-card-title">{title}</h4>
                <p className="image-card-text">{text}</p>
                <p className="image-card-date">Date: {date}</p>
                <Button link_to={beachKey} type="secondary" text="View More" />
            </section>
            <section className="image-card-image">
                <Map mLat={lat} mLng={lng} />
            </section>
       </article>
    );
}

export default ImageCard;