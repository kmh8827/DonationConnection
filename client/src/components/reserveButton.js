import API from '../utils/API';
import { Button } from 'reactstrap';

const reserveButton = (props) => {

    const reservePickup = (id) => {
          API.reserveDonations(id)
            .catch(err => console.log(err));
      };
    
    const reserved = (props.availability === 'true');

    return (
        <div className="reserveBtn">
            { reserved
             ? <Button onClick={() => reservePickup(props.id)}>{props.text}</Button>
             : <Button disabled={true} onClick={() => reservePickup(props.id)}>{props.text}</Button>
            }
        </div>
    )
}

export default reserveButton