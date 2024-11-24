import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 Institutions & Constitution. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-use">Terms of Use</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
