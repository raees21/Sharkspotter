import React from 'react';
import './sightings.css';
import image from '../../images/image.svg';
import Map from '../../components/map/map';

const mockBeachInfo = {
    beachName: 'Muizenberg Beach',
    coordinates: { lat: -34.10864306234767, lng: 18.470190339933083 },
    spottings: [
        { date: '9 July 2022', comment: 'A great white was spotted swimming along the coast, occasionally approaching the beach' },
        {date: '7 July 2022', comment: 'A great white was spotted swimming along the coast'},
        {date: '1 July 2022', comment: 'A great white was spotted swimming along the coast'},
        
    ]
}

function Sightings() {
    const { beachName, coordinates, spottings } = mockBeachInfo;
    const { lat, lng } = coordinates;

    return (
        <>
            <h1 className='main-title'>{beachName}</h1>
            <p className='sub-title'>Shark sighting history</p>
            <section className='map-card'>
                <Map mLat={lat} mLng={lng} />
            </section>
            
            {
            spottings.map(({ date, comment }, index) => (
                <section className='spottings-listing' key={index}>
                    <img className="spottings-icon" src={image} alt='binoculars' />
                    <span className='spottings-text'>
                        <p>Date: {date}</p>
                        <p>{comment}</p>
                    </span>
                </section>
                ))
            }
        </>
    );
}

export default Sightings;