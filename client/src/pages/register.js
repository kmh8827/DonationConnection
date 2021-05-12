import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import AUTH from "../utils/AUTH";

const Register = () => {
    const [userObject, setUserObject] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
        redirectTo: null
    });

    const [redirectTo, setRedirectTo] = useState(null);
    // const [registered, setRegistered] = useState(false);
    // const [error, setError] = useState(null);

    const handleChange = (e) => {
        setUserObject({
            ...userObject,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        AUTH.signup({
            firstName: userObject.firstName,
            lastName: userObject.lastName,
            username: userObject.username,
            password: userObject.password,
        })
        .then(response => {
            if (!response.data.errmsg) {
                setRedirectTo('/')
            } else {
                console.log('duplicate');
            }
        });

        if (redirectTo) {
            return <Redirect to= {{pathname: redirectTo }} />
        };
    };

    return (
        <div>
            <div className="container">
                <h2>New User Registration Form</h2><br/>
                <form className="row g-3 needs-validation" novalidate>
                    <div className="col-md-4">
                        <label for="validationCustom01" className="form-label">First name</label>
                        <input type="text"
                        name="firstName"
                        className="form-control" 
                        id="validationCustom01" 
                        onChange={handleChange} 
                        value={userObject.firstName} 
                        required/>
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustom02" className="form-label">Last name</label>
                        <input type="text" 
                        name="lastName"
                        className="form-control" 
                        id="validationCustom02" 
                        onChange={handleChange} 
                        value={userObject.lastName} 
                        required />
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text"
                        name="username"
                        className="form-control" 
                        id="validationCustomUsername" 
                        aria-describedby="inputGroupPrepend" 
                        onChange={handleChange} 
                        value={userObject.username} 
                        required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustomPassword" className="form-label">Password</label>
                        <div className="input-group has-validation">
                        <input type="password" 
                        name="password"
                        className="form-control" 
                        id="validationCustomPassword" 
                        aria-describedby="inputGroupPrepend" 
                        onChange={handleChange} 
                        value={userObject.password} 
                        required />
                        <div className="invalid-feedback">
                            Please enter a password.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <label for="validationCustomPassword" className="form-label">Confirm password</label>
                        <div className="input-group has-validation">
                        <input type="password" 
                        name="confirmPassword"
                        className="form-control" 
                        id="validationCustomConfirmPassword" 
                        aria-describedby="inputGroupPrepend" 
                        onChange={handleChange} 
                        value={userObject.confirmPassword} 
                        required />
                        <div className="invalid-feedback">
                            Please confirm your password.
                        </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" onClick={handleSubmit}>Register</button>
                    </div>
                    </form>
                </div>
        </div>
    );
}

export default Register;