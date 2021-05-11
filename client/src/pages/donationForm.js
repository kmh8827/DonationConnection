import React from "react";
import Header from "../components/header";
import API from "../utils/API";
import Footer from "../components/footer"

import "../assets/scss/form.scss";

class Form extends React.Component {
    state = {
        product: "",
        companyName: "",
        address: "",
        expiration: "",
        specialInstructions: "",
        allergies: "",
        checked: true,
        disable: true,
        quantity: 0,
        businessInfo: '',
        donationInfo: 'd-none',
        foodInfo: 'd-none',
        clickedNextP1: true,
        clickedNextP2: true,
        clickedPreviousP2: true,
        clickedPreviousP3: true

    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });

        if (
            this.state.product !== "" && this.state.companyName !== "" &&
            this.state.address !== "" && this.state.allergies !== "" &&
            this.state.quantity !== 0
        ) {
            this.setState({
                disable: false
            })
        } else {
            this.setState({
                disable: false
            })
        }
    };

    handleClick = event => {
        const name = event.target.name;
        const value = this.state.checked;

        if (value === false) {
            this.setState({
                [name]: true
            })
        }

        if (value === true) {
            this.setState({
                [name]: false
            })
        }

        console.log(value);
        console.log(this.state.checked);

    }

    handleSubmit = event => {
        event.preventDefault();

        const newEntry = {
            day: new Date().setDate(new Date().getDate()),
            product: this.state.product,
            companyName: this.state.companyName,
            address: this.state.address,
            perishable: this.state.checked ? 'false' : 'true',
            expDate: this.state.expiration,
            availability: 'true',
            allergies: this.state.allergies
        };
        console.log('The new Entry is ' + JSON.stringify(newEntry));
        API.newDonation(newEntry)
            .catch(err => console.log(err));
    };

    handlePreviousTwo = (event) => {
        event.preventDefault();
        const previousP2 = this.state.clickedPreviousP2;

        if(previousP2 === true) {
            this.setState({
                businessInfo: '',
                donationInfo: 'd-none',
                foodInfo: 'd-none'
            })
        }
    }
    handlePreviousThree = (event) => {
        event.preventDefault();
        const previousP3 = this.state.clickedPreviousP3;

        if(previousP3 === true) {
            this.setState({
                businessInfo: 'd-none',
                donationInfo: '',
                foodInfo: 'd-none'
            })
        }
    }

    handleNextOne = (event)  => {
        event.preventDefault();
        const nextP1 = this.state.clickedNextP1;

        if(nextP1 === true) {
            this.setState({
                businessInfo: 'd-none',
                donationInfo: '',
                foodInfo: 'd-none'
            })
        }
    }
    handleNextTwo = (event)  => {
        event.preventDefault();
        const nextP2 = this.state.clickedNextP2;

        if(nextP2 === true) {
            this.setState({
                businessInfo: 'd-none',
                donationInfo: 'd-none',
                foodInfo: ''
            })
        }

    }


    render() {
        // hides expiration date unless perishable is checked
        const hidden = this.state.checked === true ? 'd-none' : '';
    

        // const businessInfo = '';
        // const donationInfo = 'd-none';
        // const foodInfo = 'd-none';

        return (

            <div>
                <Header />
                <div className="container loginContainer mb-5 w-50 h-50">
                    <div className="row mb-2 ml-1">
                        <h2 className="font">Donate</h2>
                    </div>
                    <form className="pb-5">
                        <div className={this.state.businessInfo}>
                            <div className="form-group">
                                <label className="form-label">Company Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex. Papa John's"
                                    id="companyName"
                                    name="companyName"
                                    value={this.state.companyName}
                                    onChange={this.handleInputChange}
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
                                    value={this.state.address}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div
                                disabled={this.state.next}
                                type="button"
                                className="btn btn-info float-right nextBtn"
                                value={this.state.clickedNextP1}
                                onClick={this.handleNextOne}
                            >Next</div>
                        </div>

                        <div className={this.state.donationInfo}>
                            <div className="form-group mb-4">
                                <label className="form-label">Product:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ex. cheese pizzas"
                                    id="Product"
                                    name="product"
                                    value={this.state.product}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="ml-4 form-group mb-4">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="checked"
                                    value=""
                                    id="perishableCheck"
                                    onChange={this.handleClick}
                                />
                                <label className="form-check-label">Perishable</label>
                            </div>
                            <div className={hidden}>
                                <div className="form-group mb-4">
                                    <label className="form-label">Expiration Date:</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="expiration"
                                        name="expiration"
                                        value={this.state.expiration}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </div>
                            <div 
                                type="button"
                                name="previous"
                                className="btn btn-light float-left previousBtn"
                                value={this.state.clickedPreviousP2}
                                onClick={this.handlePreviousTwo} 
                            >Previous</div>
                            <div
                                disabled={this.state.disable}
                                type="button"
                                className="btn btn-info float-right nextBtn"
                                value={this.state.clickedNextP2}
                                onClick={this.handleNextTwo}
                            >Next</div>
                        </div>

                        <div className={this.state.foodInfo}>
                            <div className="form-group mb-4">
                                <label className="form-label">Quantity:</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="#"
                                    id="quantity"
                                    name="quantity"
                                    value={this.state.quantity}
                                    onChange={this.handleInputChange}
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
                                    value={this.state.specialInstructions}
                                    onChange={this.handleInputChange}
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
                                    value={this.state.allergies}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div 
                                type="button"
                                name="previous"
                                className="btn btn-light float-left previousBtn"
                                value={this.state.clickedPreviousP2}
                                onClick={this.handlePreviousThree}
                            >previous</div>
                            <div
                                disabled={this.state.disable}
                                type="button"
                                className="btn btn-success float-right submit"
                                onClick={this.handleSubmit}
                            >Donate!</div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Form;