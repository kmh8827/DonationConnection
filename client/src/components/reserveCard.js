import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, Button
  } from 'reactstrap';

const reserveCard = (props) => {
  return (
    <div>
        <Card className="reserveCard">
        <CardBody>
          <CardTitle tag="h5">{props.companyName}</CardTitle>
          <CardText>
              <ul>
              <li>Perishable: {props.perishable}</li>
              <li>Expiration Date: {props.expDate}</li>
              <li>Availablity: {props.availability}</li>
              <li>Address: {props.address}</li>
              <ul>
              {props.allergies.options.map(theseAllergies => 
              <li>{theseAllergies}</li>  
              )}
              </ul>
              <li>Other Allergy Information: {props.allergies.otherInfo}</li>
              </ul>
          </CardText>
          <Button color="primary">Reserve</Button>
        </CardBody>
      </Card>
    </div>
  )
}

export default reserveCard;
