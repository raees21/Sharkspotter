import React, { useEffect } from 'react';
import './home.css';

import ImageCard from '../../components/image-card/image-card';
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const fakeData = [
    {
        id:1,
        title:"Muizenberg",
        description:"Muizenberg is a small town outside Cape Town and one of South Africa’s best kept secrets. A largely untapped tourist spot,it’s hard to believe Muizenberg is best known for being one of the most popular beaches with one of the most active surfing communities in South Africa.",
        date: "01 July 2022",
        coordinates: {lat: -34.10864306234767, lng: 18.470190339933083},
        position:"left",
        coordinates: { lat: -34.10864306234767, lng: 18.470190339933083 },
        spottings: [
            { date: '9 July 2022', comment: 'A great white was spotted swimming along the coast, occasionally approaching the beach' },
            {date: '7 July 2022', comment: 'A great white was spotted swimming along the coast'},
            {date: '1 July 2022', comment: 'A great white was spotted swimming along the coast'},
        ]
    },
    {
        id:2,
        title:"Muizenberg",
        description:"Muizenberg is a small town outside Cape Town and one of South Africa’s best kept secrets. A largely untapped tourist spot,it’s hard to believe Muizenberg is best known for being one of the most popular beaches with one of the most active surfing communities in South Africa.",
        date: "01 July 2022",
        position:"right",
        coordinates: { lat: -34.10864306234767, lng: 18.470190339933083 },
        spottings: [
            { date: '9 July 2022', comment: 'A great white was spotted swimming along the coast, occasionally approaching the beach' },
            {date: '7 July 2022', comment: 'A great white was spotted swimming along the coast'},
            {date: '1 July 2022', comment: 'A great white was spotted swimming along the coast'},
        ]
        
    },
    {
        id:3,
        title:"Muizenberg",
        description:"Muizenberg is a small town outside Cape Town and one of South Africa’s best kept secrets. A largely untapped tourist spot,it’s hard to believe Muizenberg is best known for being one of the most popular beaches with one of the most active surfing communities in South Africa.",
        date: "01 July 2022",
        position:"left",
        coordinates: { lat: -34.10864306234767, lng: 18.470190339933083 },
        spottings: [
            { date: '9 July 2022', comment: 'A great white was spotted swimming along the coast, occasionally approaching the beach' },
            {date: '7 July 2022', comment: 'A great white was spotted swimming along the coast'},
            {date: '1 July 2022', comment: 'A great white was spotted swimming along the coast'},
            
        ]
    }
]


function Home()  {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate()

    useEffect(() => {
        if(isAuthenticated){
            console.log('YOOOO')
            // <Navigate to="/spotting" />;
            navigate('/spotting')
        }
        
    },[isAuthenticated]);
    

    return (
        <>
            <h1 className='main-title'>Shark Spotter</h1>
            <p className='sub-title'>These are the beaches with the most recent shark sightings</p>
            {
                fakeData.map(({id, title, description, date, position, coordinates}) =>(
                    <ImageCard key={id} id={id} title={title} text={description} date={date} position={position} coordinates={coordinates} />
                ))
            }
        </>
    );
}

export default Home;