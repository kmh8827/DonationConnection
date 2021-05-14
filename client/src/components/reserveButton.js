// import API from '../utils/API';
import { Button } from 'reactstrap';

const reserveButton = (props) => {

   

    return (
        <div className="reserveBtn">
            {/* {console.log(props.reserved, 'availability:')} */}
            { props.reserved === 'true'
             ? <Button onClick={() => props.reservePickup(props.id)}>{props.text}</Button>
             : <Button disabled={true} onClick={() => props.reservePickup(props.id)}>{props.text}</Button>
            }
        </div>
    )
}

export default reserveButton