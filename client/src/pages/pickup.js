import React, { useState, useEffect } from 'react';
import { GridList } from '@material-ui/core/';
import Header from '../components/header'
import API from '../utils/API';
import ReserveCard from '../components/reserveCard';
import '../assets/scss/pickup.scss';

const Pickup = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        loadPickups();
    }, [])

    const loadPickups = () => {
        API.getDonations()
            .then(res => {
                console.log("helo!!!!!");
                let donationList = res.data;
                console.log(donationList);
                setDonations(donationList);
            })
            .catch(err => console.log(err));
    };
    
    const reservePickup = (id) => {
        API.reserveDonations(id)
        .then(res => {
            // alert("available")
            loadPickups()
        })
          .catch(err => console.log(err));
    };
  
    const reserved = donations.availability ;
    const gridTileStyle = {
        position: 'center',
        width: '100%',
        minHeight: '400px',
        minWidth: '664px',
        overflow: 'hidden',
        // height: '100% !important'
  }

    return (
        <div className="bg-image-pickup">
            <Header />
            <div className="pickupContainer"></div>
            <GridList style={gridTileStyle}>
                {console.log(donations, 'donations')}
                {/* need something like lazy loading for better loading */}
                {donations.map(thisDonation =>
                        <ReserveCard
                            key={thisDonation._id}
                            product={thisDonation.product}
                            companyName={thisDonation.companyName}
                            perishable={thisDonation.perishable}
                            expDate={thisDonation.expDate}
                            availability={thisDonation.availability}
                            address={thisDonation.address}
                            allergies={thisDonation.allergies}
                            id={thisDonation._id}
                            loadPickups={loadPickups}
                            reserved={reserved}
                            reservePickup={reservePickup}
                        />
                )}
            </GridList>
        </div>
    );
}

export default Pickup;