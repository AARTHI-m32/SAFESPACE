import { Link } from "react-router-dom"
import Header from "./Header"
import Image from "./Image"
const About = () => {
    return(
        <>
        <Header/>
        <Image/>
        <div className="about1">
         <p className="aboutp">
         Disasters, whether stemming from natural phenomena or human actions, create a cascade of suffering
          that affects individuals and communities on multiple levels. The immediate impact often involves 
          the destruction of homes and infrastructure, leaving people without shelter or access to essential 
          services.
          Survivors may grapple with grief from lost loved ones, fear, and uncertainty about the future.
           The disruption of daily life and the loss of economic stability can lead to long-term challenges, 
           including financial strain and difficulties in accessing education and healthcare. The recovery 
           process is often slow and arduous, requiring substantial support from both local and global communities
            to address immediate needs and facilitate long-term healing and rebuilding. Understanding and addressing
             these diverse forms of suffering is crucial for effective disaster response and recovery efforts.
           <br/><br/>
           Get to know about the disasters happening currently<br/><br/>
             <Link to="/disaster"><button className="aboutbut">Disaster</button></Link>
         </p>
         <img src = "./images/about1.jpg" className="caroselimage"/>
        </div>

        <div className="about2">
        <img src = "./images/about2.jpg" className="caroselimage"/>
         <p className="aboutp">
         Volunteering plays a critical role in disaster management, offering vital support and relief to those affected by crises.
          Volunteers contribute their time, skills, and resources to assist in various aspects of disaster response and recovery. 
          They may be involved in distributing supplies, providing medical aid, or offering emotional support to survivors. 
          Beyond the immediate aftermath, volunteers help with long-term recovery efforts, including rebuilding infrastructure,
           supporting community resilience programs, and advocating for policies to improve disaster preparedness. Their 
           dedication fosters a sense of community and solidarity, demonstrating the power of collective action in times of need.
            Volunteering not only aids those affected by disasters but also enriches the volunteers' own lives, as they gain a 
            deeper understanding of humanitarian issues and contribute to making a positive impact on society.
           <br/><br/>
           Save Someone by Volunteering<br/> <br/>
           <Link to="/disaster"><button className="aboutbut">Volunteer</button></Link>
         </p>
   
        </div>

        <div id="footer">
    <p >"The best way to find yourself is to lose yourself in the service of others." — Mahatma Gandhi</p>
    <p style={{color:"orangered"}}>For Administrative queries : National Health Mission,Ministry of Health & Family Welfare,New Delhi-110011.</p>
    <p style={{color:"orangered"}}>Email : safespace@gmaiil.com</p>
    <p style={{color:"orangered"}}>Contact Number : +91 9324232312</p>
     <p id="footerc">&copy; 2024 SAFESPACE. All Rights Reserved.</p>
    </div>
        </>
    )
}

export default About