import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import { useContext } from "react"

const Remainder = () => {
   const remainderList = useSelector(state => state.remainder.myList)
   console.log("remainder",remainderList)


    return(
        <div>
         <Header/>
         <div>
            {
                remainderList.map((i)=>{
                    const googleMapsUrl = `https://www.google.com/maps?q=${i.location.coordinates[0]},${i.location.coordinates[1]}`;
                    return(
                    <div className="disaster-card">
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
                    </div>
                 ) })
            }
         </div>
        </div>
    )
}

export default Remainder