import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";

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
            <div className="container">
            <form className="row g-3 needs-validation" novalidate>
                <div className="col-md-4">
                    <label for="validationCustom01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustom02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
                    <div className="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div className="col-md-4">
                    <label for="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div>
                
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Submit form</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Register;