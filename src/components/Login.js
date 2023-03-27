import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../css/Check.css';
import Header from './Header';

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = check();
    if (isValid) {
      // submit form data
    }
  };

  const check = () => {
    let isValid = true;
   
    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }
    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
    alert('LOGGED IN')
    return isValid;
  };

  return (
    <>
    <Header/>
    <div class="container">
    <NavBar />
    <div class="home-page">
    
    
    <main>
    <div class="create-title" >

<h1>LOGIN</h1>
</div>
<br />
      <form name="signupform" onSubmit={handleSubmit}>
      <div class="signup-title">

<h1>LOG IN</h1>
</div>
<br/>

        {/* <label>
          Name:
          <input
            type="text"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <br />
          <span style={{ color: 'red' }}>{nameError}</span>
          <br />
        </label>
         */}

        <label>
          Email:
          <input
            type="text"
            name="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <span style={{ color: 'red' }}>{emailError}</span>
          <br />
  
        </label>
        <label>
          Password:
          <input
            type="password"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <span style={{ color: 'red' }}>{passwordError}</span>
          <br />
          <br />
        </label>
        <input type="submit" value="LOGIN" className="create-account-button" />

        <br />
        <br />
        {/* <p style={{color: "white"}}>
          already have an account?
          <span>
            <a href="#" style={{color: "yellow"}}>Click here to Login</a>
          </span>
        </p> */}
      </form>
    </main>
    </div>

<Footer/>
</div>
</>
  );
}

export default Login;
