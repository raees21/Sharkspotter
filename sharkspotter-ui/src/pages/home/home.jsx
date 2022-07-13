import './home.css';
import React, { useState, useEffect } from 'react';
import ImageCard from '../../components/image-card/image-card';
import { useAuth, request } from '../../services';

const fakeData = [
    {
        id:1,
        title:"Muizenberg",
        description:"Muizenberg is a small town outside Cape Town and one of South Africa’s best kept secrets. A largely untapped tourist spot,it’s hard to believe Muizenberg is best known for being one of the most popular beaches with one of the most active surfing communities in South Africa.",
        date: "01 July 2022",
        coordinates: {lat: -34.10864306234767, lng: 18.470190339933083},
        position:"left"
    },
    {
        id:2,
        title:"Muizenberg",
        description:"Muizenberg is a small town outside Cape Town and one of South Africa’s best kept secrets. A largely untapped tourist spot,it’s hard to believe Muizenberg is best known for being one of the most popular beaches with one of the most active surfing communities in South Africa.",
        date: "01 July 2022",
        coordinates: {lat: -34.10864306234767, lng: 18.470190339933083},
        position:"right"
    },
    {
        id:3,
        title:"Muizenberg",
        description:"Muizenberg is a small town outside Cape Town and one of South Africa’s best kept secrets. A largely untapped tourist spot,it’s hard to believe Muizenberg is best known for being one of the most popular beaches with one of the most active surfing communities in South Africa.",
        date: "01 July 2022",
        coordinates: {lat: -34.10864306234767, lng: 18.470190339933083},
        position:"left"
    }
]


function Home() {
    const [beachData, setBeachData] = useState();
    const { getAccessToken } = useAuth();
    // useEffect(() => {
    //     ( async () => {
    //         const accessToken = getAccessToken();
    //         console.log(accessToken);
    //     })()
    // },[])

    // authorization: `Bearer ${token}`,
    useEffect(() => {
        const fetchData = async () => {
            const token = "hello" || getAccessToken();
            const baseUrl = 'https://localhost:7213' //TODO to be changed to production url
            const method = 'GET';
            const endpoint = '/api/v1/beaches'
            const options = {
                headers: {
                    'Access-Control-Allow-Origin' : 'http://localhost:8080'
                }
            };
            const response = await request({ baseUrl, method, endpoint, options });
            const data = response.json();
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
            console.log(data,mappedData);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1 className='main-title'>Shark Spotter</h1>
            <p className='sub-title'>These are the beaches with the most recent shark sightings</p>
            {
                fakeData.map(({id, title, description, date, position, coordinates}) =>(
                    <ImageCard key={id} title={title} text={description} date={date} position={position} coordinates={coordinates} />
                ))
            }
        </>
    );
}

export default Home;