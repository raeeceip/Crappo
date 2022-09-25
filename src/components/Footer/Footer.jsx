import React from "react";
import "./Footer.css";

function Footer() {

  return (
    <footer id="footer" className="footer">
      <div className="container container-flex">
        <div className="footer-col">
          <div className="col-1 crappo-logo">
            <img src="logo.svg" alt="logo" loading="lazy" />
          </div>
          <div className="col-2">
            <h3>Quick Link</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Download Whitepapper </a>
              </li>
              <li>
                <a href="#">Smart Token</a>
              </li>
              <li>
                <a href="#">Blockchain Explorer</a>
              </li>
              <li>
                <a href="#">Crypto API</a>
              </li>
              <li>
                <a href="#">Interest</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h2>We accept following payment systems</h2>
            <img
              src="visa.png"
              alt="visa"
              className="brand-logo"
              width="92px"
              loading="lazy"
            />
            <img
              src="mastercard.png"
              alt="mastercard"
              className="brand-logo"
              loading="lazy"
            />
            <img
              src="bitcoin.png"
              alt="bitcoin"
              className="brand-logo"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="footer-end">
        <div className="col-1">
          <p>
            © <span id="dateHtml">{new Date().getFullYear()}</span> CRAPPO. All rights reserved
          </p>
        </div>

        <div className="col-2">
          <a href="#">
            <img src="facebook.svg" alt="facebook" loading="lazy" />
          </a>
          <a href="#">
            <img src="instagram.svg" alt="instagram" loading="lazy" />
          </a>
          <a href="#">
            <img src="youtube.svg" alt="youtube" loading="lazy" />
          </a>
          <a href="#">
            <img src="twitter.svg" alt="twitter" loading="lazy" />
          </a>
          <a href="#">
            <img src="linkedin.svg" alt="linkedin" loading="lazy" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
