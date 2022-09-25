import React from "react";
import "./Features.css";

function Features() {
  return (
    <section id="features" class="features">
      <div class="container container-flex">
        <div class="intro-col-1">
          <h2>
            Market sentiments, portfolio, and run the infrastructure of your
            choice
          </h2>
        </div>

        <div class="features-main-col">
          <div class="col-1">
            <h2>Invest Smart</h2>
            <p class="paragraph">
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.
            </p>
            <button class="btn btn-blue">Learn More</button>
          </div>
          <div class="col-2">
            <img src="feature-1-img.png" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
