import React, { useContext, useEffect, useState } from "react";
import API from "../utils/API";
import { CurrentUserContext } from "../context/currentUser";
import "../assets/scss/accountInfo.scss";

const AccountInfo = () => {
    const user = useContext(CurrentUserContext);
    const [donations, setDonations] = useState(null);
    console.log(user);

    useEffect(() => {
        API.myDonations().then(response => {
            console.log(response.data);
            setDonations(response.data);
        })
    }, []);

    return (
        <div>
            <div>
                <div className="companyAbout">
                    <h2 className="companyAbout accInfo">Account Info:</h2>
                    <div>
                        <label className="form-label">Username:</label>
                        <p>{user.user.username}</p>
                    </div>
                    <div>
                        <label className="form-label">Email:</label>
                        <p>{user.user.email}</p>
                    </div>
                    <div>
                        <label className="form-label">Total Donations:</label>
                    </div>
                </div>
                <React.Fragment>
                    <label className="form-label onHold">Donations on hold:</label>
                    <label className="form-label onHold">Available Donations:</label>
                    <label className="form-label onHold">Cancel Donation:</label>
                </React.Fragment>
            </div>
        </div>
    )
}

export default AccountInfo;
