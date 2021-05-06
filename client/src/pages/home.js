import React from "react";
import "../assets/scss/home.scss";
// import Login from "./login.js";
import Footer from "../components/footer.js";
 
function Home() {


    return(
        <div>
            <div className="bg-image">

                <div className="wrapper">
                    <div className="bg-text container">
                        <h1>Donation Connection</h1>
                        <p>Where hunger meets a helping hand.</p>
                    </div>

                    <div className="about">
                        <section className="container">
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                        </section>
                    </div>

                    <div className="navv">
                        <section className="container">
                            <button type="button" className="btn btn-light" onClick={event =>  window.location.href='/login'}>Login</button>
                            <button type="button" className="btn btn-light" onClick={event =>  window.location.href='/login'}>Register</button>
                        </section>
                    </div>
                </div>
            
            </div>
            <Footer />
        </div>


    );
}

export default Home;