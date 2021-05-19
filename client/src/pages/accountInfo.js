import React, { useContext, useEffect, useState } from "react";
import API from "../utils/API";
import { CurrentUserContext } from "../context/currentUser";
import Header from "../components/header";
import "../assets/scss/accountInfo.scss";

const AccountInfo = () => {
    const { user } = useContext(CurrentUserContext);
    const [donations, setDonations] = useState([]);
    const [reserved, setReserved] = useState([]);
    console.log(reserved.length);
    console.log(typeof(reserved));

    useEffect(() => {  
        loadReserved();
        loadDonations();
    }, [])

    // Displays the donations
    const loadDonations = () => {
        const donationCall = {
            userId: user._id
        }

        API.myDonations(donationCall).then(response => setDonations(response.data))
            .catch(err => console.log(err));
        console.log(donations);

    };

    // Loads the donations that the user has reserved
    const loadReserved = () => {
        const userReserved = {
            reservedBy: user.username
        };
        console.log(userReserved.reservedBy)
        console.log(reserved);
        console.log(reserved.length);

        API.myReserved(userReserved).then(response => setReserved(response.data))
            .catch(err => console.log(err));
        console.log(reserved);
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

    const [displayInfo, setDisplayInfo] = useState({
        onHoldInfo: 'd-none',
        availableInfo: 'd-none',
        completedInfo: 'd-none',
        myReserved: 'd-none'
    });

    const showDonations = () => {
        setDisplayInfo({
            onHoldInfo: '',
            availableInfo: 'd-none',
            completedInfo: 'd-none',
            myReserved: 'd-none'

        })
    }

    const showAvailable = () => {
        setDisplayInfo({
            onHoldInfo: 'd-none',
            availableInfo: '',
            completedInfo: 'd-none',
            myReserved: 'd-none'

        })
    }

    const showCompleted = () => {
        setDisplayInfo({
            onHoldInfo: 'd-none',
            availableInfo: 'd-none',
            completedInfo: '',
            myReserved: 'd-none'

        })
    }

    const showMyreserved = () => {
        setDisplayInfo({
            onHoldInfo: 'd-none',
            availableInfo: 'd-none',
            completedInfo: 'd-none',
            myReserved: 'd-none'
        })
    }


    return (
        <div>
            <Header />
            <div >
                <div class="container loginContainer mb-5">

                    <div className="">
                        <h2 style={{ color: "black" }} className="text-center">Account Info:</h2>
                        <div className="row">
                            <div className="user">
                                <label className="form-label">Username: {user.username}</label>
                            </div>
                            {/* Currently Signed-In user's E-Mail Address */}
                            <div className="user">
                                <label className="form-label">E-mail: {user.email}</label>
                            </div>
                            {/* Currently Signed-In user's Total Number of Donations in database */}
                            <div className="user">
                                <label className="form-label">Total Listed Donations: {donations ? donations.length : 'None'}</label>
                            </div>
                                {/* Currently Signed-In user's Total Number of Donations in database */}
                                <div className="user">
                                <label className="form-label">Total Reserved Donations: {reserved ? reserved.length : 'None'}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md">
                                <div type="button" className="btn btn-danger status onHold" onClick={showDonations}>Pending Donation Pickups</div>
                                <div className={displayInfo.onHoldInfo}>
                                    {donations && donations.map(thisDonation =>
                                        thisDonation.availability === "false" ?
                                            <ul key={thisDonation._id}>
                                                <li>{"Product: " + thisDonation.product}</li>
                                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                                <li>{"ReservedBy: " + thisDonation.reservedBy}</li>
                                                <li>{"Expiration Date: " + thisDonation.expDate ? thisDonation.expDate : "None"}</li>
                                                <button className="btn btn-danger" onClick={() => makeAvailable(thisDonation._id)}>End Reservation</button>
                                                <button className="btn btn-danger" onClick={() => completePickup(thisDonation._id)}>Complete</button>
                                            </ul>
                                            :
                                            <ul></ul>
                                    )}
                                </div>
                            </div>
                            <div className="col-md">
                                <div type="button" className="btn btn-warning status pickedup" onClick={showAvailable}>Available Donations</div>
                                <div className={displayInfo.availableInfo}>
                                    {donations && donations.map(thisDonation =>
                                        thisDonation.availability === "true" ?
                                            <ul key={thisDonation._id}>
                                                <li>{"Product: " + thisDonation.product}</li>
                                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                                <li>{"Expiration Date: " + thisDonation.expDate ? thisDonation.expDate : "None"}</li>
                                                <button className="btn btn-warning" onClick={() => removeDonations(thisDonation._id)}>Remove from Listing</button>
                                            </ul>
                                            :
                                            <ul></ul>
                                    )}

                                </div>
                            </div>
                            <div className="col-md">
                                <div type="button" className="btn btn-success status available" onClick={showCompleted}>Completed Donations</div>
                                <div className={displayInfo.completedInfo}>
                                    {donations && donations.map(thisDonation =>
                                        thisDonation.availability === "complete" ?
                                            <ul key={thisDonation._id}>
                                                <li>{"Product: " + thisDonation.product}</li>
                                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                                <li>{"Picked Up By: " + thisDonation.reservedBy}</li>
                                                <li>{"Expiration Date: " + thisDonation.expDate ? thisDonation.expDate : "None"}</li>
                                                <button className="btn btn-success" onClick={() => removeDonations(thisDonation._id)}>Remove from Listing</button>
                                            </ul>
                                            :
                                            <ul></ul>
                                    )}
                                </div>
                            </div>

                            <div className="col-md">
                                <div type="button" className="btn btn-info status myReserved" onClick={showMyreserved}>My Reserved Donations</div>
                                <div className={displayInfo.myReserved}>
                                    {reserved && reserved.map(thisDonation =>
                                            <ul key={thisDonation._id}>
                                                <li>{"Company Name: " + thisDonation.companyName}</li>
                                                <li>{"Product: " + thisDonation.product}</li>
                                                <li>{"Address: " + thisDonation.address}</li>
                                                <li>{"Quantity: " + thisDonation.quantity}</li>
                                                <li>{"Expiration Date: " + thisDonation.expDate ? thisDonation.expDate : "None"}</li>
                                                

                                                <button className="btn btn-success" onClick={() => makeAvailable(thisDonation._id)}>Make Available</button>
                                            </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountInfo;
