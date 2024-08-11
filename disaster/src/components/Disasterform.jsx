import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

const AddDisasterForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    userid: '',
    name: '',
    disastertype: '',
    city: '',
    locationType: 'Point',
    coordinates: [], // Default coordinates for India
    description: '',
    contactinfo: '',
    date: '',
    status: 'Emergency',
  });

  const [showMap, setShowMap] = useState(false);

  const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prevData) => ({
          ...prevData,
          coordinates: [latitude, longitude],
        }));
      },
      (error) => {
        console.error('Error fetching location:', error);
        alert('Failed to fetch location. Please allow location access.');
      }
    );
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setFormData({
      ...formData,
      coordinates: [lat, lng],
    });
    setShowMap(false); // Hide map after selecting location
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      ...formData,
      location: {
        type: formData.locationType,
        coordinates: formData.coordinates,
      },
    };

    try {
      await axios.post('/api/disasters', dataToSubmit);
      alert('Disaster information submitted successfully!');
      setFormData({
        id: '',
        userid: '',
        name: '',
        disastertype: '',
        city: '',
        locationType: 'Point',
        coordinates: [] ,// Reset to default coordinates for India
        description: '',
        contactinfo: '',
        date: '',
        status: 'Emergency',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit disaster information.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='disaster-form'>
      <div className='form'>
      <div>
        <label>Name:</label><br/>
        <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" required />
      </div>
      <div>
        <label>Disaster Type:</label><br/>
        <input type="text" name="disastertype" value={formData.disastertype} onChange={handleChange} id="type" required />
      </div>
      <div>
        <label>City:</label><br/>
        <input type="text" name="city" value={formData.city} onChange={handleChange} id="city" required />
      </div>
      <div>
        <label>Description:</label><br/>
        <textarea name="description" value={formData.description} onChange={handleChange} id="description" />
      </div>
      <div>
        <label>Contact Info:</label><br/>
        <input type="text" name="contactinfo" value={formData.contactinfo} onChange={handleChange} id="contact" required />
      </div>
      <div>
        <label>Date:</label><br/>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required id="date" />
      </div>
      <div>
        <label>Status:</label><br/>
        <input type="text" name="status" value={formData.status} onChange={handleChange} id="status" />
      </div>

      <div>
        <label>Coordinates:</label><br/>
        <input type="text" name="coordinates" value={formData.coordinates.join(', ')} id="coordinates" readOnly /><br/>
        <button type="button" onClick={handleGetCurrentLocation} id="current-button">
          Use Current Location
        </button>
        <button type="button" onClick={() => setShowMap(!showMap)} id="choose-button">
          {showMap ? 'Hide Map' : 'Choose Location'}
        </button>
      </div>

      {showMap && (
        <div style={{ marginTop: '20px' }}>
          <MapContainer center={formData.coordinates} zoom={5} style={{ height: '600px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={formData.coordinates}>
              <MapClickHandler />
            </Marker>
          </MapContainer>
        </div>
      )}

      <button type="submit" style={{ marginTop: '20px' }} id="dis-submit">
        Submit
      </button>
      </div>
      
    </form>
  );
};

export default AddDisasterForm;
