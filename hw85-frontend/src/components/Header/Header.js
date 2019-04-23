import React from 'react';
import {NavLink} from "react-router-dom";

const Header = ({user}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <NavLink to="/" className="navbar-brand">Music</NavLink>

            {user
                ? <div>
                    <NavLink to="/track-history" className="navbar-brand">Track history</NavLink>
                </div>
                : <div>
                    <NavLink to="/register" className="navbar-brand">Register</NavLink>
                    <NavLink to="/login" className="navbar-brand">Login</NavLink>
                </div>
            }

        </nav>
    );
};

export default Header;
