import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import "./css/signup.css";

function Signup() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const accessTo = "/products";
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    return (
        <div>
            <div className="container_sp">
                <div className="header_section_sp">
                    <div className="header_section_top_sp">
                        <p>19:20</p>
                        <p>others</p>
                    </div>
                    <div className="img_container_sp">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="company logo"
                                className="logo_sp"
                            />
                        </Link>
                    </div>
                </div>
                <div className="main_section_sp">
                    <div className="form_title_sp">
                        <p>Sign Up</p>
                    </div>
                    <form className="signup_form">
                        <input
                            type="text"
                            name="firstName"
                            id="firstname"
                            placeHolder="First name"
                            value={user.firstName}
                            onChange={handleChange}
                            aria-placeholder="First name"
                        />
                        <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeHolder="Last name"
                            value={user.lastName}
                            onChange={handleChange}
                            aria-placeholder="last name"
                        />
                        <input
                            type="text"
                            name="country"
                            id="country"
                            placeHolder="Country "
                            value={user.country}
                            onChange={handleChange}
                            aria-placeholder="contry"
                        />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={user.email}
                            onChange={handleChange}
                            placeHolder="Email"
                            aria-placeholder="email "
                        />
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeHolder="Password"
                            value={user.password}
                            onChange={handleChange}
                            aria-placeholder="passwordd"
                        />
                        <input
                            type="text"
                            name="confirmPassword"
                            id="confirmPassword"
                            placeHolder="Confirm password"
                            value={user.confirmPassword}
                            onChange={handleChange}
                            aria-placeholder="confirm password"
                        />
                        <button className="login_btn_sp">
                            <Link to={user.firstName && accessTo}>Sign Up</Link>
                        </button>
                        <p>
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                style={{ color: "blue", marginLeft: "3px" }}
                            >
                                sign in
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;