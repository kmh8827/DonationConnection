import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AUTH from "../utils/AUTH";
import "../assets/scss/register.scss";
import BrandIcon from '../assets/images/icons/BrandIcon.png'

const Register = () => {
    const history = useHistory();
    const [userObject, setUserObject] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    // const [disabled, setDisabled] = useState(true)

    const handleChange = (e) => {
        setUserObject({
            ...userObject,
            [e.target.name]: e.target.value
        });

        // (userObject.firstName && userObject.lastName &&
        //     userObject.username && userObject.password &&
        //     userObject.confirmPassword)
        //     ? setDisabled(false)
        //     : setDisabled(true)
    };

    const handleSubmit = (e) => {
        console.log('SUBMIT');
        e.preventDefault();

        AUTH.signup({
            firstName: userObject.firstName,
            lastName: userObject.lastName,
            username: userObject.username,
            email: userObject.email,
            password: userObject.password,
        })
            .then(response => {
                console.log(response);
                if (!response.data.errmsg) {
                    alert('Successful Creation')
                } else {
                    console.log('duplicate');
                }
            });
    };

    return (
        <div>
            <nav className="navbar navTitleBar navbar-expand-lg fixed-top">
                <img id="brandIcon" className=" mx-auto image-fluid" alt="Pickup" src={BrandIcon} />
                <div className="navbar-brand appTitle ml-4">Donation Connection</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-right" id="navbarNav">
                    <ul className="navbar-nav ml-auto pl-0">
                        <li className="nav-item active">
                            <a className="nav-link navBtn" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container registerPage">
                <div className="headingRegister">
                    <h2 style={{ color: "black" }}>Registration Form</h2>
                </div>
                <form className="row g-1 needs-validation" noValidate>

                    <div className="col-md-10 registerField">
                        <label for="validationCustom01" className="form-label">First name</label>
                        <input type="text"
                            name="firstName"
                            className="form-control"
                            id="validationCustom01"
                            placeholder="Ex. Jane"
                            onChange={handleChange}
                            value={userObject.firstName}
                            required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-10 registerField">
                        <label for="validationCustom02" className="form-label">Last name</label>
                        <input type="text"
                            name="lastName"
                            className="form-control"
                            id="validationCustom02"
                            placeholder="Ex. Joe"
                            onChange={handleChange}
                            value={userObject.lastName}
                            required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                    </div>
                    <div className="col-md-10 registerField">
                        <label for="validationCustomUsername" className="form-label">Username</label>
                        <div className="input-group has-validation">
                            <input type="text"
                                name="username"
                                className="form-control"
                                id="validationCustomUsername"
                                placeholder="Ex. janejoe"
                                aria-describedby="inputGroupPrepend"
                                onChange={handleChange}
                                value={userObject.username} required />
                            <div className="invalid-feedback">
                                Please choose a username.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-10 registerField">
                        <label for="validationCustomEmail" className="form-label">E-mail</label>
                        <div className="input-group has-validation">
                            <input type="text"
                                name="email"
                                className="form-control"
                                id="validationCustomEmail"
                                placeholder="Ex. jjoe@email.com"
                                aria-describedby="inputGroupPrepend"
                                onChange={handleChange}
                                value={userObject.email} required />
                            <div className="invalid-feedback">
                                Please choose an e-mail.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-10 registerField">
                        <label for="validationCustomPassword" className="form-label">Password</label>
                        <div className="input-group has-validation">
                            <input type="password"
                                name="password"
                                className="form-control"
                                id="validationCustomPassword"
                                placeholder="Ex. 123"
                                aria-describedby="inputGroupPrepend"
                                onChange={handleChange}
                                value={userObject.password}
                                required />
                            <div className="invalid-feedback">
                                Please enter a password.
                        </div>
                        </div>
                    </div>
                    <div className="col-md-10 registerField">
                        <label for="validationCustomPassword" className="form-label">Confirm password</label>
                        <div className="input-group has-validation">
                            <input type="password"
                                name="confirmPassword"
                                className="form-control"
                                id="validationCustomConfirmPassword"
                                placeholder="Ex. 123"
                                aria-describedby="inputGroupPrepend"
                                onChange={handleChange}
                                value={userObject.confirmPassword}
                                required />
                            <div className="invalid-feedback">
                                Please confirm your password.
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 floater ">
                        <button className="btn btn-info logBtn ml-3 mr-0 press-on" onClick={() => history.push('/login')} >Login</button>
                        <button className="btn btn-info registrationBtn ml-3 mr-0 press-on" onClick={handleSubmit}>Register Now</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Register;