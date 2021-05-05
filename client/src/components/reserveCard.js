import React from 'react';

import {
    Card, CardBody, CardTitle
  } from 'reactstrap';
import ReserveButton from '../components/reserveButton';
import ReserveList from '../components/reserveList';

const reserveCard = (props) => {
  return (
    <div>
        <Card className="reserveCard">
        <CardBody>
          <CardTitle tag="h5">{props.product}</CardTitle>
          <ReserveList 
            product={props.product}
            companyName={props.companyName}
            perishable={props.perishable}
            expDate={props.expDate}
            availability={props.availability}
            address={props.address}
            allergies={props.allergies}
            id={props._id}
          />
          <ReserveButton availability={props.availability} id={props.id} text={'Reserve'} />
        </CardBody>
      </Card>
    </div>
  )
}

export default reserveCard;
