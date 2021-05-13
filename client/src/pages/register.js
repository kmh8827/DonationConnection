import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../assets/scss/register.scss";

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
            <div className="container registerPage">
                <div className="headingRegister">
                    <h2 style={{color: "black"}}>New User Registration Form</h2>
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
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
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
                        <button className="btn btn-info registerBtn ml-3 mr-0" onClick={handleSubmit}>Register</button>
                        <a href="/login" className="loginBtn">Login</a>
                    </div>
                   
                </form>
                </div>
        </div>
    );
}

export default Register;