import React from "react";
import "../assets/scss/home.scss";
import Login from "./login.js";
import Footer from "../components/footer.js";
 
function Home() {
    return(
        <div>
            <div className="bg-image">
            <section className="container">
                <div className="topnav">
                    <section className="topnav-right">
                        <a className="nav-link" href={{Login}}>Login</a>
                        <a className="nav-link" href={{Login}}>Register</a>
                    </section>
                </div>
            </section>
            

            </div>
            <div>

                <div className="bg-text">
                    <h1>Donation Connection</h1>
                    <p>Where hunger meets a helping hand.</p>
                </div>

            </div>

            <Footer />
        </div>


    );
}

export default Home;