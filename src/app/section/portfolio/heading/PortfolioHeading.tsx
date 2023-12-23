import React from 'react'
import './portfolioHeading.scss'
type Props = {}

export default function PortfolioHeading({}: Props) {
	return (
		<div className='container_portfolio-head'>
			<div className="confine">
				 <article>
						<div className="head">
							<h2>Portfolio</h2>
							<img src="decor/arrow_theme.png" alt="" />
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
				 </article>
				 <figure>
						<img src="/image/icon_high.png" alt="" />
				 </figure>
			</div>
		</div>
	)
}