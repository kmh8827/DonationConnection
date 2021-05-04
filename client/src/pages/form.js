import React from "react";
import NavBar from "../components/header";
import API from "../utils/API";

import "../assets/scss/form.scss";
class Form extends React.Component {
    state = {
        product: "",
        companyName: "",
        address: "",
        perishable: "",
        expiration: "",
        specialInstructions: "",
        allergies: "",
        checked: true
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleClick = event => {
        const name = event.target.name;
        const value = this.state.checked;

        if (value === false) {
            this.setState({
                [name] : true
            })
        }

        if (value === true) {
            this.setState({
                [name] : false
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
        return (
            <div>
                <NavBar />
                <div className="background">
                    <p>Donation Form</p>
                    <form className="board">
                        <h3>Product</h3>
                        <input
                            value={this.state.product}
                            name="product"
                            type="text"
                            placeholder="cheese pizzas"
                            onChange={this.handleInputChange}
                        />
                        <h3>Company Name</h3>
                        <input
                            name="companyName"
                            value={this.state.companyName}
                            type="text"
                            placeholder="company name"
                            onChange={this.handleInputChange}
                        />
                        <h3>Address</h3>
                        <input
                            name="address"
                            value={this.state.address}
                            type="text"
                            placeholder="address"
                            onChange={this.handleInputChange}
                        />
                        <h3>Perishable</h3>
                        <input
                            name="checked"
                            type="checkbox"
                            onChange={this.handleClick}
                        />
                        <h3>Expiration</h3>
                        <input
                            name="expiration"
                            value={this.state.expiration}
                            type="date"
                            onChange={this.handleInputChange}
                        />
                        <h3>How many?</h3>
                        <input
                            name="quantity"
                            value={this.state.quantity}
                            type="number"
                            placeholder="#"
                            onChange={this.handleInputChange}
                        />
                        <h3>Special Instructions</h3>
                        <input
                            name="specialInstructions"
                            value={this.state.specialInstructions}
                            type="text"
                            placeholder="keep frozen"
                            onChange={this.handleInputChange}
                        />
                        <h3>Allergies</h3>
                        <input
                            name="allergies"
                            value={this.state.allergies}
                            type="text"
                            placeholder="Eggs, Milk"
                            onChange={this.handleInputChange}
                        />
                        <br />
                        <button onClick={this.handleSubmit} className="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Form;