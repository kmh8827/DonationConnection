import React from 'react';
import ReactTooltip from "react-tooltip";
import { useHistory } from "react-router-dom";
import '../assets/scss/dashboard.scss';
import pickup from '../assets/images/icons/pickup.png';
import donate from '../assets/images/icons/donate.png';
import Header from '../components/header'

const Dashboard = () => {

    const history = useHistory();

    return (
        <>
        <div className="">
            <Header />
            <div className="container dashContainer">
                <div className="row ml-5">
                    <div className="pickup col">
                        <div type="button" onClick={() =>  history.push('/pickup')} data-tip data-for="pickupInfo" className="btn btn-dark bigBtn pickupBtn m-4 mt-5">
                            <h5 className="p-3 text-center">Pickup</h5>
                            <img id="pickupImg" className="m-3 mx-auto image-fluid" alt="Pickup" src={pickup}/>
                        </div>
                        <ReactTooltip id="pickupInfo" place="top" effect="solid">
                            Find available donations for pickup near you
                        </ReactTooltip>
                    </div>
                    <div className="donate col">
                        <div type="button" onClick={() =>  history.push('/donate')} data-tip data-for="donationInfo" className="btn btn-dark bigBtn m-4 mt-5">
                            <h5 className="p-3 text-center">Donate</h5>
                            <img id="donateImg" className="mt-n3 m-3 mx-auto image-fluid" alt="Donate" src={donate}/>
                        </div>
                        <ReactTooltip id="donationInfo" place="top" effect="solid">
                            Post available donation(s) in your area
                        </ReactTooltip>
                    </div>
                </div>
            </div>
        </div>
        </>
    )

}

export default Dashboard;