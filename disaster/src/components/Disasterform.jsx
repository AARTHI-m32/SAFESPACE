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
    coordinates: [20.5937, 78.9629], // Default coordinates for India
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
        coordinates: [20.5937, 78.9629], // Reset to default coordinates for India
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleChange} required />
      </div>
      <div>
        <label>User ID:</label>
        <input type="text" name="userid" value={formData.userid} onChange={handleChange} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Disaster Type:</label>
        <input type="text" name="disastertype" value={formData.disastertype} onChange={handleChange} required />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Contact Info:</label>
        <input type="text" name="contactinfo" value={formData.contactinfo} onChange={handleChange} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" name="status" value={formData.status} onChange={handleChange} />
      </div>

      <div>
        <label>Coordinates:</label>
        <input type="text" name="coordinates" value={formData.coordinates.join(', ')} readOnly />
        <button type="button" onClick={handleGetCurrentLocation}>
          Use Current Location
        </button>
        <button type="button" onClick={() => setShowMap(!showMap)}>
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

      <button type="submit" style={{ marginTop: '20px' }}>
        Submit
      </button>
      
    </form>
  );
};

export default AddDisasterForm;
