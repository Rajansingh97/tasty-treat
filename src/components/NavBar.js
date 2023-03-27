import React from 'react';
import '../css/Check.css';

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/dishes">HOME</a></li>
                    <li><a href="/dishes">DISHES</a></li>
                    {/* <li><a href="#About us">ABOUT US</a></li> */}
                    {/* <li><a href="#">CONTACT US</a></li> */}
                    <li><a href="/Feedback">FEEDBACK</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
