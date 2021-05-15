import React, { useContext, useEffect, useState } from "react";
import API from "../utils/API";
import { CurrentUserContext } from "../context/currentUser";
import "../assets/scss/accountInfo.scss";
import Header from "../components/header"

const AccountInfo = () => {
    const { user } = useContext(CurrentUserContext);
    const [donations, setDonations] = useState(null);

    useEffect(() => {
        const donationCall = {
            userId: user._id
        }

        API.myDonations(donationCall).then(response => {
            console.log(response.data);
            setDonations(response.data);
        })
    }, [user]);

    return (
        <div>
            <div>
<<<<<<< HEAD
=======
                <Header />
                <div className="container loginContainer">
>>>>>>> 5c6d47cca4e94466fe99bf429669e2b1c1867a81
                <div className="companyAbout">
                    <h2 className="companyAbout accInfo">Account Info:</h2>
                    <div>
                        <label className="form-label">Username:</label>
                        <p>{user.username}</p>
                    </div>
                    <div>
                        <label className="form-label">Email:</label>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <label className="form-label">Total Donations:</label>
                        <p>{donations ? donations.length : 'None'}</p>
                    </div>
                </div>
                <React.Fragment>
                    <label className="form-label status onHold">Donations on hold:</label>
                    <label className="form-label status available">Available Donations:</label>
                    <label className="form-label status pickedup">Picked-up Donations:</label>
                </React.Fragment>
            </div>
        </div>
    )
}

export default AccountInfo;
