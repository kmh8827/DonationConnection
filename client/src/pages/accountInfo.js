import React, { useContext, useEffect } from "react";
import "../assets/scss/accountInfo.scss";
import { CurrentUserContext } from "../context/currentUser";

const AccountInfo = () => {
    const user = useContext(CurrentUserContext);
    console.log(user);

    useEffect(() => {

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
                    </div>
                    <div>
                        <label className="form-label">Total Donations:</label>
                        <p>{user.user.donations.length}</p>
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
