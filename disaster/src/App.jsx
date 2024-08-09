import Header from "./components/Header"
import Disaster from './components/Disaster';
import Homepage from "./components/Homepage";
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Volunteer from "./components/Volunteer";
import Remainder from "./components/Remainder";
import Login from "./components/Login";
import About from "./components/About";
import Register from "./components/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//https://safespace-zjkg.onrender.com
const App = () => {

  return (    
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path="/header" element={<Header/>}/>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/disaster" element={<Disaster/>}/>
      <Route path="/volunteer" element={<Volunteer/>}/>
      <Route path="/remainder" element={<Remainder/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>

  )
}

export default App