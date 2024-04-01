import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          </div>
          <div className="footer__links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer__contact">
            
          <p>Off Mombasa road</p>
            <p>Nairobi Kenya</p>
            <p>Email: info@kimc.ac.ke</p>
            <p>Telephone:  +254-020-699 7000</p>
          </div>
        
      </div>
    </footer>
  );
};

export default Footer;
