import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {setName, setRolee, setToken } from '../redux/userSlice'

const Login = () => {
   const [email,setEmail] = useState("")
   const [password,setPassword] = useState('')
   const [role,setRole] = useState('')

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleEmail = (e) => {
    setEmail(e.target.value)
   }

   const handlePassword = (e) => {
   setPassword(e.target.value)
   }
   
   const handleRole = (e) => {
    setRole(e.target.value)
    }

   const loginhandle = async(e) => {
   e.preventDefault()
   try {
   const payload = {
    email : email,
    password : password,
    role : role
   }
   
    const res = await axios.post("https://safespace-zjkg.onrender.com/login",payload)
    localStorage.setItem('token',res.data.token)
    localStorage.setItem('name',res.data.name)
    localStorage.setItem('role',res.data.role)
    toast.success(res.data.message)
    dispatch(setToken(res.data.token))
    dispatch(setName(res.data.name))
    dispatch(setRolee(res.data.role))
    console.log("login",res.data)
    navigate('/disaster') 
}
   catch(error){
    toast.error(error.response.data.message)
   }
   }

   
  return(
    <div className="login">
      <img src="./images/login.avif" className="image"/>
    <div className="logindiv">

      <h2 id="lhead">Welcome Back!</h2>
       <label htmlFor="name" className="llabel">Email</label><br/>
       <input type="text" name="lname" value={email} onChange={handleEmail}className="linput"/><br/>
       <label htmlFor="password" className="llabel">Password</label><br/>
       <input type="password" name="lpassword" value={password} onChange={handlePassword} className="linput"/><br/>
       <label htmlFor="role" className="llabel">Role</label><br/>
       <label>
       <input type="radio"  value="user" checked={role === 'user'} onChange={handleRole} className="lradio"/>
        User
       </label>
        <label>
        <input type="radio" value="admin" checked={role === 'admin'} onChange={handleRole} className="lradio"/>
         Admin
       </label> <br/>
       <button id="lbutton" onClick={loginhandle}>Login</button><br/>
       <span id="lspan">To Create an account ? <Link to="/register" id="lreg">Register</Link></span>
    </div>
    </div>
  )
}

export default Login