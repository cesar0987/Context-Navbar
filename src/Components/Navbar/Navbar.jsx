import './Navbar.css';
import React from 'react';

const Navbar = ({userInfo}) => {
    return (
        <nav>
            <h1>Hi {userInfo}!</h1>
        </nav>
    );
}

export default Navbar;