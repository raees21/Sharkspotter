import React, { useState, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';  

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

function Map({width='100%', height='100%', mLat, mLng }) {
    
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey
    });
    const [map, setMap] = useState(null);
      const center = {
        lat: mLat,
        lng: mLng
      };
      const containerStyle = {
        width,
        height
      };
      const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
          map.setZoom(16);
        setMap(map)
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])
    
      return isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
          </GoogleMap>
      ) : <></>
}

export default memo(Map);
