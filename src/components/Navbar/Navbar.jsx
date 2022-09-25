import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const navHandler = () => {
    setNavToggle((prevData) => !prevData);
  };

  return (
    <nav  className="navbar w-100 flex">
      <div className="containers w-100">
        <div className="navbar-content flex fw-3">
          <div className="brand-and-toggler flex flex-between nav-width">
            <Link to="/" className="navbar-brand">
              <img src="logo.svg" alt="logo" />
            </Link>
            <div
              type="button"
              className={`hamburger-menu ${
                navToggle ? "hamburger-menu-change" : ""
              }`}
              onClick={navHandler}
            >
              <div className="bar-top"></div>
              <div className="bar-middle"></div>
              <div className="bar-bottom"></div>
            </div>
          </div>

          <div
            className={`navbar-collapse ${
              navToggle ? "show-navbar-collapse" : ""
            }`}
          >
            <div className="navbar-collapse-content">
              <ul className="navbar-nav nav-width-1">
                <li className="text-black">
                  <a to="#product">Product</a>
                </li>
                <li className="text-black">
                  <a to="#features">Feature</a>
                </li>
                <li className="text-black">
                  <a to="#statistics">About</a>
                </li>
                <li className="text-black">
                  <a to="#contact">Contact</a>
                </li>
                <li className="text-black">
                  <a to="/">Login</a>
                </li>
              </ul>
              <div className="flex navbar-btns ">
                <button type="button" className="btn btn-blue">
                  <span>Register</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
