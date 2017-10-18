import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <h1>Short Lnk Application</h1>
                <nav className="menu">
                    <ul>
                        <li><NavLink to="/" activeClassName="is-active" exact={true}>Login</NavLink></li>
                        <li><NavLink to="/signup" activeClassName="is-active">Sign Up</NavLink></li>
                        <li><NavLink to="/links" activeClassName="is-active">Links</NavLink></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;