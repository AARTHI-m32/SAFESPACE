import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import DisasterForm from './Disasterform';

const DisasterModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Post Disaster
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
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
        </>
    );
};

export default DisasterModal;
