import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setList } from '../redux/remainderSlice';
import axios from 'axios';
import { removeToken, setName } from '../redux/userSlice';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const myList = useSelector(state => state.remainder.myList);
    const token = useSelector((state) => state.user.token);
    const username = useSelector((state) => state.user.name);
   const dispatch = useDispatch()
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
        dispatch(removeToken());
        dispatch(setName(null));
    };


    return (
        <> 
            <div id="headernav">               
                <span id="headerlogo">SAFESPACE</span> 
                {token ? (
                    <Link to="/">
                        <span className='navhome' style={{ paddingRight: '20px' }} onClick={handleLogout}>Logout</span>
                    </Link>
                ) : (
                    <Link to="/login">
                        <span className='navhome' style={{ paddingRight: '20px' }}>Login</span>
                    </Link>
                )}
                <Link to="/profile">
                    <span className="navhome">{token ? `${username}` : "Profile"}</span>
                </Link>        
                <Link to="/remainder">
                    <span className="navhome">My Remainders! {myList.length}</span>
                </Link>           
                <Link to="/disaster">
                    <span className="navhome">Disaster</span>
                </Link>
                <Link to="/about">
                    <span className="navhome">About</span>
                </Link>

                <NavDropdown title="Safety Tips" id="basic-nav-dropdown" className="hover-dropdown">
           
                    <NavDropdown.Item ><Link to="/nature" className='navhomed'>Natural Disasters</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/fire" className='navhomed'>Fire Safety</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/earthquake" className='navhomed'>Earthquake</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/flood" className='navhomed'>Flood Safety</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link to="/pandemic" className='navhomed'>Pandemic</Link></NavDropdown.Item>
                  
                </NavDropdown> 
            </div>

           
        </>
    );
};

export default Header;
