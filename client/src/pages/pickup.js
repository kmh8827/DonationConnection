import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import ReserveCard from '../components/reserveCard';

const Pickup = () => {
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        loadPickups();
    }, [])

    const loadPickups = () => {
        API.getDonations()
            .then(res => {
                let donationList = res.data;
                setDonations(donationList);
            })
            .catch(err => console.log(err));
    };

    return (
    <div>
        {donations && donations.map(thisDonation => 
            <ReserveCard 
                key={thisDonation._id}
                companyName={thisDonation.donation[0].companyName}
                perishable={thisDonation.donation[0].perishable}
                expDate={thisDonation.donation[0].expDate}
                availability={thisDonation.donation[0].availability}
                address={thisDonation.donation[0].address}
            />
        )}
    </div>
    );
}

export default Pickup;