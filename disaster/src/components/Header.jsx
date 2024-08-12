import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setList } from '../redux/remainderSlice';
import axios from 'axios';
const Header = () => {
    const myList = useSelector(state => state.remainder.myList);
    const token = useSelector((state) => state.user.token)
    const username = useSelector((state) => state.user.name)
    console.log(myList)

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

    return(
        <>
            <div id="headernav" >               
         <span id="headerlogo">SAFESPACE</span> 
         {(token)?
             <Link to="/"><span className='navhome' style={{'padding-right':'20px'}}>Logout</span></Link> :
            <Link to="/login"><span className='navhome' style={{'padding-right':'20px'}}>Login</span></Link>}
            <Link to="/profile"><span className="navhome" >{token ? `${username}` :"Profile"}</span></Link>        
           <Link to="/remainder"> <span className="navhome">My Remainders! {myList.length}</span></Link>           
            <Link to="/disaster"><span className="navhome">Disaster</span></Link>
            <Link to="/safety"><span className="navhome">Safety tips</span></Link>
            <Link to="/about"><span className="navhome">About Us</span></Link>   
              
            </div>
        </>
    )
}

export default Header



