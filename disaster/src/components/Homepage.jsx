
import { useSelector } from "react-redux";
import Header from "./Header"
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const  Homepage = () => {
     const token = useSelector((state) => state.user.token)
     const name = useSelector((state) => state.user.name)

     const [menuOpen,setMenuOpen]=useState(false)
    return(
       <>
       <div id="home">
              
           <div id="headernav" className="navbar">
            <span id="headerlogo">SAFESPACE</span>

            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <nav className={menuOpen ? "nav-links active" : "nav-links"}>
                {name ? (
                    <Link to="/about" className="navhomeh">Welcome!! {name}</Link>
                ) : (
                    <Link to="/login" className="navhomeh">Login</Link>
                )}

                <Link to="/register" className="navhomeh">Register</Link>

                {token ? (
                    <Link to="/disaster" className="navhomeh">Disaster</Link>
                ) : (
                    <Link to="/login" className="navhomeh">Disaster</Link>
                )}

                <Link to="/safety" className="navhomeh">Safety Tips</Link>
                <Link to="/about" className="navhomeh">About Us</Link>
            </nav>
        </div>
        <img src="./images/r.com.jpg"className="image"/>
            <div id="hometext">
                <p>Any Disaster ?<br/>
                    Wanna Seek help ?<br/>
                    post here and get help from Volunteers!!
                </p>
             
                {
                token ? <Link to="/disaster"><button>Get Started</button></Link>:
                <Link to="/login"><button>Get Started</button></Link>
            }
            </div>

            </div>
       </>
    )
}

export default Homepage