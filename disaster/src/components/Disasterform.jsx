import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { useSelector } from 'react-redux';

const Disasterform = ({ selectedDisaster }) => {
  const [formData, setFormData] = useState({
    name: '',
    disastertype: '',
    city:  '',
    coordinates: [78.9629, 20.5937], // Default coordinates [longitude, latitude] (India's center)
    description: '',
    contactinfo:  '',
    date:'',
    time: '',
    status: '',
  });

  const token = useSelector((state) => state.user.token);

  const [showMap, setShowMap] = useState(false);

console.log("select",selectedDisaster)
  const handleGetCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prevData) => ({
          ...prevData,
          coordinates: [longitude, latitude], // Set as [longitude, latitude]
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
      coordinates: [lng, lat], // Set as [longitude, latitude]
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
  
  useEffect(() => {
    if (selectedDisaster) {
      setFormData({
        name: selectedDisaster.name || '',
        disastertype: selectedDisaster.disastertype || '',
        city: selectedDisaster.city || '',
        coordinates: selectedDisaster.location.coordinates || [78.9629, 20.5937],
        description: selectedDisaster.description || '',
        contactinfo: selectedDisaster.contactinfo || '',
        date: '',
        time: selectedDisaster.time || '',
        status: selectedDisaster.status || '',
      });
    }
  }, [selectedDisaster]);
  const handleSubmit = async (e) => {
    e.preventDefault();
      const payload = {
        name: formData.name,
        disastertype: formData.disastertype,
        city: formData.city,
        coordinates: formData.coordinates, // Send coordinates as [longitude, latitude]
        description: formData.description,
        contact: formData.contactinfo,
        date: formData.date,
        time: formData.time,
        status: formData.status || 'Emergency',
      };
 console.log("pay;load",payload)
    try{
      if(selectedDisaster ){
        const edit = await axios.put(`https://safespace-zjkg.onrender.com/disaster/editdisaster/${selectedDisaster.id}`,payload,{
          headers : {
            Authorization : `Bearer ${token}`
          }
        })
        console.log("edited");
      }
      else
      { const add = await axios.post(
        'https://safespace-zjkg.onrender.com/disaster/adddisaster',
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log('Disaster registered');}
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit disaster information.');
    }
    window.location='/disaster'}
  


  return (
    <form onSubmit={handleSubmit} className='disaster-form'>
      <div className='form'>
        <div>
          <label>Name:</label><br/>
          <input  type="text"  name="name"  value={formData.name} onChange={handleChange}  required/>
        </div>
        <div>
          <label>Disaster Type:</label><br/>
          <input
            type="text"
            name="disastertype"
            value={formData.disastertype}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label><br/>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label><br/>
          <textarea id="textarea"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Info:</label><br/>
          <input
            type="text"
            name="contactinfo"
            value={formData.contactinfo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date:</label><br/>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Time:</label><br/>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Status:</label><br/>
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Coordinates:</label><br/>
          <input
            type="text"
            name="coordinates"
            value={formData.coordinates.join(', ')} // Display as a comma-separated string
            readOnly
          />
          <br/>
          <button id="current-button" type="button" onClick={handleGetCurrentLocation}>
            Use Current Location
          </button>
          <button id="choose-button" type="button" onClick={() => setShowMap(!showMap)}>
            {showMap ? 'Hide Map' : 'Choose Location'}
          </button>
        </div>

        {showMap && (
          <div style={{ marginTop: '20px' }}>
            <MapContainer
              center={[formData.coordinates[1], formData.coordinates[0]]} // Set center as [latitude, longitude]
              zoom={5}
              style={{ height: '600px', width: '100%' }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[formData.coordinates[1], formData.coordinates[0]]}>
                <MapClickHandler />
              </Marker>
            </MapContainer>
          </div>
        )}

        <button id="dis-submit" type="submit" style={{ marginTop: '20px' }}>
          {(selectedDisaster)?"Edit":"Submit"}
        </button>
      </div>
    </form>
  );
};

export default Disasterform;
