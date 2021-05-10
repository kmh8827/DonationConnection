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
        quantity: 0
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



    render() {
        const hidden =  this.state.checked === true ? 'd-none' : '';
        
        return (
            
            <div>
                <Header />
                <div className="container loginContainer mb-5 w-50 h-50">
                    <div className="row mb-2 ml-1">
                        <h2 className="font">Donate</h2>
                    </div>
                    <form className="pb-5">
                        <div className="form-group">
                            <label for="inputCompany" className="form-label">Company Name:</label>
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
                            <label for="inputProduct" className="form-label">Address:</label>
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
                        <div className="form-group mb-4">
                            <label for="inputProduct" className="form-label">Product:</label>
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
                            <label className="form-check-label" for="defaultCheck1">Perishable</label>
                        </div>
                        <div className={hidden}>
                            <div className="form-group mb-4">
                                <label for="inputProduct" className="form-label">Expiration Date:</label>
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
                        <div className="form-group mb-4">
                            <label for="inputProduct" className="form-label">Quantity:</label>
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
                            <label for="inputProduct" className="form-label">Special Instructions:</label>
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
                            <label for="inputProduct" className="form-label">Allergies:</label>
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
                        disabled={this.state.disable}
                        type="button" 
                        className="btn btn-info float-right submit"
                        onClick={this.handleSubmit}
                        >Donate</div>
                    </form>
                </div>
                    {/* <div className="background">
                    <form className="board">
                        <h2>Donation Form</h2>
                        <h3>Product:</h3>
                        <input
                            value={this.state.product}
                            name="product"
                            type="text"
                            placeholder="cheese pizzas"
                            onChange={this.handleInputChange}
                        />
                        <h3>Company Name:</h3>
                        <input
                            name="companyName"
                            value={this.state.companyName}
                            type="text"
                            placeholder="company name"
                            onChange={this.handleInputChange}
                        />
                        <h3>Address:</h3>
                        <input
                            name="address"
                            value={this.state.address}
                            type="text"
                            placeholder="address"
                            onChange={this.handleInputChange}
                        />
                        <h3>Perishable:</h3>
                        <input
                            name="checked"
                            type="checkbox"
                            onChange={this.handleClick}
                        />
                        <h3>Expiration:</h3>
                        <input
                            name="expiration"
                            value={this.state.expiration}
                            type="date"
                            onChange={this.handleInputChange}
                        />
                        <h3>Quantity:</h3>
                        <input
                            name="quantity"
                            value={this.state.quantity}
                            type="number"
                            placeholder="#"
                            onChange={this.handleInputChange}
                        />
                        <h3>Special Instructions:</h3>
                        <input
                            name="specialInstructions"
                            value={this.state.specialInstructions}
                            type="text"
                            placeholder="keep frozen"
                            onChange={this.handleInputChange}
                        />
                        <h3>Allergies:</h3>
                        <input
                            name="allergies"
                            value={this.state.allergies}
                            type="text"
                            placeholder="Eggs, Milk"
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <button disabled={this.state.disable} onClick={this.handleSubmit} className="submit">Submit</button>
                    </form>
                </div> */}
                    <Footer />
                </div>
        )
    }
}
export default Form;