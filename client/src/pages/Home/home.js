import React from "react";
import "./home.scss";
import Login from "../../Login/login.js";

function Home() {
    return(
        <div>
            <nav>
                <ul className="nav navbar ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href={{Login}} id="login-modal">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={{Login}}>Register</a>
                    </li>
                </ul>
            </nav>

            <div>

                <div classNameName="bg-image"></div>

                <div classNameName="bg-text">
                    <h1>Donation Connection</h1>
                    <p>Where hunger meets a helping hand.</p>
                </div>

            </div>
        </div>

    );
}

export default Home;