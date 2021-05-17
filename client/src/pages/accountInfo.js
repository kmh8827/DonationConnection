import React, { useContext, useEffect, useState } from "react";
import API from "../utils/API";
import { CurrentUserContext } from "../context/currentUser";
import Header from "../components/header";
import "../assets/scss/accountInfo.scss";

const AccountInfo = () => {
    const { user } = useContext(CurrentUserContext);
    const [donations, setDonations] = useState([]);

    useEffect(() => {  
        loadDonations();
    }, [])

    const loadDonations = () => {
        const donationCall = {
            userId: user._id
        }

        API.myDonations(donationCall).then(response => {
            console.log(response.data);
            setDonations(response.data);
        })
        .catch(err => console.log(err));
    }

    const completePickup = (id) => {
        console.log('hi');
        API.completeDonations(id)
          .catch(err => console.log(err));
    };

    return (
        <div>
            <Header />
            <div>
                <div class="container infoo">

                    <div className="companyAbout">
                        <h2 className="companyAbout accInfo">Account Info:</h2>
                        <row className="row justify-content-center">
                            <div className="user">
                                <label className="form-label">Username: {user.username}</label>
                            </div>
                            <div className="user">
                                <label className="form-label">Email: {user.email}</label>
                            </div>
                            <div className="user">
                                <label className="form-label">Total Donations: {donations ? donations.length : 'None'}</label>
                            </div>

                        </row>
                    </div>
                    <React.Fragment>
                        <label className="form-label status onHold">Donations on hold:</label>
              
                        {donations && donations.map(thisDonation =>
                            thisDonation.availability === "false" ?
                            <ul>
                                <li>{"Product: " + thisDonation.product}</li>
                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                <li>{"Expiration Date: " + !thisDonation.expDate ? "None" : "Hi"}</li>
                                <button>Remove</button>
                                <button onClick={() => completePickup(thisDonation._id)}>Complete</button>
                            </ul>
                            :
                            <ul></ul>
                        )}

                        <label className="form-label status available">Available Donations:</label>

                        {donations && donations.map(thisDonation =>
                            thisDonation.availability === "true" ?
                            <ul>
                                <li>{"Product: " + thisDonation.product}</li>
                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                <li>{"Expiration Date: " + !thisDonation.expDate ? "None" : "Hi"}</li>
                                <button>Remove</button>
                            </ul>
                            :
                            <ul></ul>
                        )}
                           
                        <label className="form-label status pickedup">Picked-up Donations:</label>
                        
                        {donations && donations.map(thisDonation =>
                            thisDonation.availability === "complete" ?
                            <ul>
                                <li>{"Product: " + thisDonation.product}</li>
                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                <li>{"Expiration Date: " + !thisDonation.expDate ? "None" : "Hi"}</li>
                                <button>Remove</button>
                            </ul>
                            :
                            <ul></ul>
                        )}
                        
                    </React.Fragment>
                    </div>
                </div>
        </div>
    )
}

export default AccountInfo;
