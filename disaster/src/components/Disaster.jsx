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
    useEffect(() => {
        if (token) {
            getdisaster();
        }
    }, [token]);

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
            <div id="disaster">
               {disaster.map((disaster) => <Disastercard key={disaster.id} disaster={disaster}/>)}
            </div>

            <Modal show={show} onHide={handleClose} className='custom-modal'>
                <Modal.Header id="modalhead">
                    <Modal.Title>Post a Disaster</Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalform">
                    <DisasterForm />
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

export default Disaster;
