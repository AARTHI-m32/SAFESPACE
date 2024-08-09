import { useDispatch } from 'react-redux';
import { addToMyList } from '../redux/remainderSlice';

const Disastercard = (props) => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToMyList(props.disaster));
    };

    return (
        <div className="disaster-card">
          <h3>{props.disaster.name}</h3>
          <h3>{props.disaster.disastertype}</h3>
          <h3>{props.disaster.city}</h3>
          <p>{props.disaster.contactinfo}</p>
          <p>{props.disaster.Date}</p>
        <button onClick={handleAdd}>Add to My List</button>
        </div>
    );
};

export default Disastercard;
