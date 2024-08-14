import { useDispatch, useSelector } from 'react-redux';
import { addToMyList } from '../redux/remainderSlice';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import VolunteerForm from './VolunteerForm';

const Disastercard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

const token = useSelector((state) => state.user.token)
const role= useSelector((state) => state.user.role)
console.log("role",role)
const handleverify = async(id) => {
    const payload = {
        "verify" : true
    }
    try{
    const edit = await axios.put(`https://safespace-zjkg.onrender.com/disaster/editdisaster/${id}`,payload,{
        headers : {
          Authorization : `Bearer ${token}`
        }
      })
    console.log("verified")}
      catch(error){
        console.log(error)
      }
}
const handleAdd = async() => {
    console.log("item added")
    const payload=  {
            
        "remainder" : { "disasterid" : props.disaster.id }
     
}
    const res= await axios.post("https://safespace-zjkg.onrender.com/remainder/addremainder",payload,{
        headers : { 
            Authorization : `Bearer ${token}`
        }
    })
    console.log("disaster",props.item)
    dispatch(addToMyList(props.disaster));
 
}
    

  const lat=props.disaster.location.coordinates[1]
  const lng=props.disaster.location.coordinates[0]
    
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    return (
        <div className="disaster-card">
         <h4 className='verify'> {(props.disaster.verify==true)?"Verified✅":""}</h4>
          <h4><b>Disaster Type : </b>{props.disaster.disastertype}</h4>
          <span><b>Place : </b>{props.disaster.city}</span>
          <span><b>Requirements : </b><br/>{props.disaster.description}</span>
          <span><b>Contact Information : </b><br/> {props.disaster.contactinfo}</span>
          <span><b>Date : </b>{props.disaster.date}</span>
          <span><b>Time : </b>{props.disaster.time}</span>
          <span><b>Location : </b><br/></span>
          <span>Click the coordinates below to view the location on Google Maps:</span>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                {lat} {lng}
            </a>

            <span id="author">Posted by,<br/> {props.disaster.name}</span>
            
           { role == 'user' ? (
            <div>
        <button onClick={handleAdd}>Add to My List</button>
        <button onClick={handleShow}>Volunteer</button>
        </div>) : (
            <button onClick={()=>handleverify(props.disaster.id)}>Verify</button>
        )}

        <Modal show={show} onHide={handleClose} className='volunteer-modal'>
                <Modal.Header id="modalhead">
                    <Modal.Title>Become a Volunteer!!</Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalform">
                    <VolunteerForm disasterid={props.disaster.id}/>
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

export default Disastercard;
