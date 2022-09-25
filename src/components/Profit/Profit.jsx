import React from "react";
import "./Profit.css";

function Profit() {
  return (
    <section id="profit" className="profit">
      <div className="container container-flex">
        <div className="profit-main-col">
          <div className="col-1">
            <h2>Grow your profit and track your investments</h2>
            <p className="paragraph">
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </p>
            <button className="btn btn-blue">Learn More</button>
          </div>
          <div className="col-2">
            <img src="feature-3-img.png" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profit;
