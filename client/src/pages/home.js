import React from "react";
import "../assets/scss/home.scss";
import Login from "./login.js";

const Home = () => {
    return(
        <div>
            <div className="bg-image">
            <section className="container">
                <span className="navbar-toggler-icon"></span>
                <section className="collapse navbar-collapse" id="navbar">
                <section className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <a className="nav-link" href={{Login}}>Login</a>
                    <a className="nav-link" href={{Login}}>Register</a>
                </section>
                </section>
            </section>
            

            </div>
            <div>

                <div className="bg-text">
                    <h1>Donation Connection</h1>
                    <p>Where hunger meets a helping hand.</p>
                </div>

            </div>
        </div>


    );
}

export default Home;