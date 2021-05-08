import React, { useState, useEffect } from 'react';
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
                let donationList = res.data;
                console.log(donationList);
                setDonations(donationList);
            })
            .catch(err => console.log(err));
    };

    return (
    <div className="bg-image-pickup">
        <div className="container">
            {donations && donations.map(thisDonation => 
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
                />
            )}
        </div>
    </div>
    );
}

export default Pickup;