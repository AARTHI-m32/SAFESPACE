import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios"
import { useSelector } from "react-redux"

const Profile = () => {

    const [profile,setProfile] = useState({})
    const token = useSelector((state) => state.user.token)

    useEffect (() => {
        if(token)
        getProfile()
    },[token])

    const getProfile = async() => {
        try{
            const response = await axios.get("https://safespace-zjkg.onrender.com/getprofile",{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            setProfile(response.data.Profile)
            console.log(response.data.Profile)

        }
        catch(error){
            console.log(error)

        }
    }

    const handledelete = async(id) => {
        try{
            const deleted = await axios.delete(`https://safespace-zjkg.onrender.com/disaster/deletedisaster/${id}`,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            console.log("deleted")
            getProfile()
        }
        catch(error){
            console.log(error);
        }
    }

    const handlevolunteerdelete = async(vid) => {
        try{
            const vdelte = await axios.delete(`https://safespace-zjkg.onrender.com/disaster/deletedisaster/${vid}`,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            console.log("volunteer deleted")
            getProfile()    
            
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <Header/>
            <h2>Profile</h2>
            <h3>Your Posts</h3>
            <div className="disaster">
                {profile.disaster && profile.disaster.map((i) => {
                    const googleMapsUrl = `https://www.google.com/maps?q=${i.location.coordinates[1]},${i.location.coordinates[0]}`;
                    return (
                        <div key={i._id} className="disaster-card">
                            <h4><b>Disaster Type:</b> {i.disastertype}</h4>
                            <span><b>Place:</b> {i.city}</span><br/>
                            <span><b>Requirements:</b> <br/>{i.description}</span><br/>
                            <span><b>Contact Information:</b> <br/>{i.contactinfo}</span><br/>
                            <span><b>Date:</b> {new Date(i.date).toLocaleDateString()}</span><br/>
                            <span><b>Time:</b> {i.time}</span><br/>
                            <span><b>Location:</b> <br/></span>
                            <span>Click the coordinates below to view the location on Google Maps:</span><br/>
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                                {i.location.coordinates[1]}, {i.location.coordinates[0]}
                            </a><br/>
                            <button onClick={() => handledelete(i.id)}>Delete</button>
                            <button >Edit</button>
                        </div>
                    );
                })}
                </div>
           <h3>Volunteer</h3>
           <div className="volunteer">
           {profile.volunteer && profile.volunteer.map((vol) => (
                <div key={vol._id} className="volunteer-card">
                   <h2>disaster Information</h2> 
                    <span><b>Disaster Type:</b> {vol.disasterDetails.disastertype}</span><br/>
                    <span><b>City:</b> {vol.disasterDetails.city}</span><br/>
                    <span><b>Contact:</b> {vol.disasterDetails.contactinfo}</span><br/>
                    <span><b>Status:</b> {vol.disasterDetails.status}</span><br/>
                    <h4>Volunteer Information</h4> 
                    <span><b>Volunteer Name:</b> {vol.name}</span><br/>
                    <span><b>Phone Number:</b> {vol.phoneno}</span><br/>
                    <span><b>Age:</b> {vol.age}</span><br/>
                    <span><b>Role:</b> {vol.role}</span><br/>
                    <button onClick={() => handlevolunteerdelete(i.id)}>Delete</button>
                </div>
            ))}
            </div>
        </div>
            
    )
}

export default Profile