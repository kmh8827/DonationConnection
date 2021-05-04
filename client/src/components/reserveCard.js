import React from 'react';

import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';
import ReserveButton from '../components/reserveButton';

const reserveCard = (props) => {
  return (
    <div>
        <Card className="reserveCard">
        <CardBody>
          <CardTitle tag="h5">{props.product}</CardTitle>
          <CardText>
              <ul>
                <li>Comapny Name: {props.companyName}</li>
                <li>Perishable: {props.perishable}</li>
                <li>Expiration Date: {props.expDate}</li>
                <li>Availablity: {props.availability}</li>
                <li>Address: {props.address}</li>
                  <ul>
                  {props.allergies.options.map(theseAllergies => 
                  <li key={theseAllergies}>{theseAllergies}</li>  
                  )}
                  </ul>
                <li>Other Allergy Information: {props.allergies.otherInfo ? props.allergies.otherInfo : 'None'}</li>
              </ul> 
          </CardText>
          <ReserveButton id={props.id} text={'Reserve'} />
        </CardBody>
      </Card>
    </div>
  )
}

export default reserveCard;
