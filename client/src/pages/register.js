import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AUTH from "../utils/AUTH";
import "../assets/scss/register.scss";
import BrandIcon from '../assets/images/icons/BrandIcon.png'

const Register = () => {
    const history = useHistory();
    // Object that contains the new User's Information
    const [userObject, setUserObject] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    // form page states and button functions
    const clickedNextP1 = true;
    const clickedNextP2 = true;
    const clickedPrevP2 = true;
    const clickedPrevP3 = true;

    const [formPage, setFormPage] = useState({
        accountInfo: '',
        userInfo: 'd-none',
        passwordInfo: 'd-none',
    });

    const handlePreviousTwo = (event) => {
        event.preventDefault();
        const previousP2 = clickedPrevP2;

        if (previousP2 === true) {
            setFormPage({
                accountInfo: '',
                userInfo: 'd-none',
                passwordInfo: 'd-none'
            })
        }
    }

    const handlePreviousThree = (event) => {
        event.preventDefault();
        const previousP3 = clickedPrevP3;

        if (previousP3 === true) {
            setFormPage({
                accountInfo: 'd-none',
                userInfo: '',
                passwordInfo: 'd-none'
            })
        }
    }

    const handleNextOne = (event) => {
        event.preventDefault();
        const nextP1 = clickedNextP1;

        if (nextP1 === true) {
            setFormPage({
                accountInfo: 'd-none',
                userInfo: '',
                passwordInfo: 'd-none'
            })
        }
    }
    const handleNextTwo = (event) => {
        event.preventDefault();
        const nextP2 = clickedNextP2;

        if (nextP2 === true) {
            setFormPage({
                accountInfo: 'd-none',
                userInfo: 'd-none',
                passwordInfo: ''
            })
        }
    }

    // Changes the userObject when entering information
    const handleChange = (e) => {
        setUserObject({
            ...userObject,
            [e.target.name]: e.target.value
        });
    };

    // On Submit button click, attemps to make a new user
    const handleSubmit = (e) => {
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
                if (!response.data.error) {
                    alert('Account Successfully Created!')
                    history.push('/login')

                } else {
                    alert(response.data.error)
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
                            <p className="nav-link navBtn" onClick={() => history.push('/')}>Home</p>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="container loginContainer mb-5 w-50 h-50">
                <div className="headingRegister">
                    <h2 style={{ color: "black" }}>Register</h2>
                </div>
                <form className="pb-5 needs-validation" noValidate>

                    <div className={formPage.accountInfo}>
                        <div className="registerField">
                            <label className="form-label">E-mail</label>
                            <div className="input-group has-validation">
                                <input type="text"
                                    name="email"
                                    className="form-control"
                                    id={userObject.email ? '' : 'noInput'}
                                    placeholder="jjoe43@gmail.com"
                                    aria-describedby="inputGroupPrepend"
                                    onChange={handleChange}
                                    value={userObject.email}
                                     />
                                {/* <div className="invalid-feedback">
                                    Please choose an e-mail.
                                </div> */}
                            </div>
                        </div>
                        <div className="registerField">
                            <label className="form-label">Username</label>
                            <div className="input-group has-validation">
                                <input type="text"
                                    name="username"
                                    className="form-control"
                                    id={userObject.username ? '' : 'noInput'}
                                    placeholder="joe345"
                                    aria-describedby="inputGroupPrepend"
                                    onChange={handleChange}
                                    value={userObject.username}
                                     />
                                {/* <div className="invalid-feedback">
                                    Please choose a username.
                                </div> */}
                            </div>
                        </div>
                        <div
                            // disabled={disable}
                            type="button"
                            className="btn btn-info float-right nextBtn"
                            value={clickedNextP1}
                            onClick={handleNextOne}
                        >Next</div>
                    </div>

                    <div className={formPage.userInfo}>
                        <div className="registerField">
                            <label className="form-label">First name</label>
                            <input type="text"
                                name="firstName"
                                className="form-control"
                                id={userObject.firstName ? '' : 'noInput'}
                                placeholder="Chuck"
                                onChange={handleChange}
                                value={userObject.firstName}
                                 />
                            {/* <div className="valid-feedback">
                                Looks good!
                            </div> */}
                        </div>
                        <div className="registerField">
                            <label className="form-label">Last name</label>
                            <input type="text"
                                name="lastName"
                                className="form-control"
                                id={userObject.lastName ? '' : 'noInput'}
                                placeholder="Norris"
                                onChange={handleChange}
                                value={userObject.lastName}
                                 />
                            {/* <div className="valid-feedback">
                                Looks good!
                            </div> */}
                        </div>
                        <div
                            type="button"
                            name="previous"
                            className="btn btn-light float-left previousBtn"
                            value={clickedPrevP2}
                            onClick={handlePreviousTwo}
                        >Previous</div>
                        <div
                            // disabled={disable}
                            type="button"
                            className="btn btn-info float-right nextBtn"
                            value={clickedNextP2}
                            onClick={handleNextTwo}
                        >Next</div>
                    </div>

                    <div className={formPage.passwordInfo}>
                        <div className="registerField">
                            <label className="form-label">Password</label>
                            <div className="input-group has-validation">
                                <input type="password"
                                    name="password"
                                    className="form-control"
                                    id={userObject.password ? '' : 'noInput'}
                                    placeholder=""
                                    aria-describedby="inputGroupPrepend"
                                    onChange={handleChange}
                                    value={userObject.password}
                                     />
                                {/* <div className="invalid-feedback">
                                    Please enter a password.
                                </div> */}
                            </div>
                        </div>
                        <div className="registerField">
                            <label for="validationCustomPassword" className="form-label">Confirm password</label>
                            <div className="input-group has-validation">
                                <input type="password"
                                    name="confirmPassword"
                                    className="form-control"
                                    id={userObject.confirmPassword === userObject.password ? '' : 'noInput'}
                                    placeholder=""
                                    aria-describedby="inputGroupPrepend"
                                    onChange={handleChange}
                                    value={userObject.confirmPassword}
                                    required />
                                {/* <div className="invalid-feedback">
                                    Please confirm your password.
                                </div> */}
                            </div>
                        </div>
                        <div
                            type="button"
                            name="previous"
                            className="btn btn-light float-left previousBtn"
                            value={clickedPrevP2}
                            onClick={handlePreviousThree}
                        >Previous</div>
                        <button
                            className="btn btn-info registrationBtn float-right ml-3 mr-0 press-on"
                            onClick={handleSubmit}
                        >Register Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;