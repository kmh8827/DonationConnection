import React, { useState, useContext } from "react";
import API from "../utils/API";
import { CurrentUserContext } from "../context/currentUser";
import "../assets/scss/form.scss";

const Form = () => {
    const user = useContext(CurrentUserContext);
    
    const [checked, setChecked] = useState(true);
    const [disable, setDisable] = useState(true);
    const clickedNextP1 = true;
    const clickedNextP2 = true;
    const clickedPrevP2 = true;
    const clickedPrevP3 = true;

    const [donation, setDonation] = useState({
        product: '',
        companyName: '',
        address: '',
        expiration: '',
        specialInstructions: '',
        allergies: '',
        quantity: '',
        userId: user.user.user_id
    });

    const [business, setBusiness] = useState({
        businessInfo: '',
        donationInfo: 'd-none',
        foodInfo: 'd-none',
    });

    console.log(user);

    const handleInputChange = event => {
        setDonation({
            ...donation,
            [event.target.name]: event.target.value
        });

        if (
            donation.product !== "" && donation.companyName !== "" &&
            donation.address !== "" && donation.allergies !== "" &&
            donation.quantity !== 0
        ) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    const handleClick = () => {

        if (checked === true) setChecked(false);
        if (checked === false) setChecked(true);

    }

    const handleSubmit = event => {
        event.preventDefault();

        const newUserEntry = {
            userId: user.user.use_id
        };

        API.newDonation(donation)
            .catch(err => console.log(err));
    };

    const handlePreviousTwo = (event) => {
        event.preventDefault();
        const previousP2 = clickedPrevP2;

        if (previousP2 === true) {
            setBusiness({
                businessInfo: '',
                donationInfo: 'd-none',
                foodInfo: 'd-none'
            })
        }
    }

    const handlePreviousThree = (event) => {
        event.preventDefault();
        const previousP3 = clickedPrevP3;

        if (previousP3 === true) {
            setBusiness({
                businessInfo: 'd-none',
                donationInfo: '',
                foodInfo: 'd-none'
            })
        }
    }

    const handleNextOne = (event) => {
        event.preventDefault();
        const nextP1 = clickedNextP1;

        if (nextP1 === true) {
            setBusiness({
                businessInfo: 'd-none',
                donationInfo: '',
                foodInfo: 'd-none'
            })
        }
    }
    const handleNextTwo = (event) => {
        event.preventDefault();
        const nextP2 = clickedNextP2;

        if (nextP2 === true) {
            setBusiness({
                businessInfo: 'd-none',
                donationInfo: 'd-none',
                foodInfo: ''
            })
        }
    }

    return (

        <div>
            <div className="container loginContainer mb-5 w-50 h-50">
                <div className="row mb-2 ml-1">
                    <h2 className="font">Donate</h2>
                </div>
                <form className="pb-5">
                    <div className={business.businessInfo}>
                        <div className="form-group">
                            <label className="form-label">Company Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. Papa John's"
                                id="companyName"
                                name="companyName"
                                value={donation.companyName}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. 1003 main st Newbern NC"
                                id="address"
                                name="address"
                                value={donation.address}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div
                            disabled={disable}
                            type="button"
                            className="btn btn-info float-right nextBtn"
                            value={clickedNextP1}
                            onClick={handleNextOne}
                        >Next</div>
                    </div>

                    <div className={business.donationInfo}>
                        <div className="form-group mb-4">
                            <label className="form-label">Product:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. cheese pizzas"
                                id="Product"
                                name="product"
                                value={donation.product}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="ml-4 form-group mb-4">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="checked"
                                value=""
                                id="perishableCheck"
                                onChange={handleClick}
                            />
                            <label className="form-check-label">Perishable</label>
                        </div>
                        {/* hides expiration date unless perishable is checked */}
                        <div className={checked === true ? 'd-none' : ''}>
                            <div className="form-group mb-4">
                                <label className="form-label">Expiration Date:</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="expiration"
                                    name="expiration"
                                    value={donation.expiration}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div
                            type="button"
                            name="previous"
                            className="btn btn-light float-left previousBtn"
                            value={clickedPrevP2}
                            onClick={handlePreviousTwo}
                        >Previous</div>
                        <div
                            disabled={disable}
                            type="button"
                            className="btn btn-info float-right nextBtn"
                            value={clickedNextP2}
                            onClick={handleNextTwo}
                        >Next</div>
                    </div>

                    <div className={business.foodInfo}>
                        <div className="form-group mb-4">
                            <label className="form-label">Quantity:</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="#"
                                id="quantity"
                                name="quantity"
                                value={donation.quantity}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Special Instructions:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. keep frozen until ready to eat"
                                id="specInstructions"
                                name="specialInstructions"
                                value={donation.specialInstructions}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="form-label">Allergies:</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex. Peanuts"
                                id="allergies"
                                name="allergies"
                                value={donation.allergies}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div
                            type="button"
                            name="previous"
                            className="btn btn-light float-left previousBtn"
                            value={clickedPrevP2}
                            onClick={handlePreviousThree}
                        >previous</div>
                        <div
                            disabled={disable}
                            type="button"
                            className="btn btn-success float-right submit"
                            onClick={handleSubmit}
                        >Donate!</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;