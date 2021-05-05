import React from "react";
import Allergic from "../components/allergies";
import NavBar from "../components/header";
import "../assets/scss/form.scss";
class Form extends React.Component{
    state = {
        companyName:"",
        address: "",
        parishable: "",
        expiration: "",
        quantity: "",
        specialInstructions: ""
    };

    render(){
        return (
            <div>
                <NavBar />
                <div className="background">
                <div className="padding">
                <form className="board">
                <h2 className="h2">Donation Form</h2>
                    <h3 className="h3">Company Name</h3>
                    <input 
                    value={this.state.companyName}
                    type="text"
                    placeholder="Company Name"
                    />
                    <h3 className="h3">Address</h3>
                    <input 
                    value={this.state.address}
                    type="text"
                    placeholder="Address"
                    />
                    <h3 className="h3">Perishable</h3>
                    <input 
                    value={this.state.perishable}
                    type="boolean"
                    placeholder="yes or no"
                    />
                    <h3 className="h3">Expiration</h3>
                    <input 
                    value={this.state.expiration}
                    type="date"
                    />
                    <h3 className="h3">How many?</h3>
                    <input 
                    value={this.state.quantity}
                    type="number"
                    placeholder="#"
                    />
                    <h3 className="h3">Special Instructions</h3>
                    <input 
                    value={this.state.specialInstructions}
                    type="text"
                    placeholder="freeze, refrigerate...etc"
                    />
                    <Allergic />
                    <button className="submit">Submit</button>
                </form>
                </div>
                </div>
            </div>
        )
    }
}
export default Form;