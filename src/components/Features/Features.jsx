import React from "react";
import "./Features.css";

function Features() {
	return (
		<section id="features" className="features">
			<div className="container container-flex">
				<div className="intro-col-1" data-aos="fade-up">
					<h2>
						Market sentiments, portfolio, and run the infrastructure of your
						choice
					</h2>
				</div>

				<div className="features-main-col">
					<div className="col-1" data-aos="fade-right">
						<h2>Invest Smart</h2>
						<p className="paragraph">
							Get full statistic information about the behaviour of buyers and
							sellers will help you to make the decision.
						</p>
						<button className="btn btn-blue">Learn More</button>
					</div>
					<div className="col-2">
						<img
							src="feature-1-img.png"
							data-aos="fade-down"
							alt="img"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
