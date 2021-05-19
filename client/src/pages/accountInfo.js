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

    // Displays the donations
    const loadDonations = () => {
        const donationCall = {
            userId: user._id
        }

        API.myDonations(donationCall).then(response => setDonations(response.data))
            .catch(err => console.log(err));
    };

    // Completes the Transaction
    const completePickup = (id) => {
        API.completeDonations(id).catch(err => console.log(err));
        loadDonations()
    };

    // Removes doantion from Database
    const removeDonations = (id) => {
        API.removeDonations(id).catch(err => console.log(err));
        loadDonations();
    };

    // Ends the reservaiton on a Donations
    const makeAvailable = (id) => {
        API.makeAvailable(id).catch(err => console.log(err))
        loadDonations();
    }

    return (
        <div>
            <Header />
            <div>
                <div class="container infoo">

                    <div className="companyAbout">
                        <h2 className="companyAbout accInfo">Account Info:</h2>
                        <row className="row justify-content-center">
                            {/* Currently Signed-In user's Username */}
                            <div className="user">
                                <label className="form-label">Username: {user.username}</label>
                            </div>
                            {/* Currently Signed-In user's E-Mail Address */}
                            <div className="user">
                                <label className="form-label">E-mail: {user.email}</label>
                            </div>
                            {/* Currently Signed-In user's Total Number of Donations in database */}
                            <div className="user">
                                <label className="form-label">Total Donations: {donations ? donations.length : 'None'}</label>
                            </div>

                        </row>
                    </div>
                    <React.Fragment>
                        <label className="form-label status onHold">Donations on hold:</label>
                            {/* List of currently reserved Donations */}
                        {donations && donations.map(thisDonation =>
                            thisDonation.availability === "false" ?
                            <ul key={thisDonation._id}>
                                <li>{"Product: " + thisDonation.product}</li>
                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                <li>{"Expiration Date: " + !thisDonation.expDate ? "None" : thisDonation.expDate}</li>
                                <button onClick={() => makeAvailable(thisDonation._id)}>End Reservation</button>
                                <button onClick={() => completePickup(thisDonation._id)}>Complete</button>
                            </ul>
                            :
                            <ul></ul>
                        )}

                        <label className="form-label status available">Available Donations:</label>
                            {/* The donations that the user has up that are currently Available */}
                        {donations && donations.map(thisDonation =>
                            thisDonation.availability === "true" ?
                            <ul key={thisDonation._id}>
                                <li>{"Product: " + thisDonation.product}</li>
                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                <li>{"Expiration Date: " + !thisDonation.expDate ? "None" : thisDonation.expDate}</li>
                                <button onClick={() => removeDonations(thisDonation._id)}>Remove from Listing</button>
                            </ul>
                            :
                            <ul></ul>
                        )}
                            {/* A history of completed donations that the user can see  */}
                        <label className="form-label status pickedup">Picked-up Donations:</label>
                        
                        {donations && donations.map(thisDonation =>
                            thisDonation.availability === "complete" ?
                            <ul key={thisDonation._id}>
                                <li>{"Product: " + thisDonation.product}</li>
                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                <li>{"Expiration Date: " + !thisDonation.expDate ? "None" : thisDonation.expDate}</li>
                                <button onClick={() => removeDonations(thisDonation._id)}>Remove from Listing</button>
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
