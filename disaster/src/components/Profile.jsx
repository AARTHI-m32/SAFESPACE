import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { useSelector } from "react-redux";
import { Modal, Button } from 'react-bootstrap';
import Disasterform from "./Disasterform";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [show, setShow] = useState(false);
    const [selectedDisaster, setSelectedDisaster] = useState(null);

    const token = useSelector((state) => state.user.token);

    useEffect(() => {
        if (token) {
            getProfile();
        }
    }, [token]);

    const getProfile = async () => {
        try {
            const response = await axios.get("https://safespace-zjkg.onrender.com/getprofile", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setProfile(response.data.Profile);
            console.log(response.data.Profile);
        } catch (error) {
            console.log(error);
        }
    };

    const handleShow = (disaster) => {
        setSelectedDisaster(disaster);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://safespace-zjkg.onrender.com/disaster/deletedisaster/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("deleted");
            getProfile();
        } catch (error) {
            console.log(error);
        }
    };

    const handleVolunteerDelete = async (volunteerid) => {
        try {
            await axios.delete(`https://safespace-zjkg.onrender.com/volunteer/deletevolunteer/${volunteerid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log("volunteer deleted");
            getProfile();
        } catch (error) {
            console.log(error);
        }
    };
console.log("select",selectedDisaster)
    return (
        <div>
            <Header />
            <h2 className="profilehead">Profile</h2>
            <h3 className="profilehead">Your Posts</h3>
            <div className="disaster">
      
            {profile.disaster && profile.disaster.length > 0 ? (
        profile.disaster.map((i) => {
            const googleMapsUrl = `https://www.google.com/maps?q=${i.location.coordinates[1]},${i.location.coordinates[0]}`;
            return (
                <div key={i._id} className="disaster-card">
                    <h4><b>Disaster Type:</b> {i.disastertype}</h4>
                    <span><b>Place:</b> {i.city}</span>
                    <span><b>Requirements:</b> <br />{i.description}</span>
                    <span><b>Contact Information:</b> <br />{i.contactinfo}</span>
                    <span><b>Date:</b> {new Date(i.date).toLocaleDateString()}</span>
                    <span><b>Time:</b> {i.time}</span>
                    <span><b>Location:</b> <br /></span>
                    <span>Click the coordinates below to view the location on Google Maps:</span>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        {i.location.coordinates[1]}, {i.location.coordinates[0]}
                    </a><br />
                    <button onClick={() => handleDelete(i.id)}>Delete</button>
                    <button onClick={() => handleShow(i)}>Edit</button>
                </div>
            );
        })
    ) : (
        <p>No posts yet🥺</p>
    )}
          </div>

            <h3 className="profilehead">Volunteered Details</h3>
          
   <div className="volunteer">
    {profile.volunteer && profile.volunteer.length > 0 ? (
        profile.volunteer.map((vol) => (
            <div key={vol.id} className="volunteer-card">
                <h4>Disaster Information</h4>
                <span><b>Disaster Type:</b> {vol.disasterDetails.disastertype}</span>
                <span><b>City:</b> {vol.disasterDetails.city}</span>
                <span><b>Contact:</b> {vol.disasterDetails.contactinfo}</span>
                <span><b>Status:</b> {vol.disasterDetails.status}</span><br/>
                <h4>Volunteer Information</h4>
                <span><b>Volunteer Name:</b> {vol.name}</span>
                <span><b>Phone Number:</b> {vol.phoneno}</span>
                <span><b>Age:</b> {vol.age}</span>
                <span><b>Role:</b> {vol.role}</span><br/>
                <button onClick={() => handleVolunteerDelete(vol.id)} id="volbutton">Delete</button>
            </div>
        ))
    ) : (
        <p>No volunteer details available🥺</p>
    )}
</div>

            

            <Modal show={show} onHide={handleClose} className='custom-modal'>
                <Modal.Header id="modalhead">
                    <Modal.Title>Edit your Disaster</Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalform">
                    <Disasterform selectedDisaster={selectedDisaster} />
                </Modal.Body>
                <Modal.Footer id="modalfoot">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;
