import React from "react";
import "../assets/scss/errorPage.scss"

class Error extends React.Component {
    render(){
    return(
        <div>
                <div classname="errorImage">
                <h3 className="errorh3">Whoopsss! You shouldnt be here!</h3>
                <div className="margin">
                <button type="button" className="btn btn-light return" onClick={event =>  window.location.href='/'}>Click Here To Return</button>
                </div>
                </div>
        </div>
    )}
}
export default Error;