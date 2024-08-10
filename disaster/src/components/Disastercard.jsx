import { useDispatch } from 'react-redux';
import { addToMyList } from '../redux/remainderSlice';

const Disastercard = (props) => {
    const dispatch = useDispatch();
console.log(props.disaster)
    const handleAdd = () => {
        dispatch(addToMyList(props.disaster));
    };
  const lat=props.disaster.location.coordinates[0]
  const lng=props.disaster.location.coordinates[1]
    const latitude = 37.7749;
    const longitude = -122.4194;
    const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    return (
        <div className="disaster-card">
          <h3>{props.disaster.name}</h3>
          <h3>{props.disaster.disastertype}</h3>
          <h3>{props.disaster.city}</h3>
          <p>{props.disaster.contactinfo}</p>
          <p>{props.disaster.Date}</p>
          <p>Click the coordinates below to view the location on Google Maps:</p>
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                {latitude}, {longitude}
            </a>
        <button onClick={handleAdd}>Add to My List</button>
        </div>
    );
};

export default Disastercard;
