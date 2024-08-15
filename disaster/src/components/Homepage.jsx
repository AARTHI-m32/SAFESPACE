
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
            {
                token ? <Link to="/about" className="navhomeh">Welcomee!!</Link>:
                <Link to="/login" className="navhomeh">Login</Link>
            }  
            <Link to="/register" className="navhomeh">Register</Link>
            {
                token ? <Link to="/disaster" className="navhomeh">Disater</Link>:
                <Link to="/login" className="navhomeh">Disaster</Link>
            }    
            
            <Link to="/safety" className="navhomeh">Safety tips</Link>
            <Link to="/about" className="navhomeh">About Us</Link>   
            </div>
            <div id="hometext">
                <p>Any Disaster ?<br/>
                    Wanna Seek help ?<br/>
                    post here and get help from Volunteers!!
                </p>
             
                {
                token ? <Link to="/disaster"><button>Get Started</button></Link>:
                <Link to="/login"><button>Get Started</button></Link>
            }
            </div>

            </div>
       </>
    )
}

export default Homepage