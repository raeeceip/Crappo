import React from "react";
import { useState } from "react";
import "./Securetrade.css";

function Securetrade() {
  const [cardOne, setCardOne] = useState("");

  function mouseEnterDiv() {
    setCardOne((notActive) => {
      notActive.classList.add("blueStyle");
      console.log("MouseEnterWorking");
    });
  }

  return (
    <section id="securetrade" className="secureTrade">
      <div className="container container-flex">
        <div>
          <div className="title-col">
            <h2 className="darkBlueText title">
              Trade securely and market the high growth cryptocurrencies.
            </h2>
          </div>
          <div className="col">
            <div className="inner-col-1 blueStyle" id="card-one">
              <img src="bitcon.png" loading="lazy" />
              <h2>
                Bitcoin<span className="shorthand">BTC</span>
              </h2>
              <p>
                Digital currency in which a record of transactions is
                maintained.
              </p>
              <button className="btn btn-blue">
                Start Mining <span className="btn-arrow">{">"}</span>
              </button>
            </div>

            <div
              className={`inner-col-1 whiteStyle ${cardOne}`}
              id="card-two"
              MouseEnter={mouseEnterDiv}
            >
              <img src="ethereum.png" loading="lazy" />
              <h2>
                Ethereum<span className="shorthand">ETH</span>
              </h2>
              <p>
                Blockchain technology to create and run decentralized digital
                applications.
              </p>
              <button className="btn btn-blue">
                Start Mining <span className="btn-arrow">{">"}</span>
              </button>
            </div>
            <div className="inner-col-1 whiteStyle" id="card-three">
              <img src="litecoin.png" loading="lazy" />
              <h2>
                Litecoin<span className="shorthand">LTC</span>
              </h2>
              <p>
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </p>
              <button className="btn btn-blue">
                Start Mining <span className="btn-arrow">{">"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Securetrade;
