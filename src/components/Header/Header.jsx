import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar />
      <header id="header" className="header flex flex-center flex-column">
        <header className="header">
          <section className="container container-flex">
            <div className="header-main-col">
              <div className="col-1">
                <div className="discount-col">
                  <p className="discount-code">75% SAVE</p>
                  <p className="discount-code-promo">
                    For the Black Friday weekend
                  </p>
                </div>
                <h1>Fastest and secure platform to invest in crypto</h1>
                <p className="paragraph">
                  Buy and sell cryptocurrencies, trusted by 10M wallets with
                  over $30 billion in transactions.
                </p>
                <button className="btn btn-blue">
                  Try for FREE <span className="btn-arrow">{">"}</span>
                </button>
              </div>
              <div className="col-2">
                <img src="hero-img.png" alt="hero-image" loading="lazy" />
              </div>
            </div>
          </section>
        </header>
      </header>
    </div>
  );
};

export default Header;
