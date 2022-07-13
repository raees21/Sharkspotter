import './home.css';
import React, { useState, useEffect } from 'react';
import ImageCard from '../../components/image-card/image-card';
import { useAuth } from '../../services';
import fetch from 'node-fetch';
import { DateTime } from 'luxon';

function Home() {
    const [beachData, setBeachData] = useState([{coordinates: { lat: 0, lng: 0 },}]);
    const { getAccessToken } = useAuth();
    useEffect(() => {
        const fetchData = async () => {
            const token = '';
            const baseUrl = 'https://localhost:7213/api/v1/beaches' //TODO to be changed to production url
            const method = 'GET';
            const headers = {
                "authorization": `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'request-time': DateTime.now().toISO({ includeOffset: true })
            }
            const response = await fetch(baseUrl, { method, headers });
            const data = await response.json();
            const mappedData = data.map(({ beachid, latitude, longitude, beach_name, description }, index) => {
                return {
                    id: beachid,
                    title: beach_name,
                    coordinates: { lat: latitude, lng: longitude },
                    position: index % 2 == 0 ? "left" : "right",
                    date: new Date().toString().split('GMT')[0],
                    description
                }
            })
            setBeachData(mappedData);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className='main-title'>Shark Spotter</h1>
            <p className='sub-title'>These are the beaches with the most recent shark sightings</p>
            {
                beachData.map(({id, title, description, date, position, coordinates},index) =>(
                    <ImageCard key={index} beachId={id}  title={title} text={description} date={date} position={position} coordinates={coordinates} />
                ))
            }
        </>
    );
}

export default Home;