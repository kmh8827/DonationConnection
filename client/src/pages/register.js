import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../assets/scss/register.scss";
import BrandIcon from '../assets/images/icons/BrandIcon.png'

const Register = () => {
    const [userObject, setUserObject] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [redirectTo, setRedirectTo] = useState(null);
    const [registered, setRegistered] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setUserObject({
            ...userObject,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const submit = (userData) => {
            return axios.post("/register", userData);
        };

        submit({
            firstName: userObject.firstName,
            lastName: userObject.lastName,
            username: userObject.username,
            password: userObject.password,
        })
        .then(response => {
            if (response.data.error) {
                setError(response.data.error)
            } else {
                setError(false);
                setRegistered(true);
            }
        });

        if (redirectTo) {
            return <Redirect to= {{pathname: redirectTo }} />
        };
    };

    return (
        <div>
            <nav className="navbar navTitleBar navbar-expand-lg fixed-top">
                <img id="brandIcon" className=" mx-auto image-fluid" alt="Pickup" src={BrandIcon}/>
                <div className="navbar-brand appTitle ml-4">Donation Connection</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-right" id="navbarNav">
                    <ul className="navbar-nav ml-auto pl-0">
                        <li className="nav-item active">
                            <a className="nav-link navBtn" href="/home">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container registerPage">
                <div className="headingRegister">
                    <h2 style={{color: "black"}}>Registration Form</h2>
                </div>                
                <form className="row g-1 needs-validation" noValidate>
                    
                    <div className="col-md-9 registerField">
                        <label for="validationCustom01" className="form-label">First name</label>
                        <input type="text" className="form-control" id="validationCustom01" onChange={handleChange} value={userObject.firstName} required/>
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div className="col-md-9 registerField">
                        <label for="validationCustom02" className="form-label">Last name</label>
                        <input type="text" className="form-control" id="validationCustom02" onChange={handleChange} value={userObject.lastName} required />
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div className="col-md-9 registerField">
                        <label for="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" onChange={handleChange} value={userObject.username} required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-9 registerField">
                        <label for="validationCustomPassword" className="form-label">Password</label>
                        <div className="input-group has-validation">
                        <input type="password" className="form-control" id="validationCustomPassword" aria-describedby="inputGroupPrepend" onChange={handleChange} value={userObject.password} required />
                        <div className="invalid-feedback">
                            Please enter a password.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-9 registerField">
                        <label for="validationCustomPassword" className="form-label">Confirm password</label>
                        <div className="input-group has-validation">
                        <input type="password" className="form-control" id="validationCustomConfirmPassword" aria-describedby="inputGroupPrepend" onChange={handleChange} value={userObject.confirmPassword} required />
                        <div className="invalid-feedback">
                            Please confirm your password.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-9 floater mr-10">
                        <button className="btn btn-info registrationBtn ml-3 mr-0 press-on" onClick={handleSubmit}>Register Now</button>
                        <a href="/login" className="logBtn">Login</a>
                    </div>
                   
                </form>
                </div>
        </div>
    );
}

export default Register;