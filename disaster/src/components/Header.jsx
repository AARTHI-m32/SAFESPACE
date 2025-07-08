import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../redux/remainderSlice';
import axios from 'axios';
import { removeToken, setName } from '../redux/userSlice';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaBars, FaTimes } from "react-icons/fa";


const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const myList = useSelector(state => state.remainder.myList);
    const token = useSelector((state) => state.user.token);
    const username = useSelector((state) => state.user.name);
   const dispatch = useDispatch()
   const role=localStorage.getItem('role')
    useEffect(()=>{
      if(token)
        listremainder()
      },[token])
  
    const listremainder = async() => {
      const res=await axios.get("https://safespace-zjkg.onrender.com/remainder/getallremainder",{
        headers : { 
          Authorization : `Bearer ${token}`
      }})
    
      console.log("get remainder",res.data)
      dispatch(setList(res.data))
    }

    const handleLogout = async () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('role')
        dispatch(removeToken());
        dispatch(setName(null));
    };


    return (
        <> 
            <div id="headernav" className="navbar">
                <span id="headerlogo">SAFESPACE</span>
                
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <nav className={menuOpen ? "nav-links active" : "nav-links"}>
                    {token ? (
                        <Link to="/" onClick={handleLogout}>Logout</Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                    <Link to="/profile">{token ? username : "Profile"}</Link>   
                    { role === 'admin' ? (
                       <Link to="/completed">Past Details</Link> 
                    )  :  (                       
                       <Link to="/remainder">My Remainders! {myList.length}</Link> 
                    )}          
                    <Link to="/disaster">Disaster</Link>
                    <Link to="/about">About</Link>

                    <NavDropdown title="Safety Tips" id="basic-nav-dropdown" className="hover-dropdown">
                        <NavDropdown.Item><Link to="/nature" className='navhomed'>Natural Disasters</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/fire" className='navhomed'>Fire Safety</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/earthquake" className='navhomed'>Earthquake</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/flood" className='navhomed'>Flood Safety</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to="/pandemic" className='navhomed'>Pandemic</Link></NavDropdown.Item>
                    </NavDropdown> 
                </nav>
            </div>
           
        </>
    );
};

export default Header;
