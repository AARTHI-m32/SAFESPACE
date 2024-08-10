import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DisasterForm from './Disasterform';
import Disastercard from './Disastercard';
import Header from './Header';
import axios from 'axios'
import { useSelector } from 'react-redux';

const Disaster = () => {
    const [disaster, setDisaster] = useState([]); 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = useSelector((state) => state.user.token)
   useEffect(()=>{
    getdisaster();
   },[])

   const getdisaster = async() => {
    const res= await axios.get("https://safespace-zjkg.onrender.com/disaster/getalldisaster",{
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
        setDisaster(res.data.Disaster)
         console.log(res.data.Disaster)
   }
    return (
        <div>
            <Header/>       
            <h2 id="disaster-head">Disaster Information</h2>
            <button onClick={handleShow}><h2>post</h2></button>
            <div id="disaster">
               {disaster.map((disaster) => <Disastercard key={disaster.id} disaster={disaster}/>)}
            </div>

            <Modal show={show} onHide={handleClose} className='custom-modal'>
                <Modal.Header >
                    <Modal.Title>Post a Disaster</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DisasterForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Disaster;
