import React from 'react';

const Disform = () => {
    // Create the Google Maps link
    const latitude = 37.7749;
    const longitude = -122.4194;
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    

    return (
        <div>
            <h1>Disaster Location</h1>
            <p>Click the coordinates below to view the location on Google Maps:</p>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                {latitude}, {longitude}
            </a>
        </div>
    );
};

export default Disform;
