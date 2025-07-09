import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios"
import { useSelector } from "react-redux"

const Completed = () => {
    const [details , setDetails] = useState([])
    const role=localStorage.getItem('role')
    const token = useSelector((state) => state.user.token);
    const value= true
    useEffect ( () => {
        getDetails()
    },[role])

    const getDetails = async() => {
        try{
            const res = await axios.get(`https://safespace-zjkg.onrender.com/disaster/getalldisaster/${value}`,{
        headers : { 
          Authorization : `Bearer ${token}`
      }})
    
      console.log("get true details",res.data)
      setDetails(res.data.Disaster)
    
        }
        catch(error){
            console.log(error)
        }
    }

    return(
        <div>
         <Header/>
         <h3 className="profilehead">Posts</h3>
         <div className="disaster">
        { details && details.length > 0 ? (
               
                details.map((i)=>{
                    {console.log("Location:", i.location)}
                    const googleMapsUrl = `https://www.google.com/maps?q=${i.location.coordinates[1]},${i.location.coordinates[0]}`;
                    return(
                    <div key={i._id} className="disaster-card">
                        <h4><b>Disaster Type : </b>{i.disastertype}</h4>
                        <span><b>Place : </b>{i.city}</span>
                        <span><b>Requirements : </b><br/>{i.description}</span>
                        <span><b>Contact Information : </b><br/> {i.contactinfo}</span>
                        <span><b>Date : </b>{i.date}</span>
                        <span><b>Location : </b><br/></span>
                        <span>Click the coordinates below to view the location on Google Maps:</span>
                          <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                              {i.location.coordinates[0]} {i.location.coordinates[1]}
                          </a>
              
                          <span id="author">Posted by,<br/> {i.name}</span>
                          <button onClick={()=>handledelete(i.id)}>Delete</button>
                    </div>
                 ) })
) :
                (
                <p>No Disasters with Completed status!!</p>
                )
            }
        
         </div>
        </div>
    )
}

export default Completed