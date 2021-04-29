import React from "react";
import Allergic from "./allergies";
class Form extends React.Component{
    state={
        companyName:"",
        address: "",
        parishable: "",
        expiration: "",
        quantity: "",
        allergy: "",
        specialInstructions: ""
    };

    render(){
        return (
            <div>
                <p>Donation Form</p>
                <form>
                    <h3>Company Name</h3>
                    <input 
                    value={this.state.companyName}
                    type="text"
                    placeholder="Company Name"
                    />
                    <h3>Address</h3>
                    <input 
                    value={this.state.address}
                    type="text"
                    placeholder="Address"
                    />
                    <h3>Perishable</h3>
                    <input 
                    value={this.state.perishable}
                    type="boolean"
                    placeholder="yes or no"
                    />
                    <h3>Expiration</h3>
                    <input 
                    value={this.state.expiration}
                    type="date"
                    />
                    <h3>How many?</h3>
                    <input 
                    value={this.state.quantity}
                    type="number"
                    placeholder="#"
                    />
                    <Allergic />
                </form>
            </div>
        )
    }
}
export default Form;