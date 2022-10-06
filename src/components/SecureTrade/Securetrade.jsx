import React from "react";
import { useEffect } from "react";
import "./Securetrade.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Securetrade() {
	useEffect(() => {
		AOS.init();
	}, []);
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
						<div
							className="inner-col-1 whiteStyle"
							data-aos="fade-up"
							id="card-one"
						>
							<img src="bitcon.png" alt="bitcoin" loading="lazy" />
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
							className="inner-col-1 whiteStyle"
							data-aos="fade-up"
							id="card-two"
						>
							<img src="ethereum.png" alt="ethereum" loading="lazy" />
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
						<div
							className="inner-col-1  whiteStyle"
							data-aos="fade-up"
							id="card-three"
						>
							<img src="litecoin.png" alt="litecoin" loading="lazy" />
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
