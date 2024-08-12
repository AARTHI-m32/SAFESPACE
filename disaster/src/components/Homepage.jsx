
import Header from "./Header"
import { Link } from "react-router-dom";

const  Homepage = () => {
   
    return(
       <>
       <div id="home">
            <img src="./images/r.com.jpg"className="image"/>   
            <div id="homenav">               
            <span id="homelogo">SAFESPACE</span>        
            <Link to="/login"><span className="navhome">Disaster</span></Link>
            <Link to="/safety"><span className="navhome">Safety tips</span></Link>
            <Link to="/about"><span className="navhome">About Us</span></Link>   
            </div>
            <div id="hometext">
                <p>Any Disaster ?<br/>
                    Wanna Seek help ?<br/>
                    post here and get help from Volunteers!!
                </p>
             
              <Link to="/disaster"><button>Get Started</button></Link>
            </div>

          
       </div>
       </>
    )
}

export default Homepage