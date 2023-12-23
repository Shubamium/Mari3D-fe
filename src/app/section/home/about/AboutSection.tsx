import React from 'react'
import './aboutSection.scss'
type aboutSectionProps = {

}

export default function AboutSection({}: aboutSectionProps) {
	return (
		<section id='container_about'>
			<article>
					<div className="panel">
							<h2>About Me</h2>
							<p>Explain what you provide and your experiences. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
					</div>
			</article>
			<figure>
				<img src="decor/about_back.png" alt="" className='decor_back'/>
			</figure>
		</section>
	)
}