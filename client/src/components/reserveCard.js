import React from 'react';

import {
  Card, CardBody, CardTitle, Button
} from 'reactstrap';

const reserveCard = (props) => {
  const reserved = (props.availability === 'true');
  return (
    <div>
      <Card className="reserveCard">
        <CardBody>
          <CardTitle tag="h5">{props.product}</CardTitle>
          <ul>
            <li>Comapny Name: {props.companyName}</li>
            <li>Perishable: {props.perishable}</li>
            <li>Expiration Date: {props.expDate}</li>
            <li>Availablity: {props.availability}</li>
            <li>Address: {props.address}</li>
            <li>Allergies: {props.allergies}</li>
          </ul>
          <Button disabled={reserved} onClick={() => props.reservePickup(props.id)}>Reserved</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default reserveCard;
