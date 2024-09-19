import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

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
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="services">
            <h3>Services</h3>
            <ul>
              <li><a href="/web-development">Website Development</a></li>
              <li><a href="/app-development">App Development</a></li>
              <li><a href="/maintenance">Website Maintenance</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-media">
          <a href="https://facebook.com" className="social-icon"><FaFacebook /></a>
          <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
          <a href="https://linkedin.com" className="social-icon"><FaLinkedin /></a>
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
