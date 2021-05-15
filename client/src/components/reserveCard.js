import React, { useState } from 'react';
import {
  Card, CardTitle
} from 'reactstrap';
import { Collapse } from 'react-collapse';
import ReserveButton from '../components/reserveButton';

function ReserveCard(props) {

  const [state, setState] = useState({ isOpened: false, availability: props.availability })

  const { isOpened } = state;

  const height = 100;

  return (
    <div>
      <Card className="reserveCard" type="button" style={props.availability === 'true' ? { backgroundColor: "rgb(58, 175, 58)" } : { backgroundColor: "rgb(196, 75, 75)" }} checked={isOpened} onClick={() => setState({ isOpened: !isOpened })}>

        <CardTitle className="m-3 pr-2" tag="h6">{props.companyName}</CardTitle>
        <CardTitle className="m-3" tag="h6">{props.product}</CardTitle>

        <Collapse isOpened={isOpened}>
          <div style={{ height }} className="blob">
            <div className="row ml-4 mr-4">
              <ul className="infoList col-9">
                {/* <li>Company Name: {props.companyName}</li> */}
                {/* <li>Perishable: {props.perishable}</li> */}
                <li>Expiration Date: {props.expDate}</li>
                {/* <li>Availablity: {props.availability}</li> */}
                <li>Address: {props.address}</li>
                <li>Allergies: {props.allergies}</li>
              </ul>
              <div className="col-3">
                <ReserveButton reserved={props.availability} reservePickup={props.reservePickup} loadPickups={props.loadPickups} availability={props.availability} id={props.id} text={'Reserve'} />
              </div>
            </div>
          </div>
        </Collapse>
      </Card>
    </div>
  );
}

export default ReserveCard;