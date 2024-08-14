import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import { useContext, useEffect } from "react"
import axios from "axios"
import { setList } from "../redux/remainderSlice"

const Remainder = () => {
    const token = useSelector((state) => state.user.token)

   const dispatch = useDispatch()
  
   useEffect (() => {
    if(token)
    getRemainder()
},[token])

const remainderList = useSelector(state => state.remainder.myList)
console.log("remainder",remainderList)
   const getRemainder = async() => {
               try{
                const res = await axios.get("https://safespace-zjkg.onrender.com/remainder/getallremainder",{
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                })
                     dispatch(setList(res.data))
               }
               catch(error){
                console.log(error)
               }
   }

   const handledelete = async(id) => {
    try{
         const deleted = await axios.delete(`https://safespace-zjkg.onrender.com/remainder/deleteremainder/${id}`,{
            headers : {
                Authorization : `Bearer ${token}`
            }
         }) 
         console.log("deleted")
         getRemainder()
    }
    catch(error){
        console.log(error)
    }
   }
    return(
        <div>
         <Header/>
         <h3 className="profilehead">Your Remainders</h3>
         <div className="disaster">
        { remainderList && remainderList.length > 0 ? (
            
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
                          <button onClick={()=>handledelete(i.id)}>Delete</button>
                    </div>
                 ) })
) :
                (
                <p>No remainders added🥺</p>
                )
            }
        
         </div>
        </div>
    )
}

export default Remainder