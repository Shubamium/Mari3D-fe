import React from 'react'
import './priceHeading.scss'
type Props = {}

export default function PriceHeading({}: Props) {
	return (
		<section id="container_price-heading">
				<div className="title">
					<div className="confine">
						<h2>3D COMMISSIONS</h2>
						<div className="decor">
							<div className="arrows">
								<div className="arrow"></div>
								<div className="arrow"></div>
								<div className="arrow"></div>
							</div>
							<div className="circle">
							</div>
						</div>
					</div>
				</div>

				<article className="main-pricing">
					 <div className="main-title">
							<h2>Starting At</h2>
							<p>Will vary based on complexity and is subject to change</p>
					 </div>
					 <div className="price-container">
						 <p>€1000</p>
					 </div>
				</article>
		</section>
	)
}