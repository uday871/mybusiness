import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="awesome-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h1>Get Ready to Grow Your Business</h1>
          <div className="contact-info">
            <a href="mailto:info@vdigtech.com" className="contact-item">
              gshankar@gmail.com
            </a>
            <a href="tel:+917008166042" className="contact-item">
              +91 90478683724657
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/AboutC1">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/ContactC1">Contact Us</Link></li>
            </ul>
          </div>
          <div className="services">
            <h3>Services</h3>
            <ul>
              <li><Link to="/ContactC1">Website Development</Link></li>
              <li><Link to="/ContactC1">App Development</Link></li>
              <li><Link to="/ContactC1">Website Maintenance</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-media">
          <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
          <a href="https://www.instagram.com/gshankar413?utm_source=qr" className="social-icon"><FaFacebook /></a>
          <a href="https://www.linkedin.com/in/mr-gaurishankar-khadga-922ba72b0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BQ%2Fa2LN%2BOR8yXBHvPXjDkqw%3D%3D" className="social-icon"><FaLinkedin /></a>
        
        </div>
        <p className="copyright">
          &copy; 2024 mr gshankar. All Rights Reserved. 
          <span>Privacy Policy</span> | <span>Terms & Condition</span>
        </p>
        <p className="credits">
          Made with <span className="heart">♥</span> by Thinkweb Hub
        </p>
      </div>
    </footer>
  );
};

export default Footer;
