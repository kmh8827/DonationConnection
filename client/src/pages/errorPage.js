import React from "react";
import "../assets/scss/errorPage.scss"

class Error extends React.Component {
    render(){
    return(
        <div>
                <div classname="errorImage">
                <div className="errorh3">
                <h3 className="newTag">Whoops!!! You took a wrong turn!</h3>
                <div className="margin">
                <button type="button" className="btn btn-light return" onClick={event =>  window.location.href='/'}>Click Here To Return</button>
                </div>
                </div>
                </div>
        </div>
    )}
}
export default Error;