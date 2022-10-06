import React from "react";
import { useEffect } from "react";
import "./Statistics.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Statistics() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section id="statistics" className="statistics">
			<div className="container container-flex">
				<div className="statistics-main-col">
					<div className="col-2" data-aos="fade-right">
						<img src="feature-2-img.png" alt="stats" loading="lazy" />
					</div>
					<div className="col-1" data-aos="fade-left">
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
