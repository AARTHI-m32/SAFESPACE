
import { useSelector } from "react-redux";
import Header from "./Header"
import { Link } from "react-router-dom";

const  Homepage = () => {
     const token = useSelector((state) => state.user.token)
     const name = useSelector((state) => state.user.name)
    return(
       <>
       <div id="home">
            <img src="./images/r.com.jpg"className="image"/>   
            <div id="homenav">               
            <span id="homelogo">SAFESPACE</span>    
            <Link to="/login"><span className="navhome">Login</span></Link>
            <Link to="/register"><span className="navhome">Register</span></Link>
            {
                token ? <Link to="/disaster" ><span className="navhome">Disater</span></Link>:
                <Link to="/login"><span className="navhome">Disaster</span></Link>
            }    
            
            <Link to="/safety"><span className="navhome">Safety tips</span></Link>
            <Link to="/about"><span className="navhome">About Us</span></Link>   
            </div>
            <div id="hometext">
                <p>Any Disaster ?<br/>
                    Wanna Seek help ?<br/>
                    post here and get help from Volunteers!!
                </p>
             
              <Link to="/about"><button>Get Started</button></Link>
            </div>

          
       </div>
       </>
    )
}

export default Homepage