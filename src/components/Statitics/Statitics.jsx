import React from "react";
import "./Statistics.css";

function Statistics() {
  return (
    <section id="statistics" className="statistics">
      <div className="container container-flex">
        <div className="statistics-main-col">
          <div className="col-2">
            <img src="feature-2-img.png" loading="lazy" />
          </div>
          <div className="col-1">
            <h2>Detailed Statistics</h2>
            <p className="paragraph">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <button className="btn btn-blue">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
