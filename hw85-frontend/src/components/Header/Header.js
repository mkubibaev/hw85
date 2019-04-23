import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand">Music</NavLink>
            <div className="menu">
                <NavLink to="/register" className="navbar-brand">Register</NavLink>
                <NavLink to="/login" className="navbar-brand">Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;
