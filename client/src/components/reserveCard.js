import React from 'react';

import {
  Card, CardTitle
} from 'reactstrap';
import { Collapse } from 'react-collapse';
import ReserveButton from '../components/reserveButton';


class reserveCard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { isOpened: false};
  }

  render() {
    const { isOpened } = this.state;
    const height = 100;

    return (
      <div>
        <Card className="reserveCard card m-3" type="button" checked={isOpened} onClick={() => this.setState({isOpened: !isOpened})}>
          <div className="row">
            <CardTitle className="m-3 p-4 pr-2" tag="h5">{this.props.companyName}</CardTitle>
            <CardTitle className="m-3 p-4" tag="h5">{this.props.product}</CardTitle>
          </div>
          <Collapse isOpened={isOpened}>
            <div style={{ height }} className="blob">
              <ul className="infoList">
                {/* <li>Company Name: {this.props.companyName}</li> */}
                {/* <li>Perishable: {this.props.perishable}</li> */}
                <li>Expiration Date: {this.props.expDate}</li>
                {/* <li>Availablity: {this.props.availability}</li> */}
                <li>Address: {this.props.address}</li>
                <li>Allergies: {this.props.allergies}</li>
              </ul>
              <ReserveButton availability={this.props.availability} id={this.props.id} text={'Reserve'} />
            </div>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default reserveCard;