import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <h3>Questions? Contact us.</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Help Center</h3>
          <ul>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Account</h3>
          <ul>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Only on Netflix</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Media Center</h3>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="language-selector">
        <select>
          <option value="en">English</option>
        </select>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Netflix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
