import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="main-footer-container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>About Us</h3>
            <p>
              We are dedicated to providing the best web development resources and tutorials. 
              Stay connected with us for more updates!
            </p>
          </div>

          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/contact">Contact</Link> </li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p>Email: ahirwarharicharan8719@gmail.com</p>
            <p>Phone: +91 8719912062</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
