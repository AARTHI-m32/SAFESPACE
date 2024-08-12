import Header from "./components/Header"
import Disaster from './components/Disaster';
import Homepage from "./components/Homepage";
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import VolunteerForm from "./components/VolunteerForm";
import Remainder from "./components/Remainder";
import Login from "./components/Login";
import About from "./components/About";
import Register from "./components/Register";
import Profile from "./components/Profile"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { Profiler, useEffect } from "react";
import { setName, setToken } from "./redux/userSlice";
import Disasterform from "./components/Disasterform";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

//https://safespace-zjkg.onrender.com
const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    const token=localStorage.getItem('token')
    const username=localStorage.getItem('name')
    if(token){
    dispatch(setToken(token))
    dispatch(setName(username))}
  },[])

  return (    
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path="/header" element={<Header/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/disaster" element={<Disaster/>}/>
      <Route path="/volunteer" element={<VolunteerForm/>}/>
      <Route path="/remainder" element={<Remainder/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/disasterform" element={<Disasterform/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App