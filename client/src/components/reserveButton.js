import API from '../utils/API';
import { Button } from 'reactstrap';

const reserveButton = (props) => {
    const reservePickup = (id) => {
          API.reserveDonations(id)
            .catch(err => console.log(err));
      };

    return (
        <div>
            <Button onClick={() => reservePickup(props.id)}>{props.text}</Button>
        </div>
    )
}

export default reserveButton