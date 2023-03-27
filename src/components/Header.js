import React from 'react';
import logo from '../img/logo2.jpg';
import '../css/Check.css';

const Header = () => {
  return (
    <div className="head-image" style={{ height: '20%' }}>
      <div className="head-row">
        <img className="logo-head" src={logo} alt="" />
        <h2 className="head-name" style={{ color: 'yellow', fontWeight: 'bold', fontFamily: "Copperplate, Papyrus, fantasy" }}>Tasty Treat</h2>
        <br />
        <h2 className="head-bottom-name" style={{ color: 'yellow', fontWeight: 'bold', fontFamily: "Copperplate, Papyrus, fantasy" }}>Enjoy the taste...</h2>
      </div>
      <div className="right-head">
        <div className="signup-head">
          <a href="/singup">Signup</a>
        </div>
        <div className="login-head">
          <a href="/Login">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
