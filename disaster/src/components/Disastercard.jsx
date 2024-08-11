import { useDispatch } from 'react-redux';
import { addToMyList } from '../redux/remainderSlice';

const Disastercard = (props) => {
    console.log(props.disaster)
    const dispatch = useDispatch();
console.log(props.disaster)
    const handleAdd = () => {
        dispatch(addToMyList(props.disaster));
    };
  const lat=props.disaster.location.coordinates[0]
  const lng=props.disaster.location.coordinates[1]
    const latitude = 37.7749;
    const longitude = -122.4194;
    const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
    return (
        <div className="disaster-card">
         
          <h4><b>Disaster Type : </b>{props.disaster.disastertype}</h4>
          <span><b>Place : </b>{props.disaster.city}</span>
          <span><b>Requirements : </b><br/>{props.disaster.description}</span>
          <span><b>Contact Information : </b><br/> {props.disaster.contactinfo}</span>
          <span><b>Date : </b>{props.disaster.date}</span>
          <span><b>Location : </b><br/></span>
          <span>Click the coordinates below to view the location on Google Maps:</span>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                {lng} {lat}
            </a>

            <span id="author">Posted by,<br/> {props.disaster.name}</span>
        <button onClick={handleAdd}>Add to My List</button>
        <button>Volunteer</button>
        </div>
    );
};

export default Disastercard;
