import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <h2>Company Name</h2>
            <p>Description of any product or motto of the company.</p>
          </div>

          <div className="footer-items">
            <h3>Quick Links</h3>
            <ul>
              <Link to="/">
                <li>Explore</li>
              </Link>
              <Link to="/">
                <li>About Us</li>
              </Link>
              <Link to="/">
                <li>Cities</li>
              </Link>
            </ul>
            
          </div>
          <div className="footer-items">
            <h3>Contact us</h3>
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true"></i>XYZ, abc
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true"></i>123456789
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                xyz@gmail.com
              </li>
            </ul>

            <div className="social-media">
              <Link to="/">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="/">
                <i className="fab fa-google-plus-square"></i>
              </Link>
            </div>
          </div>

          
        </div>
        <div className="footer-bottom">Copyright &copy; company 2022.</div>
      </div>
    </div>
  );
};

export default Footer;
