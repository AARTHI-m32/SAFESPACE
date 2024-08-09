import { useEffect, useState } from 'react';
import { sampleDisasters } from '../constants'
import Disastercard from './Disastercard';
import Header from './Header';
import axios from 'axios'

const Disaster = () => {
    const [disaster, setDisaster] = useState([]); 
   useEffect(()=>{
    getdisaster();
   },[])

   const getdisaster = async() => {
    const res= await axios.get("http://localhost:3000/disaster/getalldisaster",{
        headers : {
            Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2YWUxNTZkLTdiYTYtNDkwOC1iMGZmLWU4ZWU3MTQ1MTE0ZSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzIzMTczOTM2LCJleHAiOjE3MjMxODQ3MzZ9.U-PYROlqMCMaDSnwH8o0NDgE6uxElYnOGAQqocahgJE"
        }
    })
        setDisaster(res.data.Disaster)
         console.log(res.data.Disaster)
   }
    return (
        <div>
            <Header/>       
            <h2 id="disaster-head">Disaster Information</h2>
            <div id="disaster">
               {disaster.map((disaster) => <Disastercard key={disaster.id} disaster={disaster}/>)}
            </div>
        </div>
    );
};

export default Disaster;
