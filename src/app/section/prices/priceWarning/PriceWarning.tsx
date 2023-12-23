import React from 'react'
import './priceWarning.scss'
import Button from '@/app/general/button/Button'
import { FaArrowRight, FaCheckSquare, FaExclamationTriangle } from 'react-icons/fa'
type Props = {}

export default function PriceWarning({}: Props) {
	return (
		<section id="container_price-warning">
			<div className="decor">
				<svg xmlns="http://www.w3.org/2000/svg" className='stroke l' width="215" height="93" viewBox="0 0 215 93" fill="none">
					<path d="M213.5 91L173.5 51H51L2 2" stroke="#FCE1E4" stroke-width="4"/>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" className='stroke r' width="427" height="68" viewBox="0 0 427 68" fill="none">
					<path d="M2 66L66 2H206L236 32H466.5" stroke="#FCE1E4" stroke-width="4"/>
				</svg>
			</div>
			<div className="warning">
				<FaExclamationTriangle/>
				<p>
					Please be aware that any price listed above is subject to change depending on complexity!. 
					Any numbers listed here are ballparks and <b>should not be taken as final.</b>
				</p>
			</div>
			<div className="action">
				<h2>Something about after acknowledging it they can go through this link:</h2>
				<div className="btn-list">
					<Button to='https://forms.gle/NLMiugF9ux725Ji38' newTab> Apply to Google Forms <FaArrowRight/></Button>
					<Button variant='outlined' to='https://vgen.co/_Mari_Art' newTab> Apply to VGEN <FaCheckSquare/> </Button>
				</div>
			</div>
		</section>
	)
}