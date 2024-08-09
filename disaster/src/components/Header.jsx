import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
    const myList = useSelector(state => state.remainder.myList);
    console.log(myList)

 

    return(
        <>
            <div id="headernav" >               
         <span id="headerlogo">SAFESPACE</span> 
          
            <Link to="/profile"><span className="navhome" style={{'padding-right':'20px'}}>Profile</span></Link>        
           <Link to="/remainder"> <span className="navhome">My Remainders! {myList.length}</span></Link>           
            <Link to="/disaster"><span className="navhome">Disaster</span></Link>
            <Link to="/safety"><span className="navhome">Safety tips</span></Link>
            <Link to="/about"><span className="navhome">About Us</span></Link>   
              
            </div>
        </>
    )
}

export default Header



