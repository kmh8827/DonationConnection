import React from "react";
import "../assets/scss/home.scss";
// import Login from "./login.js";
 
function Home() {

    $(document).ready(function(){
        // set up hover panels
        // although this can be done without JavaScript, we've attached these events
        // because it causes the hover to be triggered when the element is tapped on a touch device
        $('.hover').hover(function(){
          $(this).addClass('flip');
        },function(){
          $(this).removeClass('flip');
        });
      });

    return(
        <div>
            <div className="bg-image-home">

                <div className="wrapper">
                    <div className="bg-text container">
                        <div className="donation">
                            DONATION CONNECTION
                        </div>
                    </div>

                    <div className="about">
                        <section className="container">
                            <h2>Where hunger meets a helping hand.</h2>
                            <p>Our mission is to help connect those in need with those who are willing to lend a helping hand. On one end restaurants, businesses, and any other organizations are able to reduce food waste by donating food items. On the other end, those who are in need of food items can search and find donations around them for pickup.</p>
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
        </div>


    );
}

export default Home;