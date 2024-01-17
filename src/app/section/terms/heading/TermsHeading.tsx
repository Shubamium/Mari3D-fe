import React from 'react'
import './termsHeading.scss'
type Props = {}

export default function TermsHeading({}: Props) {
	return (
		<section id='container_terms-header'>

			<div className="confine">
				<div className="icon">
					<img src="/image/icon_high.webp" alt="" />
					<svg xmlns="http://www.w3.org/2000/svg" className='decor_line' width="628" height="302" viewBox="0 0 628 302" fill="none">
						<path d="M15.6089 301L63.9967 233.282H162.853M607.188 279.155V233.282H162.853M461.505 131.34L506.25 193.961L557.239 122.602L493.243 33.0388L436.01 113.136M436.01 113.136L396.988 167.748L357.965 113.136L406.873 44.6893L375.655 1H332.991L286.684 65.8058L313.22 102.942V167.748L332.991 195.417H272.116L226.33 131.34H272.116L217.485 54.8835L162.853 131.34L142.562 102.942L162.853 74.5437M436.01 113.136H212.802L313.22 253.67L434.969 83.2815L515.095 195.417H241.939M357.965 33.0388L241.939 195.417M241.939 195.417H221.127L92.0928 14.835L21.8525 113.136L101.458 224.544L130.075 184.495L85.8492 122.602L162.853 14.835L184.186 44.6893L162.853 74.5437M162.853 233.282V74.5437M0 131.34H628" stroke="white" stroke-opacity="0.45" stroke-width="2"/>
					</svg>
				</div>
				<article>
					<h1>Terms Of Services</h1>
					<p>Please read everything throughly before applying!</p>
				</article>
			</div>

		</section>
	)
}