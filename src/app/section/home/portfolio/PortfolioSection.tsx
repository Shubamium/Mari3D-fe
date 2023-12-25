import React from 'react'
import './portfolioSection.scss'
import { FaArrowRight } from 'react-icons/fa'
import Button from '@/app/general/button/Button'
type PortfolioProps = {

}


export default function PortfolioSection({}: PortfolioProps) {
	return (
		<section id="container_portfolio">
			<div className="content">
				<figure>
					<img src="/image/banner.png" alt="" />
				</figure>
				<article>
					<h2>Portfolio</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
					<div className="action">
						<Button to='/portfolio'> View My Portfolio <FaArrowRight/> </Button>	
						<Button to='https://forms.gle/NLMiugF9ux725Ji38' newTab variant="outlined"> Apply to the waitlist <FaArrowRight/> </Button>	
					</div>	
				</article>
			</div>
		</section>
	)
}