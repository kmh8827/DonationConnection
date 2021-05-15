import React from "react";
import "../assets/scss/accountInfo.scss";
import Header from "../components/header"

class AccountInfo extends React.Component {
    state ={
        reserved:""
    }
    render() {
        return(
            <div>
                <Header />
                <div className="container loginContainer">
                <div className="companyAbout">
                    <h2 className="companyAbout accInfo">Account Info:</h2>
                <div>
                    <label className="form-label">Company Name:</label>
                </div>
                <div>
                    <label className="form-label">Address:</label>
                </div>
                <div>
                    <label className="form-label">Total Donations:</label>
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
}
export default AccountInfo;