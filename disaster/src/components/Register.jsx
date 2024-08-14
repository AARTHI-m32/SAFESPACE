import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

const Register = () => {

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const handleRegister = async(e) => {
    e.preventDefault()
    const payload = {
      username : username,
      email : email,
      password : password,
    }
    try{
     const res = await axios.post("https://safespace-zjkg.onrender.com/register",payload)
     toast.success(res.data.message)
     
     navigate("/login")
    }
    catch(error){
      toast.error(error.response.data.message)
    }
  }
  return(
    <div className="login">
      <img src="./images/register.jpg" className="image"/>
    <div className="registerdiv">

      <h2 id="lhead">Create Account!</h2>
       <label htmlFor="name" className="llabel">Username</label><br/>
       <input type="text" name="lname" value={username} onChange={handleUsername} className="linput"/><br/>
       <label htmlFor="email" className="llabel">Email</label><br/>
       <input type="text" name="lemail" value={email} onChange={handleEmail} className="linput"/><br/>
       <label htmlFor="password" className="llabel">Password</label><br/>
       <input type="password" name="lpassword" value={password} onChange={handlePassword} className="linput"/><br/>
       <button id="lbutton" onClick={handleRegister}>Register</button><br/>
       <span id="lspan">Already have an account ? <Link to="/login" id="lreg">Login</Link></span>
    </div>
    </div>
  )
}

export default Register