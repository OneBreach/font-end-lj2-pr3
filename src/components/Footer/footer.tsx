import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    
    <footer>
      <div className="line"></div>
      
  <div className="footer-container">
    <div className="footer-section">
      <h3>Socials</h3>
      <ul>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Telegram</a></li>
        <li><a href="#">Reddit</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Youtube</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Policy</h3>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Cookie policy</a></li>
        <li><a href="#">Cookie preferences</a></li>
        <li><a href="#">Community Rules</a></li>
        <li><a href="#">Disclaimer</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Products</h3>
      <ul>
        <li><a href="#">Crypto Checker Basic</a></li>
        <li><a href="#">Crypto Checker Standard</a></li>
        <li><a href="#">Crypto Checker Developer</a></li>
        <li><a href="#">Crypto Checker Educatieve</a></li>
        <li><a href="#">Crypto Checker Premium</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Support</h3>
      <ul>
        <li><a href="#">Request Form</a></li>
        <li><a href="#">Contact Support</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Glossary</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>About Us</h3>
      <p>Crypto Checker is your go-to destination for reliable cryptocurrency data. Our platform provides real-time prices, historical trends, and in-depth market analysis, empowering you to make informed decisions in the dynamic world of digital assets. Join us as we navigate the future of finance together.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
