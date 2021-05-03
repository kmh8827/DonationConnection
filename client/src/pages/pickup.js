import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import ReserveCard from '../components/reserveCard';

const Pickup = () => {
    const [data, setData] = useState({ donations: [] });

    useEffect(() => {
        loadPickups();
    }, []);

    const loadPickups = () => {
        API.getDonations()
            .then(res => {
                console.log('the data is ' + JSON.stringify(res.data));
                setData(JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
    };

    return (
    <div>
        {/* {data.map((thisDonation) =>
            <ReserveCard 
                key={data._id}
                companyName={thisDonation.donation.companyName}
                perishable={thisDonation.donation.perishable}
                expDate={thisDonation.donation.expDate}
                availability={thisDonation.donation.availability}
                address={thisDonation.donation.address}
            />
        )} */}
    </div>
    );
}

export default Pickup;