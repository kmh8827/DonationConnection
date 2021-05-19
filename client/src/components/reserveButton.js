import { Button } from 'reactstrap';

const reserveButton = (props) => {  

    return (
        <div className="reserveBtn">
            {/* {console.log(props.reserved, 'availability:')} */}
            { props.reserved === 'true'
             ? <Button className="btn btn-light" onClick={() => props.reservePickup(props.id)}>{props.text}</Button>
             : <Button disabled={true}>Reserved</Button>
            }
        </div>
    )
}

export default reserveButton