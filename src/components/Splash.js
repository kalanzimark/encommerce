import React from "react";
import "./css/splash.css";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";
function Splash() {
    return (
        <div>
            <div className="container">
                <header>
                    <p>19:20</p>
                    <p>others</p>
                </header>
                <main>
                    <div className="img_container">
                        <img src={logo} alt="company logo" className="logo" />
                    </div>
                    <div className="company_desc">
                        <h2>Welcome to EnCommerce</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Et quam
                            vitae at purus libero porttitor. Sodales fringilla
                            sit condimentum sed lacus nunc.
                        </p>
                    </div>
                    <div className="buttons">
                        <button className="login">
                            <Link to="/login">Login</Link>
                        </button>

                        <button className="signup">
                            <Link to="/signup">Sign up</Link>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Splash;
