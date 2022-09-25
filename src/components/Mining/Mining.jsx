import React from "react";
import "./Mining.css";

function Mining() {
  return (
    <section id="mining" className="mining">
      <div className="container container-flex">
        <div className="main-col">
          <div className="col-1">
            <h3>Start mining now</h3>
            <p>
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <div className="col-2">
            <input type="email" placeholder="Enter your email" />
            <div>
              <button className="btn btn-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mining;
