import React, { useState } from "react";
import logo from "./assets/logo.png";
import "./css/login.css";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [access, setAccess] = useState(false);
    const accessTo = "/products";
    const handleAccess = () => {
        if (email && password) {
            setAccess(true);
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div className="container_lg">
                <div className="header_section_lg">
                    <div className="header_section_top_lg">
                        <p>19:20</p>
                        <p>others</p>
                    </div>
                    <div className="img_container_lg">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="company logo"
                                className="logo_lg"
                            />
                        </Link>
                    </div>
                </div>
                <div className="main_section_lg">
                    <div className="form_title_lg">
                        <p>Login</p>
                    </div>
                    <div>
                        <form className="login_form" action="">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeHolder="Email"
                                required
                                aria-placeholder="email "
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}
                                placeHolder="Password"
                                aria-placeholder="passwordd"
                                required
                            />

                            <button
                                className="login_btn_lg"
                                type="submit"
                                onSubmit={handleSubmit}
                            >
                                <Link to={email && password && accessTo}>
                                    Login
                                </Link>
                            </button>

                            <p>
                                Don't have an account?
                                <Link
                                    to="/signup"
                                    style={{ color: "blue", marginLeft: "3px" }}
                                >
                                    create an Encommcere Account.
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
