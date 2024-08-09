
import Header from "./Header"
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');
const  Homepage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
  
    const handleLogin = (event) => {
      event.preventDefault();
      // Handle login logic here
      closeModal();
    };
    return(
       <>
       <div id="home">
            <img src="./images/r.com.jpg"className="image"/>   
            <div id="homenav">               
            <span id="homelogo">SAFESPACE</span>        
            <Link to="/login"><span className="navhome">Disaster</span></Link>
            <Link to="/safety"><span className="navhome">Safety tips</span></Link>
            <Link to="/about"><span className="navhome">About Us</span></Link>   
            </div>
            <div id="hometext">
                <p>Any Disaster ?<br/>
                    Wanna Seek help ?<br/>
                    post here and get help from Volunteers!!
                </p>
             
              <Link to="/about"><button onClick={openModal}>Get Started</button></Link>
            </div>

            <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Login</h2>
        <button onClick={closeModal}>Close</button>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </Modal>
       </div>
       </>
    )
}

export default Homepage