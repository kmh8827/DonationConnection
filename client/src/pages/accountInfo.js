import React from "react";

class AccountInfo extends React.Component {
    state ={
        reserved:""
    }
    render() {
        return(
            <div>
                <div>
                    <h2>Account Info</h2>
                <div className="companyAbout">
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
                <div>
                    <label className="form-label">Donations on hold:</label>
                </div>
                <div>
                    <label className="form-label">Available Donations:</label>
                </div>
                <div>
                    <label className="form-label">Cancel Donation:</label>
                </div>
                </div>
            </div>
        )
    }
}
export default AccountInfo;