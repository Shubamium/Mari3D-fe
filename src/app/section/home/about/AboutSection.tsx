import React from 'react'
import './aboutSection.scss'
type aboutSectionProps = {

}

export default function AboutSection({}: aboutSectionProps) {
	return (
		<section id='container_about'>
			<article>
					<div className="panel shadow-md">
							<div className="boxes">
								<div className="box"></div>
								<div className="box"></div>
								<div className="box"></div>
							</div>
							<svg width="29"  className='decor_side' height="123" viewBox="0 0 29 123" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0 34L18.5 27.5L29 4.33241L-1.48619e-06 0L0 34Z" fill="#FFE16D"/>
								<path d="M0 123L29 112.335L15.5 75.0083L0 75.0083L0 123Z" fill="white"/>
								<path d="M0 68L18 61.5L18 37.5L-1.48619e-06 34L0 68Z" fill="#94DC64"/>
							</svg>

							<h2>About Me</h2>
							<p>Explain what you provide and your experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
					</div>
			</article>
			<figure>
				<img src="decor/about_back.webp" alt="" className='decor_back'/>
			</figure>
		</section>
	)
}