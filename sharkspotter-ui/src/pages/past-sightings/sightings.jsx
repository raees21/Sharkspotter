import React, { useEffect, useState } from 'react';
import './sightings.css';
import image from '../../images/image.svg';
import Map from '../../components/map/map';
import { useParams } from 'react-router-dom';
import { DateTime } from 'luxon';
import { useAuth } from '../../services';


const baseUrl = 'https://localhost:7213';

function Sightings() {
    const { beachId } = useParams();
    const [beachData, setBeachData] = useState([]);
    const [beachName, setBeachName] = useState();
    const [coordinates, setBeachCoordinates] = useState({ lat: 0, lng: 0 });
    const { getAccessToken } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            const token = await getAccessToken();
            const spottingUrl = `${baseUrl}/api/v1/spottings/spottingsByBeach${beachId}`; //TODO to be changed to production url
            const beachUrl = `${baseUrl}/api/v1/beaches/${beachId}`;
            const method = 'GET';
            const headers = {
                authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'application/json;charset=UTF-8',
                'request-time': DateTime.now().toISO({ includeOffset: true })
            }
            const responseSpotting = await fetch(spottingUrl, { method, headers });
            const spottingData = await responseSpotting.json();
            const responseBeach = await fetch(beachUrl, { method, headers });
            const beachData = await responseBeach.json();
            const mappedSpottingData = spottingData.map(({ spottingAt, comment }) => {
                return {
                    date: spottingAt,
                    comment
                };
            })
            const coordinates = { lat: beachData.latitude, lng: beachData.longitude }
            setBeachName(beachData.beach_name);
            setBeachCoordinates(coordinates);
            setBeachData(mappedSpottingData);
        }

        fetchData();
        },[]);

    return (
        <>
            <h1 className='main-title'>{beachName}</h1>
            <p className='sub-title'>Shark sighting history</p>
            <section className='map-card'>
                <Map mLat={coordinates.lat} mLng={coordinates.lng} />
            </section>
            
            {
            beachData.map(({ date, comment }, index) => (
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
