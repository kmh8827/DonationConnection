import React from "react";
import "../assets/scss/errorPage.scss"
class Error extends React.Component {
    render(){
    return(
        <div>
                <h3 className="errorh3">You shouldnt be here!</h3>
                <div className="margin">
                <button type="button" className="btn btn-light" onClick={event =>  window.location.href='/'}>Click Here To Return</button>
                </div>
        </div>
    )}
}
export default Error;