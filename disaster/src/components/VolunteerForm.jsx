import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const VolunteerForm = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        phoneno: '',
        age: '',
        role: '',
        agreement: false
    });
   const token = useSelector((state) => state.user.token)
  console.log("volunteerdisid",props.disasterid);
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
       const payload = {
            "name" : formData.name,
            "age" : formData.age,
            "phoneno" : formData.phoneno,
            "role": formData.role,
            "agreement": formData.agreement       
        }
        try{
            const volunteer = await axios.post(`https://safespace-zjkg.onrender.com/volunteer/addvolunteer/${props.disasterid}`,payload,
                {
                    headers : { 
                        Authorization : `Bearer ${token}`
                    }}
            )
           console.log("volunteer registered")
        }
    catch(error){
        console.error('Error submitting form:', error);
        alert('Failed to submit');
    }
    }
    return (
        <form onSubmit={handleSubmit} className="volunteer-form">
            <div>
                <label>Name:</label><br/>
                <input 
                    type="text" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label>Phone No:</label><br/>
                <input 
                    type="text" name="phoneno" value={formData.phoneno} onChange={handleChange}  />
            </div>
            <div>
                <label>Age:</label><br/>
                <input 
                    type="number"  name="age" value={formData.age} onChange={handleChange}  min="18" max="50" />
            </div>
            <div>
            <label htmlFor="role">Select a Role:</label><br/>
              <select id="role" name="role" value={formData.role} onChange={handleChange}>
                 <option value="Medical Aid">Medical Aid</option>
                 <option value="Search and Rescue">Search and Rescue</option>
                 <option value="Logistics and Supply Distribution">Logistics and Supply Distribution</option>
                 <option value="Shelter Management">Shelter Management</option>
                 <option value="Food and Water Distribution">Food and Water Distribution</option>
                <option value="Communication and Coordination">Communication and Coordination</option>
                 <option value="First Aid">First Aid</option>
                 <option value="Psychological Support">Psychological Support</option>
                 <option value="Construction and Repair">Construction and Repair</option>
                  <option value="Transportation">Transportation</option>
              </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange}  />
                    I agree to the terms and conditions
                </label> <br/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default VolunteerForm;
