import React from "react";
class Form extends React.Component{
    state={
        address: "",
        allegies: "",
        companyName:"",
        expiration: "",
        parishable: "",
        specialInstructions: "",
        quantity: ""
    };

    render(){
        return (
            <div>
                <p>testing out this app</p>
            </div>
        )
    }
}
export default Form;