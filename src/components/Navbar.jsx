import React from "react";
import { Link } from "react-router-dom"; 
import "../App.css";

const Navbar = () => {
    return (
        <div className="topnav">
            <Link to="/" className="App-link">
              Home
            </Link>
            <Link to="DataFetch" className="App-link">
              DataFetch
            </Link>
            <Link to="login/dashboard" className="App-link">
             Login </Link>
            <Link to="contact" className="App-link">
             Contact
            </Link>
        </div>
    );
};
export default Navbar;