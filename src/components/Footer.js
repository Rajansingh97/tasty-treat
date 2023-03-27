import React from "react";
import '../css/Check.css';
function Footer() {
return (
    <>
    <footer>
      <div className="container">
        <div className="footer-1 line">
          <h2>Follow Us</h2>
          <hr />
          <ul className="social">
            <li style={{float: 'left', marginLeft: '1px'}}>
              <a href="https://www.google.com/aclk?sa=l&ai=DChcSEwijiYvRv_n9AhVqmWYCHbC5DDEYABAAGgJzbQ&sig=AOD64_3JCYKq05QpkXAdLjcY_sxWDYd7Iw&q&adurl&ved=2ahUKEwiOnYXRv_n9AhVB7TgGHZzWCxIQ0Qx6BAgJEAE">
                <img src="../../img/Logo/AllLogo.jpg" alt="" />
              </a>
            </li>
            <li style={{float: 'left'}}><h1>We also accept:</h1></li>
            <li style={{float: 'left'}}>
              <a href="https://business.paytm.com/payment-link">
                <img src="../../img/Logo/visaLogo.jpg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-2 line">
          <h2>Supports</h2>
          <hr />
          <ul>
            {/* <li>
              <a href="#">Home</a>
            </li> */}
            <li>
              <a href="#"><h1>About us</h1></a>

            </li>
            <li>
              <a href="#"><p>Contact us:- 
                        +91 8737299190
                         ask4rajansingh@gmail.com </p>
                         <p> 
                        4709 marine drive mumbai 821108
                         </p> </a>
            </li>
            {/* <li>
              <a href="#">Feedback</a>
            </li> */}
          </ul>
        </div>
        <div className="footer-3 line">
          <h2>My Accounts</h2>
          <hr />
          <ul>
            <li>
              <a href="#">My account</a>
            </li>
            <li>
              <a href="#">My orders</a>
            </li>
            <li>
              <a href="#">My credit slip</a>
            </li>
            <li>
              <a href="#">My addresses</a>
            </li>
            <li>
              <a href="#">My personnel information</a>
            </li>
          </ul>
        </div>
        <div className="footer-4 line">
          <h2>Useful Links</h2>
          <hr />
          <ul>
            <li>
              <a href="#">Specials</a>
            </li>
            <li>
              <a href="#">New dishes</a>
            </li>
            <li>
              <a href="#">Best dishesh</a>
            </li>
            <li>
              <a href="#">Our store(s)!</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Delivery policy</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Frequently Asked questions</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <div class="copyright">
    <p>&copy; Tasty Treat, All rights reserved.</p>
    <p>Written by Tasty Treat</p>
    <p>Visit us at: tastytreat.in or at Express Road,Banglore,KA,India</p>
</div>
</>
);
}

export default Footer;