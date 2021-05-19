import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/scss/home.scss";
 
function Home() {

    const history = useHistory();

    return(
        <div>
            <div className="bg-image-home">

                <div className="wrapper">
                    <div className="bg-text container">
                        <div className="donation">
                            DONATION CONNECTION
                        </div>
                    </div>
                    {/* Mission Statement */}
                    <div className="about">
                        <section className="flex-container">
                            <div className="speech-bubble">
                            <br></br>
                            <h2>Where hunger meets a helping hand...</h2>
                            <p className="mission">Our mission is to help connect those in need with those who are willing to lend a helping hand. On one end restaurants, businesses, and any other organizations are able to reduce food waste by donating food items. On the other end, those who are in need of food items can search and find donations around them for pickup.</p> 
                            <br></br>
                            </div>
                        </section>
                    </div>

                    <div className="navv">
                        <section className="container">
                            {/* Go to Log-in */}
                            <button type="button" className="buttonz btn btn-light" onClick={() => history.push('/login')}>Login</button>
                            {/* Go to Register */}
                            <button type="button" className=" buttonz btn btn-light" onClick={() => history.push('/register')}>Register</button>
                        </section>
                    </div>
                </div>
            
            </div>
        </div>


    );
}

export default Home;