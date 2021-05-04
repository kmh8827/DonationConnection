import React from "react";
import Allergic from "../components/allergies";
import NavBar from "../components/header";
import "../assets/scss/form.scss";
class Form extends React.Component {
    state = {
        product: "",
        companyName: "",
        address: "",
        perishable: "",
        expiration: "",
        quantity: "",
        specialInstructions: ""
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        event.preventDefault();
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
                            name="perishable"
                            value={this.state.perishable}
                            type="checkbox"
                            placeholder="true or false"
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
                        <Allergic />
                        <button onClick={this.handleSubmit} className="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default Form;